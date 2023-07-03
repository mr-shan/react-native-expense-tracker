import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, Pressable } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import { RootState } from '../store/store';

import { COLORS } from '../constants/styles';
import Expense from '../models/Expense';
import EditExpense from '../components/manageExpense/EditExpense';

import { remove, add, update } from './../store/slices/expenseSlice';

interface IProps {
  route: RouteProp<any>;
  navigation: NativeStackNavigationProp<any, any>;
}

export default (props: IProps) => {
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

  const onSubmitHandler = (expense: Expense) => {
    if (expenseId && expense) {
      dispatch(update({ id: expenseId, data: expense }));
    } else if (expense) {
      dispatch(add(expense));
    }
    props.navigation.navigate('ExpenseTabs', { screen: 'AllExpenses' });
  };

  const onRemoveExpenseHandler = () => {
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
