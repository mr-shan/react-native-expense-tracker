import { View, StyleSheet } from 'react-native';
import AccentButton from './../ui/buttons/AccentButton';
import AccentButtonOutlined from './../ui/buttons/AccentButtonOutlined';

interface IProps {
  onCancel: any
  onSubmit: any
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
        label='Save'
        onPress={props.onSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 32,
    maxWidth: 280,
    width: '100%',
    alignSelf: 'center',
  },
  button: {
    marginBottom: 16,
  },
});
