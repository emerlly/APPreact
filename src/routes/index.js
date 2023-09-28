import{ createNativeStackNavigator} from '@react-navigation/native-stack'
import SigIn from '../pages/Cadastro';
import Welcome from '../pages/welcome';
const Stack = createNativeStackNavigator();

export default function Routers(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name = "Welcome"
            component={Welcome}
            options={ {headerShown: false} }
            />

            <Stack.Screen
                name = "SigIn"
                component={SigIn}
                options={ {headerShown: false} }
            />
        </Stack.Navigator>
    )
}
