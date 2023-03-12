import React from 'react';
import { useRouter } from 'expo-router';
import {
  List,
  ListItem,
  Layout,
  Text,
  Button,
  Divider,
  TopNavigation,
} from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';

type ListData = {
  id: number;
  name: string;
  birth_year: string;
};

const DATA = [
  {
    id: 1,
    name: 'Luke Skywalker',
    birth_year: '19BBY',
  },
  {
    id: 2,
    name: 'C-3PO',
    birth_year: '112BBY',
  },
  {
    id: 3,
    name: 'R2-D2',
    birth_year: '33BBY',
  },
  {
    id: 4,
    name: 'Darth Vader',
    birth_year: '41.9BBY',
  },
  {
    id: 5,
    name: 'Leia Organa',
    birth_year: '19BBY',
  },
];

const HomeScreen = () => {
  const router = useRouter();

  const renderListItems = ({ item }: { item: ListData }) => {
    return (
      <ListItem>
        <Layout style={{ flex: 1, justifyContent: 'center' }}>
          <Text>{item.name}</Text>
          <Button
            onPress={() =>
              // navigation.navigate('Details', {
              //   name: item.name,
              //   birthYear: item.birth_year,
              // })
              router.push({
                pathname: '/details',
                params: {
                  name: item.name,
                  birthYear: item.birth_year,
                },
              })
            }
          >
            click!
          </Button>
        </Layout>
      </ListItem>
    );
  };

  return (
    <Layout style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <TopNavigation title="Home" alignment="center" />
        <List
          data={[...DATA, ...DATA, ...DATA, ...DATA]}
          renderItem={renderListItems}
          ItemSeparatorComponent={Divider}
        />
      </SafeAreaView>
    </Layout>
  );
};

export default HomeScreen;
