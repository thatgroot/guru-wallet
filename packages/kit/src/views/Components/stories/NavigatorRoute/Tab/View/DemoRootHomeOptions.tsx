/* eslint-disable react/no-unstable-nested-components */
import { useLayoutEffect } from 'react';

import { useNavigation } from '@react-navigation/native';

import { Button, Stack, YStack } from '@onekeyhq/components';
import HeaderButtonGroup from '@onekeyhq/components/src/Navigation/Header/HeaderButtonGroup';
import HeaderButtonIcon from '@onekeyhq/components/src/Navigation/Header/HeaderButtonIcon';

import { Layout } from '../../../utils/Layout';
import { NavigationFocusTools } from '../../../utils/NavigationTools';
import { FreezeProbe } from '../../../utils/RenderTools';
import { RootModalRoutes } from '../../Modal/Routes';
import { DemoRootRoutes } from '../../Routes';

import type {
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';

const DemoRootHomeOptions = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtonGroup>
          <HeaderButtonIcon name="AnonymousHidden2Outline" />
          <HeaderButtonIcon name="ArchiveOutline" />
          <HeaderButtonIcon name="AlignmentJustifyOutline" />
        </HeaderButtonGroup>
      ),
      headerSearchBarOptions: {
        placeholder: '搜索',
        inputType: 'text',
        onChangeText: (event: NativeSyntheticEvent<TextInputChangeEventData>) =>
          console.log('onChangeText', event.nativeEvent.text),
      },
    });
  }, [navigation]);

  return (
    <Layout
      description="这是一个路由 Header 演示自定义 headerRight 的用法"
      suggestions={[
        '使用方式与 @react-navigation/native-stack 相同',
        '同时可以正常使用 headerSearchBarOptions',
      ]}
      boundaryConditions={[
        '为了不破坏 Navigation 默认行为，只有一个 headerRight 图标可以根据官方 API 写，推荐使用 <HeaderButtonIcon> 组件，与 Icon 组件用法相同',
        '为了不破坏 Navigation 默认行为，如果是一个 headerRight 图标组需要使用 <HeaderButtonGroup> 组件，里面处理好了各种边距问题',
      ]}
      elements={[
        {
          title: 'HeaderButtonIcon 演示',
          element: (
            <YStack>
              <HeaderButtonIcon
                name="CrossedLargeOutline"
                color="$borderColorHover"
                onPress={() => {
                  alert('clicked');
                }}
              />
              <HeaderButtonIcon
                name="ChevronLeftOutline"
                onPress={() => {
                  alert('clicked');
                }}
              />
            </YStack>
          ),
        },
        {
          title: '弹出 Modal',
          element: (
            <Button
              onPress={() => {
                // @ts-expect-error
                navigation.navigate(DemoRootRoutes.Modal, {
                  screen: RootModalRoutes.DemoLockedModal,
                });
              }}
            >
              <Button.Text>弹出 Modal</Button.Text>
            </Button>
          ),
        },
        {
          title: '渲染测试',
          element: (
            <Stack>
              <FreezeProbe componentName="DemoRootHomeOptions" />
              <NavigationFocusTools componentName="DemoRootHomeOptions" />
            </Stack>
          ),
        },
      ]}
    />
  );
};

export default DemoRootHomeOptions;