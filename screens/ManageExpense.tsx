import { useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, Pressable } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import { RootState } from '../store/store';

import { COLORS } from '../constants/styles';
import Expense from '../models/Expense';
import EditExpense from '../components/manageExpense/EditExpense';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import ErrorOverlay from '../components/ui/ErrorOverlay';

import { remove, add, update } from './../store/slices/expenseSlice';
import { addExpense, updateExpense, deleteExpense } from '../api/http';

interface IProps {
  route: RouteProp<any>;
  navigation: NativeStackNavigationProp<any, any>;
}

export default (props: IProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const dispatch = useDispatch();
  const expenseList = useSelector((state: RootState) => state.expense.expenses);

  const expenseId = props.route.params?.toString() || '';

  useLayoutEffect(() => {
    if (expenseId) {
      props.navigation.setOptions({
        headerRight: () => (
          <Pressable onPress={onRemoveExpenseHandler}>
            <Ionicons name='trash-bin' color={COLORS.text400} size={24} />
          </Pressable>
        ),
        title: 'Edit Expense',
      });
    } else {
      props.navigation.setOptions({
        title: 'Add New Expense',
      });
    }
  }, [props.route.params, props.navigation]);

  const onSubmitHandler = async (expense: Expense) => {
    if (expenseId && expense) {
      const response = await updateExistingExpense(expenseId, expense);
      if (response) {
        dispatch(update({ id: expenseId, data: expense }));
        props.navigation.navigate('ExpenseTabs', { screen: 'AllExpenses' });
      }
    } else if (expense) {
      const id = await addNewExpense(expense) as string | null;
      if (id) {
        dispatch(add({...expense, id: id }));
        props.navigation.navigate('ExpenseTabs', { screen: 'AllExpenses' });
      }
    }
  };

  const addNewExpense = async (expense: Expense) => {
    setIsLoading(true);
    const response = await addExpense(expense);
    setIsLoading(false);
    if (response.error) {
      setIsError(response);
      return null;
    } else {
      return response
    }
  }

  const updateExistingExpense = async (id: string, expense: Expense) => {
    setIsLoading(true);
    const response = await updateExpense(id, expense);
    setIsLoading(false);
    if (response?.error) {
      setIsError(response);
      return false;
    } else {
      return true
    }
  }

  const onRemoveExpenseHandler = async () => {
    setIsLoading(true);
    const response = await deleteExpense(expenseId);
    setIsLoading(false);
    if (response.error) {
      setIsError(response);
      return;
    }
    dispatch(remove(expenseId));
    props.navigation.navigate('ExpenseTabs', { screen: 'AllExpenses' });
  };

  const onCancelHandler = () => {
    props.navigation.goBack();
  };

  let expenseData = null;

  if (expenseId) {
    expenseData =
      (expenseList.find((e) => e.id === expenseId) as Expense) || null;
  }

  return (
    <View style={styles.container}>
      <EditExpense
        data={expenseData}
        onCancel={onCancelHandler}
        onSubmit={onSubmitHandler}
      />
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
    justifyContent: 'space-between',
  },
});
