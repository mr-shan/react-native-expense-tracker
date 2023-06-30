import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, Pressable } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import { RootState } from '../store/store';

import { COLORS } from '../constants/styles';
import Expense from '../models/Expense';
import ExpenseDetails from './../components/manageExpense/ExpenseDetails';
import AddNewExpense from '../components/manageExpense/AddNewExpense';
import ExpenseFooter from '../components/manageExpense/ExpenseFooter';

import { remove, add, update } from './../store/slices/expenseSlice';

interface IProps {
  route: RouteProp<any>;
  navigation: NativeStackNavigationProp<any, any>;
}

export default (props: IProps) => {
  const dispatch = useDispatch();
  const expenseList = useSelector((state: RootState) => state.expense.expenses);

  const expenseId = props.route.params?.toString() || '';
  let expenseDetails: Expense | null = null;

  useLayoutEffect(() => {
    if (expenseId) {
      props.navigation.setOptions({
        headerRight: () => (
          <Pressable onPress={onRemoveExpenseHandler}>
            <Ionicons name='trash-bin' color={COLORS.text400} size={24} />
          </Pressable>
        ),
        title: 'Manage Expense',
      });
    } else {
      props.navigation.setOptions({
        title: 'Add New',
      });
    }
  }, [props.route.params, props.navigation]);

  const onSubmitHandler = (expense: Expense) => {
    if (expenseId && expenseDetails) {
      dispatch(
        update({ id: expenseId, data: { ...expenseDetails, amount: 200 } })
      );
    } else {
      const expense: Expense = {
        id: Math.random().toFixed(4).toString(),
        name: 'Test',
        description: 'Test again',
        amount: 10,
        date: new Date('2023-06-21'),
        category: 'expc4',
        type: 'ext2',
      };
      dispatch(add(expense));
    }
    props.navigation.goBack();
  };

  const onRemoveExpenseHandler = () => {
    dispatch(remove(expenseId));
    props.navigation.goBack();
  };

  const onCancelHandler = () => {
    props.navigation.goBack();
  };

  let Component = null;

  if (expenseId) {
    expenseDetails = expenseList.find((e) => e.id === expenseId) as Expense;
    Component = <ExpenseDetails expense={expenseDetails} />;
  } else {
    Component = <AddNewExpense />;
  }

  return (
    <View style={styles.container}>
      {Component}
      <ExpenseFooter onCancel={onCancelHandler} onSubmit={onSubmitHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg600,
    paddingTop: 10,
    justifyContent: 'space-between',
  },
});
