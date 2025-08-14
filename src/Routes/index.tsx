import { NavigationContainer } from '@react-navigation/native';
//Contexto
import {RoutesScreens} from './StackRoutes'

//Caixa de contexto
export function Routes(){
    return(
    <NavigationContainer>
        <RoutesScreens/>
    </NavigationContainer>
    )
    
}