import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ionicons } from '@expo/vector-icons';

import ExpenseHome from './screens/ExpenseHome';
import AllExpenses from './screens/AllExpenses';
import ManageExpense from './screens/ManageExpense';

import { COLORS } from './constants/styles';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const NavigationTabs = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.gray700 },
        headerTintColor: COLORS.primary500,
        tabBarStyle: { backgroundColor: COLORS.gray700 },
        tabBarActiveTintColor: COLORS.primary500,
        tabBarShowLabel: false
      }}
    >
      <BottomTabs.Screen
        name='ExpenseHome'
        component={ExpenseHome}
        options={{
          title: 'Expense Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='home' color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen 
        name='AllExpenses' 
        component={AllExpenses} 
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='wallet' color={color} size={size} />
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
          <Stack.Screen name='ManageExpense' component={ManageExpense} />
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
