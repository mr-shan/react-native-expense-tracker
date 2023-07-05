import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


import { RootState } from '../store/store';
import { totalExpenseSelector } from '../store/slices/expenseSlice';

import { COLORS } from '../constants/styles';
import Expense from '../models/Expense';

import ExpenseList from '../components/expenseList/ExpenseList';
import ExpenseHeader from '../components/expenseList/ExpenseHeader';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import ErrorOverlay from '../components/ui/ErrorOverlay';

import { fetchExpenses } from '../api/http';
import { set } from './../store/slices/expenseSlice';

interface IProps {
  route: RouteProp<any>;
  navigation: NativeStackNavigationProp<any, any>;
}

export default (props: IProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const dispatch = useDispatch();
  const expenseList = useSelector((state: RootState) => state.expense.expenses);
  const totalExpenses = useSelector((state: RootState) => totalExpenseSelector(state.expense));

  const onExpensePressHandler = (expense: Expense) => {
    props.navigation.navigate('ExpenseDetails', expense.id);
  };

  useEffect(() => {
    const getExpenses = async () => {
      const expenses = await fetchExpenses() as any;
      if (!expenses) return;
      if (expenses?.error) {
        setIsError(expenses?.details)
      } else 
        dispatch(set(expenses));
      setIsLoading(false);
    }
    setIsLoading(true)
    getExpenses();
  }, [])

  if (expenseList.length === 0 && !isLoading) {
    return <View style={styles.noExpenseContainer}>
      <Text style={styles.emptyExpenseList}>No expense found!</Text>
    </View>
  }

  return (
    <View style={styles.container}>
      <ExpenseHeader totalExpense={totalExpenses}/>
      <ExpenseList data={expenseList} onPress={onExpensePressHandler} />
      {isLoading && <LoadingOverlay />}
      {isError && <ErrorOverlay message='Failed to fetch expenses' onClose={() => setIsError(null)}/>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg600,
    paddingTop: 10,
  },
  noExpenseContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.bg600,
  },
  emptyExpenseList: {
    color: COLORS.text400,
    fontWeight: '500',
    fontSize: 16
  }
});
