import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopStackNavigator from './ShopStackNavigator';
import CartStackNavigator from './CartStackNavigator';
import OrdersStackNavigator from './OrdersStackNavigator'
import InfoStackNavigator from './InfoStackNavigator';
import Icon from 'react-native-vector-icons/Feather'
import { colors } from '../global/colors';
import { useWindowDimensions } from 'react-native';
import { useEffect,useState } from 'react';
import { StyleSheet } from 'react-native';
import ProfileStackNavigator from './ProfileStackNavigator';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    const [isLargeScreeen,setIsLargeScreen] = useState(null)

    const {width,height} = useWindowDimensions()

    useEffect(()=>{
        if(width>height){
            setIsLargeScreen(true)
        }else{
            setIsLargeScreen(false)
        }
    },[width])

     return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle:styles.tabBar
            }}
        >
            <Tab.Screen
                name="Shop"
                component={ShopStackNavigator}
                options={{
                    tabBarIcon: ({focused}) => <Icon name="shopping-bag" size={24} color={focused?colors.darkGray:colors.mediumGray} />
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartStackNavigator}
                options={{
                    tabBarIcon: ({focused}) => <Icon name="shopping-cart" size={24} color={focused?colors.darkGray:colors.mediumGray} />
                }}
            />
            <Tab.Screen
                name="Orders"
                component={OrdersStackNavigator}
                options={{
                    tabBarIcon: ({focused}) => <Icon name="tablet" size={24} color={focused?colors.darkGray:colors.mediumGray} />
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStackNavigator}
                options={{
                    tabBarIcon: ({focused}) => <Icon name="user" size={24} color={focused?colors.darkGray:colors.mediumGray} />
                }}
            />
            <Tab.Screen
                name="Info"
                component={InfoStackNavigator}
                options={{
                    tabBarIcon: ({focused}) => <Icon name="info" size={24} color={focused?colors.darkGray:colors.mediumGray} />
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor:colors.white
    }
})