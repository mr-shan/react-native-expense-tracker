import ExpenseCategory from './ExpenseCategory';
import ExpenseType from './ExpenseType';

export default interface Expense {
  id: string;
  name: string;
  description: string;
  amount: number;
  date: string;
  category: string;
  type: string;
}
