import ExpenseCategory from './ExpenseCategory';
import ExpenseType from './ExpenseTypeType';

export default interface Expense {
  id: string;
  name: string;
  description: string;
  amount: number;
  date: Date;
  category: ExpenseCategory;
  type: ExpenseType;
}
