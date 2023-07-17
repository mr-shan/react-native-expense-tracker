import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import ExpenseHome from './../screens/ExpenseHome';
import AllExpenses from './../screens/AllExpenses';
import AddExpenseButton from './../components/ui/buttons/AddExpenseButton';
import DummyScreen from './../screens/DummyScreen';

import { COLORS } from './../constants/styles';

const BottomTabs = createBottomTabNavigator();

const BottomTabsNavigation = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.bg900 },
        headerTintColor: COLORS.text400,
        headerTitleStyle: { fontWeight: 'bold', fontSize: 18 },
        tabBarStyle: {
          backgroundColor: COLORS.bg900,
          position: 'absolute',
          bottom: 18,
          borderWidth: 0,
          marginHorizontal: '10%',
          borderRadius: 50,
          height: 60,
          padding: 0
          
        },
        tabBarItemStyle: {
          height: 60,
        },
        tabBarActiveTintColor: COLORS.text400,
        tabBarInactiveTintColor: COLORS.bg500,
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
          tabBarIcon: () => <AddExpenseButton />,
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

export default BottomTabsNavigation