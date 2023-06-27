import { View, Text, StyleSheet, Pressable, Platform } from 'react-native';

import { COLORS } from '../../constants/styles';
import Expense from '../../models/Expense';

interface IProps {
  expense: Expense;
  onPress: any;
}

export default (props: IProps) => {
  const { id, name, description, amount } = props.expense;

  const onPressHandler = () => {
    props.onPress(props.expense);
  };

  const getPressableStyle = (pressed: boolean) => {
    const pressableStyles: Array<any> = [styles.item];
    if (pressed && Platform.OS === 'ios')
      pressableStyles.push(styles.itemPressed);
    return pressableStyles;
  };

  return (
    <Pressable
      style={({ pressed }) => getPressableStyle(pressed)}
      onPress={onPressHandler}
      android_ripple={{ color: COLORS.bg500 }}
    >
      <View style={styles.header}>
        <Text style={styles.itemText}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Text style={styles.amount}>$ {amount}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  header: {},
  item: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    backgroundColor: COLORS.bg700,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: COLORS.bg500,
    borderWidth: 1,
  },
  itemPressed: {
    opacity: 0.7,
  },
  itemText: {
    color: COLORS.text400,
    fontSize: 16,
    marginBottom: 4,
  },
  description: {
    fontSize: 12,
    color: COLORS.text600,
  },
  amount: {
    color: COLORS.accent500,
    fontWeight: '500',
    fontSize: 16,
  },
});
