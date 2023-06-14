import { sha256 } from '@noble/hashes/sha256';
import { bytesToHex } from '@noble/hashes/utils';

import { COINTYPE_LIGHTING } from '@onekeyhq/shared/src/engine/engineConsts';
import debugLogger from '@onekeyhq/shared/src/logger/debugLogger';

import { AccountType } from '../../../types/account';
import { KeyringHdBase } from '../../keyring/KeyringHdBase';

import { generateNativeSegwitAccounts } from './helper/account';
import { signature } from './helper/signature';

import type { ExportedSeedCredential } from '../../../dbs/base';
import type { Signer } from '../../../proxy';
import type { DBVariantAccount } from '../../../types/account';
import type {
  IPrepareSoftwareAccountsParams,
  ISignCredentialOptions,
  ISignedTxPro,
  IUnsignedTxPro,
} from '../../types';
import type { IEncodedTxLighting } from './types';
import type LightingVault from './Vault';

export class KeyringHd extends KeyringHdBase {
  override getSigners(): Promise<Record<string, Signer>> {
    return Promise.resolve({} as Record<string, Signer>);
  }

  override async prepareAccounts(
    params: IPrepareSoftwareAccountsParams,
  ): Promise<DBVariantAccount[]> {
    const { password, indexes, names } = params;
    const { seed, entropy } = (await this.engine.dbApi.getCredential(
      this.walletId,
      password,
    )) as ExportedSeedCredential;
    const nativeSegwitAccounts = await generateNativeSegwitAccounts({
      engine: this.engine,
      seed,
      password,
      indexes,
      names,
    });

    console.log('nativeSegwitAddress', nativeSegwitAccounts);
    const client = await (this.vault as LightingVault).getClient();

    const ret = [];
    for (const account of nativeSegwitAccounts) {
      const accountExist = await client.checkAccountExist(account.address);
      if (!accountExist) {
        const hashPubKey = bytesToHex(sha256(account.xpub));
        const sign = await signature({
          msgPayload: {
            type: 'register',
            pubkey: hashPubKey,
            address: account.address,
          },
          engine: this.engine,
          path: account.path,
          password,
          entropy,
        });
        await client.createUser({
          hashPubKey,
          address: account.address,
          signature: sign,
        });
        console.log('====>sign: ', sign);
      }
      const path = `m/44'/${COINTYPE_LIGHTING}'/${account.index}`;
      ret.push({
        id: `${this.walletId}--${path}`,
        name: account.name,
        type: AccountType.VARIANT,
        path,
        coinType: COINTYPE_LIGHTING,
        pub: account.xpub,
        address: account.address,
        addresses: {
          normalizedAddress: account.address,
          realPath: account.path,
        },
      });
    }

    return ret;
  }

  override async signTransaction(
    unsignedTx: IUnsignedTxPro,
    options: ISignCredentialOptions,
  ): Promise<ISignedTxPro> {
    debugLogger.sendTx.info('signTransaction result', unsignedTx);
    const { password } = options;
    const dbAccount = (await this.getDbAccount()) as DBVariantAccount;
    const { entropy } = (await this.engine.dbApi.getCredential(
      this.walletId,
      password ?? '',
    )) as ExportedSeedCredential;
    const { invoice, expired, created, nonce, paymentHash } =
      unsignedTx.encodedTx as IEncodedTxLighting;
    const sign = await signature({
      msgPayload: {
        type: 'transfer',
        invoice,
        expired,
        created: Number(created),
        nonce,
      },
      engine: this.engine,
      path: dbAccount.addresses.realPath,
      password: password ?? '',
      entropy,
    });
    return {
      txid: `${paymentHash}--${nonce}`,
      rawTx: sign,
    };
  }
}