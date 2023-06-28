import { Pressable, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { COLORS } from '../../constants/styles';

export default () => {
  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate('ManageExpense', '');
  };

  const getPressableStyle = (pressed: boolean) => {
    const pressableStyles: Array<any> = [styles.container];
    if (pressed && Platform.OS === 'ios')
      pressableStyles.push(styles.itemPressed);
    return pressableStyles;
  };

  return (
    <Pressable
      style={({ pressed }) => getPressableStyle(pressed)}
      onPress={pressHandler}
      android_ripple={{ color: COLORS.bg500 }}
    >
      <Ionicons name='add-circle' color={COLORS.accent500} size={62} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: COLORS.bg600,
    padding: 0,
    borderRadius: 100,
    width: 65,
    height: 65,
    top: -15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 4,
  },
  itemPressed: {
    opacity: 0.7,
  },
});
