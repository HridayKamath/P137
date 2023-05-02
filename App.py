import React from react
import {CreateStackNavigator} from "react-navigation"
import HomeScreen from "./screens/HomeScreen"
import Details Screen from "./screens/DetailsScreen"
import {createAppContainer} from "react-navigation"


export defaultFunction App(){
    return(<App Container/>);
}

const AppStackNavigator = CreateSwitchNavigator({
    Home: {
    screen: HomeScreen,
    navigation options:{
        headerShown: false
    }
    },
    Details: {
        screen: DetailsScreen
    },
    {
        initialRouteName: "Home"
    }
})

const AppContainer = createAppContainer(AppStackNavigator   );