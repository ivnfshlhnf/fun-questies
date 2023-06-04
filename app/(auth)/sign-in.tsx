import { Button, Icon, Input, Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { AuthContext, useAuth } from '../../context/auth/provider';
import { IUser, UserContextType } from '../../types/@types.user';

const SignIn: React.FC = () => {

  const { setUser } = useAuth();
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');

  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const AlertIcon = (props: any) => (
    <Icon {...props} name="alert-circle-outline" />
  );
  const renderIcon = (props: any) => (
    <Pressable onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </Pressable>
  );

  const renderCaption = () => {
    return (
      <Layout style={styles.captionContainer}>
        {AlertIcon({ style: styles.captionIcon })}
        <Text style={styles.captionText}>
          Should contain at least 8 symbols
        </Text>
      </Layout>
    );
  };

  const signIn = () => {
    console.log('signing in user')
    const loginUser: IUser = {
      name: username,
      password,
      id: 'hahahahah',
    };
    setUser(loginUser);
  };

  const renderPasswordField = () => {
    return (
      <Input
        value={password}
        label="Password"
        placeholder="Place your Text"
        caption={renderCaption}
        accessoryRight={renderIcon}
        secureTextEntry={secureTextEntry}
        onChangeText={nextValue => setPassword(nextValue)}
        style={{ width: 240 }}
      />
    );
  };

  const renderUsernameField = () => {
    return (
      <Input
        value={username}
        label="Username"
        placeholder="Place your Text"
        onChangeText={v => setUsername(v)}
        style={{ width: 240 }}
      />
    );
  };

  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {renderUsernameField()}
      {renderPasswordField()}
      <Button style={{ marginTop: 24 }} onPress={() => signIn()}>
        Sign In
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  captionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  captionIcon: {
    width: 50,
    marginRight: 5,
  },
  captionText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#8F9BB3',
  },
});

export default SignIn;
