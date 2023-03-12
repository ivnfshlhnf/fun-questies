import React from 'react';
import { Text } from 'react-native';
import { useRouter, useSearchParams } from 'expo-router';
import {
  Button,
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';

const BackIcon = (props: any) => <Icon {...props} name="arrow-back" />;
const DetailScreen = () => {
  const router = useRouter();
  const params = useSearchParams();
  const { name, birthYear } = params;

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={router.back} />
  );

  return (
    <Layout style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <TopNavigation
          title="Details"
          alignment="center"
          accessoryLeft={BackAction}
        />
        <Text style={{ fontSize: 18, paddingBottom: 12 }}>Name: {name}</Text>
        <Text style={{ fontSize: 18 }}>Birth Year: {birthYear}</Text>
        <Button
          onPress={() =>
            // navigation.navigate('Details', {
            //   name: item.name,
            //   birthYear: item.birth_year,
            // })
            router.push({
              pathname: '/details',
              params: {
                name: 'change!',
                birthYear,
              },
            })
          }
        >
          click!
        </Button>
      </SafeAreaView>
    </Layout>
  );
};

export default DetailScreen;
