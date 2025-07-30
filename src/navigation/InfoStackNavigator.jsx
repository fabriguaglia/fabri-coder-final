import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { InfoScreen } from '../screens'
import Header from '../components/Header';

const Stack = createNativeStackNavigator();

export default function InfoStackNavigator() {
    return (
        <Stack.Navigator
            initialRouteName='Informacion'
            screenOptions={{
                header: ({ route }) => (
                <Header 
                    imageSource={require('./logo.png')}
                    subtitle={route.name}
                />
                )
            }}
        >
            <Stack.Screen name="Informacion" component={InfoScreen} />
        </Stack.Navigator>
    );
}