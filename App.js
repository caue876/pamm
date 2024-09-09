import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import TelaJavaScript from "./componentes/TelaJavaScript";
import TelaNode from "./componentes/TelaNode";
import TelaReact from "./componentes/TelaReact";


const Menu = createBottomTabNavigator();




export default function App() {
  return (
    <NavigationContainer>
        <Menu.Navigator>
          <Menu.Screen name="Java" component={TelaJavaScript}/>
          <Menu.Screen name="Node" component={TelaNode}/>
          <Menu.Screen name="React" component={TelaReact}/>
        </Menu.Navigator>
    </NavigationContainer>
  );
}


