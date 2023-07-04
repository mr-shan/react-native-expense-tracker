import { View, ActivityIndicator, StyleSheet } from 'react-native';

import { COLORS } from '../../constants/styles';

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.overlay}></View>
        <ActivityIndicator size='large' color={COLORS.text400} />
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
    backgroundColor: COLORS.bg600,
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});
