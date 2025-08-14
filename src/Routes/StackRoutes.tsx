import { createStackNavigator } from "@react-navigation/stack";

//desestruture retirando a screen e o navigator
const { Screen, Navigator } = createStackNavigator();

//Importe as telas que serão navegadas.
import { MainScreen } from "../screens/MainScreen/MainScreen";
import { SkillScreen } from "../screens/StacksScreen/StacksScreen";
import { Vitae }  from "../screens/VitaeScreen/Vitae";

export function RoutesScreens() {
  return (
    <Navigator>
      <Screen name="MainScreen" component={MainScreen} options={{title:'Perfil', headerShown: false}} />
      <Screen name="Skills" component={SkillScreen} options={{title:'Stacks'}} />
      <Screen name="Vitae" component={Vitae} options={{title:'Curriculo'}} />
    </Navigator>
  );
}
