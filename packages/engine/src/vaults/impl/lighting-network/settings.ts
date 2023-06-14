import type { LocaleIds } from '@onekeyhq/components/src/locale';
import {
  COINTYPE_LIGHTING,
  INDEX_PLACEHOLDER,
} from '@onekeyhq/shared/src/engine/engineConsts';

import type { IVaultSettings } from '../../types';

const settings: IVaultSettings = Object.freeze({
  feeInfoEditable: false,
  privateKeyExportEnabled: false,
  tokenEnabled: true,
  txCanBeReplaced: false,

  importedAccountEnabled: false,
  hardwareAccountEnabled: false,
  externalAccountEnabled: false,
  watchingAccountEnabled: false,

  isUTXOModel: false,

  accountNameInfo: {
    default: {
      prefix: 'Lighting',
      category: `44'/${COINTYPE_LIGHTING}'`,
      template: `m/44'/${COINTYPE_LIGHTING}'/${INDEX_PLACEHOLDER}'/0/0`,
      coinType: COINTYPE_LIGHTING,
    },
  },

  validationRequired: true,
  hiddenNFTTab: true,
  hiddenToolTab: true,
  hiddenAddress: true,
  hiddenAccountInfoSwapOption: true,
  hiddenAccountInfoMoreOption: true,
  hiddenFeeOnTxDetail: true,
  displayMemo: true,

  txExtraInfo: [
    {
      key: 'memo',
      title: 'content__description' as LocaleIds,
      canCopy: false,
      isShorten: false,
    },
  ],
});

export default settings;