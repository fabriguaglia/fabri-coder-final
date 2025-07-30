import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OrdersScreen } from '../screens'
import Header from '../components/Header';

const Stack = createNativeStackNavigator();

export default function OrdersStackNavigator() {
    return (
        <Stack.Navigator
            initialRouteName='Carrito'
            screenOptions={{
                header: ({ route }) => (
                <Header 
                    imageSource={require('./logo.png')}
                    subtitle={route.name}
                />
                )
            }}
        >
            <Stack.Screen name="Carrito" component={OrdersScreen} />
        </Stack.Navigator>
    );
}