import React from 'react';
import { StyleSheet } from 'react-native';
import {
  ViroARScene,
  ViroBox,
  ViroMaterials,
  ViroARSceneNavigator,
} from '@viro-community/react-viro';

const ARPOC = () => {
  const initialScene = () => {
    ViroMaterials.createMaterials({
      monaLisa: {
        diffuseTexture: require('./assets/mona-lisa.png')
      }
    })

    return (
      <ViroARScene>
        <ViroBox width={1} height={1} scale={[0.5, 0.5, 0]} position={[0, 0, -1]} materials={['monaLisa']} />
      </ViroARScene>
    );
  }

  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: initialScene,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: { flex: 1 },
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

export default ARPOC