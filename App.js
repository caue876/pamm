import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TelaJavaScript from "./componentes/TelaJavaScript";
import TelaNode from "./componentes/TelaNode";
import TelaReact from "./componentes/TelaReact";

const Menu = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Menu.Navigator>
      <Menu.Screen name="Java Script" component={TelaJavaScript}/>
      <Menu.Screen name="React" component={TelaReact}/>
      <Menu.Screen name="Node" component={TelaNode}/>
      </Menu.Navigator>
    </NavigationContainer>
    
  );
}


