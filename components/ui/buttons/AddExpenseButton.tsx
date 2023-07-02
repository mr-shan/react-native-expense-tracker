import { Pressable, StyleSheet, Platform, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { COLORS } from '../../../constants/styles';

export default () => {
  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate('ManageExpense');
  };

  const getPressableStyle = (pressed: boolean) => {
    const pressableStyles: Array<any> = [styles.pressable];
    if (pressed && Platform.OS === 'ios')
      pressableStyles.push(styles.itemPressed);
    return pressableStyles;
  };

  return (
    <Pressable style={styles.container} onPress={() => {}}>
      <Pressable
        onPress={pressHandler}
        style={({ pressed }) => getPressableStyle(pressed)}
        android_ripple={{ color: COLORS.bg500 }}
      >
        <Ionicons
          style={styles.button}
          name='add-circle'
          color={COLORS.accent500}
          size={70}
        />
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressable: {
    position: 'absolute',
    top: -20,
    borderRadius: 50,
    overflow: 'hidden',
  },
  itemPressed: {
    opacity: 0.7,
  },
  button: {
    backgroundColor: COLORS.bg600,
    paddingLeft: 4
  },
});
