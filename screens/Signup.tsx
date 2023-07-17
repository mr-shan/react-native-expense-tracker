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
  const [name, setName] = useState({
    label: 'name',
    displayName: 'Name',
    value: '',
    rules: [],
    isValid: false,
    isTouched: false,
  });
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
  const [confirmPass, setConfirmPass] = useState({
    label: 'confirmPass',
    displayName: 'Confirm Password',
    value: '',
    rules: [],
    isValid: false,
    isTouched: false,
  });

  const nameChangeHandler = (
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

  const confirmPassChangeHandler = (
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
          {...name}
          onChange={nameChangeHandler}
          containerStyle={styles.inputContainerStyle}
        />
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
        <Input
          {...confirmPass}
          onChange={confirmPassChangeHandler}
          inputConfig={{
            textContentType: 'password',
            secureTextEntry: true,
          }}
          containerStyle={styles.inputContainerStyle}
        />
        <AccentButton label='Sign Up' onPress={() => {}} />
        <GenericButton onPress={() => {
          props.navigation.replace('Login')
        }} backgroundColor='transparent'>
          <Text style={styles.buttonText}>Existing user? Log in!</Text>
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
