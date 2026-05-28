import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import VehiclesScreen from '../screens/vehicles/VehiclesScreen'
import CircuitsScreen from '../screens/circuits/CircuitsScreen'
import FoodScreen from '../screens/food/FoodScreen'
import DrinksScreen from '../screens/drinks/DrinksScreen'
import ArcadeScreen from '../screens/arcade/ArcadeScreen'

const Tab = createBottomTabNavigator()

export default function RootNavigator() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: { display: 'none' },
            contentStyle: { backgroundColor: '#242424' }
        }}>
            <Tab.Screen name="Véhicules" component={VehiclesScreen} />
            <Tab.Screen name="Circuits" component={CircuitsScreen} />
            <Tab.Screen name="Nourriture" component={FoodScreen} />
            <Tab.Screen name="Boissons" component={DrinksScreen} />
            <Tab.Screen name="Arcade" component={ArcadeScreen} />
        </Tab.Navigator>
    )
}