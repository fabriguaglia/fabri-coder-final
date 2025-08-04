import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/Header';
import ProfileScreen from '../screens/user/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function ProfileStackNavigator() {
    return (
        <Stack.Navigator
            initialRouteName='Perfil'
            screenOptions={{
                header: ({ route }) => (
                <Header 
                    imageSource={require('./logo.png')}
                    subtitle={route.name}
                />
                )
            }}
        >
            <Stack.Screen name="Perfil" component={ProfileScreen} />
        </Stack.Navigator>
    );
}