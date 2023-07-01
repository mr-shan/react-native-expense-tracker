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
}

export default (props: IProps) => {
  const onChangeHandler = (event: string) => {
    props.onChange(props.label, event);
  };

  const behavior = Platform.OS === 'ios' ? 'padding' : 'height';

  return (
    <KeyboardAvoidingView
      style={[styles.container, { ...props.containerStyle }]}
      behavior={behavior}
    >
      <Text style={styles.label}>{props.displayName}</Text>
      <TextInput
        style={[styles.textInput, { ...props.inputStyle }]}
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
  },
  label: {
    color: COLORS.text600,
    marginBottom: 5,
    paddingLeft: 2,
  },
});
