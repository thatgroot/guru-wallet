import { forwardRef, useCallback, useEffect, useRef } from 'react';

import { IWebViewWrapperRef } from '@onekeyfe/onekey-cross-webview';

import { Box, Button } from '@onekeyhq/components';
import backgroundApiProxy from '@onekeyhq/kit/src/background/instance/backgroundApiProxy';
import { WebViewWebEmbed } from '@onekeyhq/kit/src/components/WebView/WebViewWebEmbed';
import platformEnv from '@onekeyhq/shared/src/platformEnv';

export function CardanoWebView() {
  const webviewRef = useRef<IWebViewWrapperRef | null>(null);

  const onWebViewRef = useCallback((ref: IWebViewWrapperRef | null) => {
    console.log('get webview ref');
    webviewRef.current = ref;
  }, []);

  const onBridge = () => {
    console.log('background: ', backgroundApiProxy.providers);
    backgroundApiProxy.serviceHardware.testPrivateMessage();
    // backgroundApiProxy.providers.$private.notifyDappAccountsChanged({
    //   send: backgroundApiProxy.sendForProvider('$private'),
    // });
  };

  useEffect(() => {
    if (!platformEnv.isNative) {
      return;
    }

    const jsBridge = webviewRef?.current?.jsBridge;
    if (!jsBridge) {
      return;
    }
    jsBridge.globalOnMessageEnabled = true;
    backgroundApiProxy.connectBridge(jsBridge);
    console.log('connect bridge! =====>');
  }, [webviewRef]);

  const routePath = '/cardano';

  return (
    <Box minH="320px" minW="320px" flex="1">
      <Button
        onPress={() => {
          onBridge();
        }}
      >
        Bridge
      </Button>
      <WebViewWebEmbed
        isSpinnerLoading
        onWebViewRef={onWebViewRef}
        onContentLoaded={() => {
          console.log('Loaded');
        }}
        // customReceiveHandler={receiveHandler}
        // *** use web-embed local html file
        routePath={routePath}
        // *** use remote url
        src={
          platformEnv.isDev
            ? `http://192.168.50.36:3008/#${routePath}`
            : undefined
        }
      />
    </Box>
  );
}

// const CardanoWebViewRef = forwardRef<any, any>((props, ref) => (
//   <CardanoWebView />
// ));

// CardanoWebViewRef.displayName = 'CardanoWebViewRef';

// export default CardanoWebViewRef;
