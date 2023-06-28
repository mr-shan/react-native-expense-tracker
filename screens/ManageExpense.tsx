import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { COLORS } from '../constants/styles';
import { MOCK_EXPENSES } from '../data/mock-expenses';
import Expense from '../models/Expense';
import { useEffect, useLayoutEffect, useState } from 'react';

interface IProps {
  route: RouteProp<any>;
  navigation: NativeStackNavigationProp<any, any>;
}

export default (props: IProps) => {
  const [expenseId, setExpenseId] = useState('');

  useEffect(() => {
    const id = props.route.params || '';
    setExpenseId(id);
  }, [props.route.params, props.navigation]);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: expenseId ? 'Manage Expense' : 'Add New'
    })
  }, [expenseId]);

  if (!expenseId) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Add new Expense here...</Text>
        </View>
      </View>
    )
  }

  const expense = MOCK_EXPENSES.find(e => e.id == expenseId) as Expense;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{expense.name}</Text>
        <Text style={styles.amount}>{expense.amount}</Text>
      </View>
      <View style={styles.header}>
        <Text>{expense.date.toDateString()}</Text>
        <Text>{expense.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg600,
    paddingTop: 10,
  },
  header: {
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
