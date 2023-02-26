import React from 'react';
import { StatusBar } from 'expo-status-bar';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

import RootNavigator from './navigation';

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <RootNavigator />
      <StatusBar style="auto" />
    </ApplicationProvider>
  );
}
