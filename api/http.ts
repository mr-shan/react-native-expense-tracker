import axios from 'axios';

import Expense from '../models/Expense';

interface IError {
  error: boolean,
  details: any
}

const BASE_URL = ''

export const addExpense = async (expense: Expense): Promise<string | IError | undefined> => {
  try {
    const response = await axios.post(`${BASE_URL}/expenses.json`, {
      ...expense,
      id: null,
    });
    return response.data.name;
  } catch (error) {
    console.error(error);
    return { error: true, details: error }
  }
};

export const fetchExpenses = async (): Promise<Expense[] | IError | undefined> => {
  try {
    const response = await axios.get(`${BASE_URL}/expenses.json`);
    const expenses: Array<Expense> = [];
    for (let key in response.data) {
      const expense = { ...response.data[key], id: key }
      expenses.push(expense);
    }
    return expenses.reverse();
  } catch (error) {
    console.error(error)
    return { error: true, details: error }
  }
}

export const updateExpense = async (id: string, data: Expense): Promise<object | IError | undefined> => {
  try {
    const response = await axios.put(`${BASE_URL}/expenses/${id}.json`, { ...data, id: null });
    return response.data;
  } catch (error) {
    return { error: true, details: error }
  }
}

export const deleteExpense = async (id: string): Promise<boolean | IError | undefined> => {
  try {
    await axios.delete(`${BASE_URL}/expenses/${id}.json`);
    return true
  } catch (error) {
    return { error: true, details: error }
  }
}