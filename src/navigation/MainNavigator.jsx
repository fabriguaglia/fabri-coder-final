import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigator from "./AuthStackNavigator";
import TabNavigator from "./TabNavigation";
import { useSelector } from "react-redux";

export default function MainNavigator() {
    const userEmail = useSelector(state => state.userReducer?.userEmail);
    
    return (
        <NavigationContainer>
            {
                userEmail ? <TabNavigator /> : <AuthStackNavigator />
            }
        </NavigationContainer>
    )
}