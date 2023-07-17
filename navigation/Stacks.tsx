import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ManageExpense from './../screens/ManageExpense';
import ExpenseDetails from './../screens/ExpenseDetails';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

import BottomTabsNavigation from './BottomTabs';

import { COLORS } from './../constants/styles';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='Login'
        component={Login}
        options={{
          headerStyle: { backgroundColor: COLORS.accent500 },
          headerTintColor: COLORS.bg900,
          headerTitleStyle: { fontWeight: 'bold', fontSize: 18 },
        }}
      />
      <Stack.Screen 
        name='Sign Up'
        component={Signup}
        options={{
          headerStyle: { backgroundColor: COLORS.accent500 },
          headerTintColor: COLORS.bg900,
          headerTitleStyle: { fontWeight: 'bold', fontSize: 18 },
        }}
      />
      <Stack.Screen
        name='ExpenseTabs'
        component={BottomTabsNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='ManageExpense'
        component={ManageExpense}
        options={{
          title: 'Manage Expense',
          headerStyle: { backgroundColor: COLORS.bg900 },
          headerTintColor: COLORS.text400,
          headerTitleStyle: { fontWeight: 'bold', fontSize: 18 },
          presentation: 'modal',
        }}
      />
      <Stack.Screen
        name='ExpenseDetails'
        component={ExpenseDetails}
        options={{
          title: 'Expense Details',
          headerStyle: { backgroundColor: COLORS.bg900 },
          headerTintColor: COLORS.text400,
          headerTitleStyle: { fontWeight: 'bold', fontSize: 18 },
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator