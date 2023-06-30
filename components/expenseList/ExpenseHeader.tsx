import { View, Text, StyleSheet } from 'react-native';

import { COLORS } from '../../constants/styles';

interface IProps {
  totalExpense: string;
}

export default (props: IProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Total Expense for this month:</Text>
      <Text style={styles.amount}>$ {props.totalExpense}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.bg500,
    padding: 12,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    color: COLORS.accent500,
    fontWeight: '500',
  },
  amount: {
    fontSize: 18,
    color: COLORS.text400,
    fontWeight: '500',
  },
});
