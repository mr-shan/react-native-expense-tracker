import { createSlice, current } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import Expense from '../../models/Expense';

interface IExpenseState {
  expenses: Array<Expense>;
}

type updateExpenseObject = {
  id: string;
  data: any;
};

const initialState: IExpenseState = {
  expenses: [],
};

export const expenseSlice = createSlice({
  initialState,
  name: 'expenses',
  reducers: {
    add: (state, action: PayloadAction<Expense>) => {
      state.expenses.splice(0, 0, action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      if (!action.payload) return;
      state.expenses = state.expenses.filter((e) => e.id !== action.payload);
    },
    update: (state, action: PayloadAction<updateExpenseObject>) => {
      const index = state.expenses.findIndex((e) => e.id === action.payload.id);
      
      if (index < 0) return;

      const newObj = {
        ...state.expenses[index],
        ...action.payload.data,
      }

      state.expenses[index] = newObj
    },
    getExpenseTotal: (state) => {
      const totalSum = state.expenses.reduce((previous, current) => {
        return previous + current.amount
      }, 0)
    },
    set: (state, action: PayloadAction<Array<Expense>>) => {
      state.expenses = action.payload
    }
  }
});

export const totalExpenseSelector = (state: IExpenseState) => {
  return state.expenses.reduce((prev, curr) => prev + curr.amount, 0).toFixed(2);
}

export const { add, remove, update, set } = expenseSlice.actions;
export default expenseSlice.reducer;
