import { useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Ionicons } from '@expo/vector-icons';

import { RootState } from '../store/store';

import { COLORS } from '../constants/styles';
import Expense from '../models/Expense';

import ExpenseFooter from '../components/manageExpense/ExpenseFooter';
import { remove } from './../store/slices/expenseSlice';
import { deleteExpense } from '../api/http';

interface IProps {
  route: RouteProp<any>;
  navigation: NativeStackNavigationProp<any, any>;
}

export default (props: IProps) => {
  const [isError, setIsError] = useState(null);

  const dispatch = useDispatch();
  const expenseList = useSelector((state: RootState) => state.expense.expenses);

  const expenseId = props.route.params?.toString() || '';

  const onCancelHandler = () => {
    props.navigation.goBack();
  };

  const onSubmitHandler = () => {
    props.navigation.navigate('ManageExpense', expenseId);
  };

  const onRemoveExpenseHandler = async () => {
    const response = await deleteExpense(expenseId);
    if (response.error) {
      setIsError(response);
      return;
    }
    dispatch(remove(expenseId));
    props.navigation.navigate('ExpenseTabs', { screen: 'AllExpenses' });
  };

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={onRemoveExpenseHandler}>
          <Ionicons name='trash-bin' color={COLORS.text400} size={24} />
        </Pressable>
      ),
      title: 'Manage Details',
    });
  }, []);

  const expense =
    (expenseList.find((e) => e.id === expenseId) as Expense) || null;

  return (
    <View style={styles.container}>
      <View style={styles.expenseDetailsWrapper}>
        <View style={styles.detailsBody}>
          <View style={styles.header}>
            <Text style={styles.title}>{expense?.name}</Text>
            <Text style={styles.amount}>$ {expense?.amount}</Text>
          </View>

          <Text style={styles.text}>{expense?.date.toString()}</Text>
          <Text style={styles.text}>{expense?.description}</Text>
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <ExpenseFooter
            submitButtonLabel='Edit'
            onCancel={onCancelHandler}
            onSubmit={onSubmitHandler}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    flex: 1,
    backgroundColor: COLORS.bg600,
  },
  detailsBody: {},
  expenseDetailsWrapper: {
    backgroundColor: COLORS.bg500,
    marginHorizontal: 10,
    marginBottom: 20,
    borderRadius: 10,
    paddingBottom: 20,
    flex: 1,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor: COLORS.bg700,
    padding: 12,
    paddingVertical: 14,
  },
  title: {
    fontSize: 17,
    color: COLORS.accent500,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 18,
    color: COLORS.text400,
    fontWeight: '500',
  },
  text: {
    color: COLORS.text400,
    marginBottom: 5,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
});
