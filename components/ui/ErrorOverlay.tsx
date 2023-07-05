import { View, Text, StyleSheet, Button } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { COLORS } from '../../constants/styles';

interface IProps {
  message: string;
  onClose: any;
}

export default (props: IProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.overlay}></View>
      <View style={styles.popupContainer}>
        <Ionicons size={36} color={COLORS.text400} name='warning' />
        <Text style={{ color: COLORS.text400, fontSize: 18, marginTop: 10, marginBottom: 10 }}>{props.message}</Text>
        <Button title='Close' color='red' onPress={props.onClose} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    opacity: 0.5,
    backgroundColor: COLORS.bg900,
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  popupContainer: {
    textAlign: 'center',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.text600,
    backgroundColor: COLORS.bg600,
    alignItems: 'center',
    gap: 10
  },
});
