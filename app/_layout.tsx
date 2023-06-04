// import { Stack } from "expo-router";
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Slot, Stack } from 'expo-router';
import React from 'react';
import AuthProvider from '../context/auth/provider';

export default function Root() {
  return (
    // Setup the auth context and render our layout inside of it.
    <AuthProvider>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        {/* <Stack screenOptions={{ headerShown: false }} /> */}
        <Slot />
      </ApplicationProvider>
    </AuthProvider>
  );
}
