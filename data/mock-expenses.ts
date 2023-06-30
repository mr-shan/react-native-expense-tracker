import Expense from '../models/Expense';
import ExpenseCategory from '../models/ExpenseCategory';
import ExpenseType from '../models/ExpenseType';

const EXPENSE_TYPES: Array<ExpenseType> = [
  {
    id: 'ext1',
    name: 'Essential'
  },
  {
    id: 'ext2',
    name: 'Luxury'
  },
  {
    id: 'ext3',
    name: 'Emergency'
  },
  {
    id: 'ext4',
    name: 'Investment'
  },
  {
    id: 'ext4',
    name: 'Debt'
  },
  {
    id: 'ext5',
    name: 'Well being'
  }
]

export const EXPENSE_CATEGORIES: Array<ExpenseCategory> = [
  {
    id: 'expc1',
    name: 'Grocery',
    description: 'Grocery for daily life'
  },
  {
    id: 'expc2',
    name: 'Shopping',
    description: 'Shopping category'
  },
  {
    id: 'expc3',
    name: 'Fuel',
    description: 'Fuel for bike and car'
  },
  {
    id: 'expc4',
    name: 'Food',
    description: 'Food thing'
  },
]

export const MOCK_EXPENSES: Array<Expense> = [
  {
    id: 'e1',
    name: 'Shoes',
    description: 'Nike Jorden Shoes',
    amount: 99.99,
    date: new Date('2021-02-23'),
    category: 'expc2',
    type: 'ext2',
  },
  {
    id: 'e2',
    name: 'Milk',
    description: 'Amul Milk',
    amount: 2.99,
    date: new Date('2022-02-23'),
    category: 'expc1',
    type: 'ext1',
  },
  {
    id: 'e3',
    name: 'A book',
    description: 'A book for recipes',
    amount: 5.99,
    date: new Date('2022-04-23'),
    category: 'expc2',
    type: 'ext5',
  },
  {
    id: 'e4',
    name: 'Diesel',
    description: 'Diesel for car',
    amount: 10.99,
    date: new Date('2023-04-23'),
    category: 'expc3',
    type: 'ext1',
  },
  {
    id: 'e5',
    name: 'Dinner',
    description: 'Dinner at a rooftop hotel',
    amount: 150,
    date: new Date('2023-06-21'),
    category: 'expc4',
    type: 'ext2',
  },
  {
    id: 'e6',
    name: 'Test',
    description: 'Testing testing 123, testing testing 123',
    amount: 20,
    date: new Date('2023-02-21'),
    category: 'expc1',
    type: 'ext1',
  },
]