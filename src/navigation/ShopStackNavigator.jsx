import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CategoriesScreen, ProductsScreen, ProductScreen, InfoScreen } from '../screens';
import Header from '../components/Header';

const Stack = createNativeStackNavigator();

export default function ShopStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName='Categorías'
      screenOptions={{
        header: ({ route }) => (
          <Header 
            imageSource={require('./logo.png')}
            subtitle={route.name}
          />
        )
      }}
    >
      <Stack.Screen name="Categorías" component={CategoriesScreen}/>
      <Stack.Screen name="Productos" component={ProductsScreen} />
      <Stack.Screen name="Producto" component={ProductScreen} />

    </Stack.Navigator>
  );
}