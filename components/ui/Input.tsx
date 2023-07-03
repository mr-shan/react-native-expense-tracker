import {
  KeyboardAvoidingView,
  Text,
  StyleSheet,
  TextInput,
  TextInputProps,
  StyleProp,
  Platform,
} from 'react-native';

import { COLORS } from '../../constants/styles';

interface IProps {
  label: string;
  displayName: string;
  value: string;
  onChange: any;
  containerStyle?: StyleProp<any>;
  inputStyle?: StyleProp<any>;
  inputConfig?: TextInputProps;
  rules: Array<Function>
  isValid: boolean,
  isTouched: boolean
}

export default (props: IProps) => {
  const onChangeHandler = (event: string) => {
    let isValid = true;
    for (let rule of props.rules) {
      if (!rule(event)) {
        isValid = false;
        break;        
      }
    }
    props.onChange(props.label, event, isValid);
  };

  const behavior = Platform.OS === 'ios' ? 'padding' : 'height';

  const showError = !props.isValid && props.isTouched;

  return (
    <KeyboardAvoidingView
      style={[styles.container, { ...props.containerStyle }]}
      behavior={behavior}
    >
      <Text style={styles.label}>{props.displayName}</Text>
      <TextInput
        style={[styles.textInput, { ...props.inputStyle }, showError && styles.error]}
        value={props.value}
        onChangeText={onChangeHandler}
        {...props.inputConfig}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {},
  textInput: {
    backgroundColor: COLORS.bg500,
    borderRadius: 6,
    padding: 10,
    color: COLORS.text400,
    fontSize: 16,
    verticalAlign: 'top',
    borderColor: COLORS.bg500,
    borderWidth: 1
  },
  label: {
    color: COLORS.text600,
    marginBottom: 5,
    paddingLeft: 2,
  },
  error: {
    borderWidth: 1,
    borderColor: 'red'
  }
});
