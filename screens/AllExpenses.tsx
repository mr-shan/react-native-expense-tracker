import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { COLORS } from '../constants/styles';
import { MOCK_EXPENSES, EXPENSE_CATEGORIES } from '../data/mock-expenses';
import Expense from '../models/Expense';

import ExpenseList from '../components/expense-list/ExpenseList';

interface IProps {
  route: RouteProp<any>;
  navigation: NativeStackNavigationProp<any, any>;
}

export default (props: IProps) => {
  const onExpensePressHandler = (expense: Expense) => {
    console.log(expense);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Total Expense for this month:</Text>
        <Text style={styles.amount}>$ 200</Text>
      </View>
      <ExpenseList data={MOCK_EXPENSES} onPress={onExpensePressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray600,
    paddingTop: 10,
  },
  header: {
    backgroundColor: COLORS.gray500,
    padding: 12,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'center',
    borderRadius: 5
  },
  title: {
    fontSize: 16,
    color: COLORS.accent500,
    fontWeight: '500'
  },
  amount: {
    fontSize: 18,
    color: COLORS.white400,
    fontWeight: '500'
  }
});