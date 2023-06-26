import Expense from './Expense';

export default interface ExpenseProfile {
  id: string;
  name: string;
  description: string;
  amount: number;
  date: Date;
  expenses: Array<Expense>
}
