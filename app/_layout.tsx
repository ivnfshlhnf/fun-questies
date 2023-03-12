// import { Stack } from "expo-router";
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Stack } from 'expo-router';
import React from 'react';

export default function Root() {
  return (
    // Setup the auth context and render our layout inside of it.
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Stack screenOptions={{ headerShown: false }} />
      </ApplicationProvider>
    </>
  );
}
