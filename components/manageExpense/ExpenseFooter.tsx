import { View, StyleSheet } from 'react-native';
import AccentButtonOutlined from '../ui/buttons/AccentButtonOutlined';
import AccentButton from '../ui/buttons/AccentButton';

interface IProps {
  onCancel: any;
  onSubmit: any;
  submitButtonLabel?: string;
}

export default (props: IProps) => {
  return (
    <View style={styles.container}>
      <AccentButtonOutlined
        containerStyle={styles.button}
        label='Cancel'
        onPress={props.onCancel}
      />
      <AccentButton
        containerStyle={styles.button}
        label={props.submitButtonLabel || 'Save'}
        onPress={props.onSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
  button: {
    flex: 1,
  },
});
