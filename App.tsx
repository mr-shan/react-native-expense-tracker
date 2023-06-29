import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ionicons } from '@expo/vector-icons';

import ExpenseHome from './screens/ExpenseHome';
import AllExpenses from './screens/AllExpenses';
import ManageExpense from './screens/ManageExpense';
import AddExpenseButton from './components/ui/buttons/AddExpenseButton';
import DummyScreen from './screens/DummyScreen';

import { COLORS } from './constants/styles';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const NavigationTabs = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.bg900 },
        headerTintColor: COLORS.primary500,
        headerTitleStyle: { fontWeight: 'bold', fontSize: 18 },
        tabBarStyle: { backgroundColor: COLORS.bg900 },
        tabBarActiveTintColor: COLORS.primary500,
        tabBarShowLabel: false,
      }}
    >
      <BottomTabs.Screen
        name='ExpenseHome'
        component={ExpenseHome}
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='home' color={color} size={size + 2} />
          ),
        }}
      />
      <BottomTabs.Screen
        name='AddNewExpense'
        component={DummyScreen}
        options={{
          tabBarIcon: () => <AddExpenseButton />
        }}
      />
      <BottomTabs.Screen
        name='AllExpenses'
        component={AllExpenses}
        options={{
          title: 'Expenses',
          tabBarLabel: 'All',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='wallet' color={color} size={size + 2} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='ExpenseTabbs'
            component={NavigationTabs}
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
              headerTintColor: COLORS.primary500,
              headerTitleStyle: { fontWeight: 'bold', fontSize: 18 },
              presentation: 'modal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
