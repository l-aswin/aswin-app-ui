import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./Home";
import Settings from "./Settings";
import Login from "./Login";

export default createAppContainer(
  createStackNavigator({ 
    Login, Home, Settings 
  }, 
  { 
    initialRouteName: "Login",
    headerMode: 'none',
  })
);
