import { View, StyleSheet } from 'react-native';
import PrimaryButtonOutlined from '../ui/buttons/PrimaryButtonOutlined';
import PrimaryButton from '../ui/buttons/PrimaryButton';

interface IProps {
  onCancel: any
  onSubmit: any
}

export default (props: IProps) => {
  return (
    <View style={styles.container}>
      <PrimaryButtonOutlined
        containerStyle={styles.button}
        label='Cancel'
        onPress={props.onCancel}
      />
      <PrimaryButton
        containerStyle={styles.button}
        label='Save'
        onPress={props.onSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection:  'row',
    justifyContent: 'space-between',
    gap: 20
  },
  button: {
    flex: 1
  },
});
