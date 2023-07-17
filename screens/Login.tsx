import { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Input from '../components/ui/Input';
import AccentButton from '../components/ui/buttons/AccentButton';
import GenericButton from '../components/ui/buttons/GenericButton';

import { COLORS } from '../constants/styles';

interface IProps {
  navigation: NativeStackNavigationProp<any, any>
}

export default (props: IProps) => {
  const [email, setEmail] = useState({
    label: 'email',
    displayName: 'Email',
    value: '',
    rules: [],
    isValid: false,
    isTouched: false,
  });
  const [password, setPassword] = useState({
    label: 'password',
    displayName: 'Password',
    value: '',
    rules: [],
    isValid: false,
    isTouched: false,
  });

  const emailChangeHandler = (
    label: string,
    value: string,
    isValid: boolean
  ) => {
    setEmail((data) => ({
      ...data,
      value: value,
      isValid: isValid,
      isTouched: true,
    }));
  };

  const passwordChangeHandler = (
    label: string,
    value: string,
    isValid: boolean
  ) => {
    setPassword((data) => ({
      ...data,
      value: value,
      isValid: isValid,
      isTouched: true,
    }));
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{alignItems: 'center'}}>
      <View style={styles.wrapper}>
        <Input
          {...email}
          onChange={emailChangeHandler}
          containerStyle={styles.inputContainerStyle}
        />
        <Input
          {...password}
          onChange={passwordChangeHandler}
          inputConfig={{
            textContentType: 'password',
            secureTextEntry: true,
          }}
          containerStyle={styles.inputContainerStyle}
        />
        <AccentButton label='Log In' onPress={() => {}} />
        <GenericButton onPress={() => {
          props.navigation.replace('Sign Up')
        }} backgroundColor='transparent'>
          <Text style={styles.buttonText}>Create a new user</Text>
        </GenericButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg700,
  },
  wrapper: {
    backgroundColor: COLORS.bg600,
    borderRadius: 10,
    width: '80%',
    marginTop: 50,
    paddingHorizontal: 20,
    paddingVertical: 26,
  },
  inputContainerStyle: {
    marginBottom: 26,
  },
  buttonText: {
    color: COLORS.text500,
    textAlign: 'center',
    marginTop: 6
  }
});
