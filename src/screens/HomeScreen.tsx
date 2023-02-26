import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  List,
  ListItem,
  Layout,
  Text,
  Button,
  Divider,
} from '@ui-kitten/components';

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
  const navigation = useNavigation();

  const renderListItems = ({ item }) => {
    return (
      <ListItem>
        <Layout style={{ flex: 1, justifyContent: 'center' }}>
          <Button
            onPress={() =>
              navigation.navigate('Details', {
                name: item.name,
                birthYear: item.birth_year,
              })
            }
          >
            {item.name}
          </Button>
        </Layout>
      </ListItem>
    );
  };

  return (
    <Layout style={{ flex: 1, paddingTop: 10 }}>
      <List
        data={[...DATA, ...DATA, ...DATA, ...DATA]}
        renderItem={renderListItems}
        ItemSeparatorComponent={Divider}
      />
    </Layout>
  );
};

export default HomeScreen;
