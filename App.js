import React from 'react';
import { View, StatusBar } from 'react-native';
import { Routes } from './src/routes';
import { colors, loadFonts } from '../mobile/src/styles/global-styles';

export default function App() {
  return (
    <View>
      {loadFonts() ? <>
        <StatusBar style="light" backgroundColor={colors.root.colormenu} translucent={false} />
        <Routes />
      </> : null}
    </View>
  );
}