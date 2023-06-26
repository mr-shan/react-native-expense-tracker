import ExpenseCategory from './ExpenseCategory';
import ExpenseType from './ExpenseType';

export default interface Expense {
  id: string;
  name: string;
  description: string;
  amount: number;
  date: Date;
  category: string;
  type: string;
}
