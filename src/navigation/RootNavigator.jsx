import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import VehiclesScreen from '../screens/vehicles/VehiclesScreen'
import CircuitsScreen from '../screens/circuits/CircuitsScreen'

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
        </Tab.Navigator>
    )
}