import { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { COLORS } from '../constants/styles';
import { MOCK_EXPENSES } from '../data/mock-expenses';
import Expense from '../models/Expense';
import ExpenseDetails from '../components/manage-expense/ExpenseDetails';
import AddNewExpense from '../components/manage-expense/AddNewExpense';

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
      title: expenseId ? 'Manage Expense' : 'Add New',
    });
  }, [expenseId]);

  const addNewExpenseHandler = (expense: Expense) => {
    console.log("Nnew expense added")
  }

  let Component = null;

  if (expenseId) {
    const expense = MOCK_EXPENSES.find((e) => e.id == expenseId) as Expense;
    Component = <ExpenseDetails expense={expense}/>
  } else {
    Component = <AddNewExpense onSubmit={addNewExpenseHandler}/>
  }

  return (
    <View style={styles.container}>
      { Component }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg600,
    paddingTop: 10,
  }
});
