<<<<<<< HEAD
import{ createNativeStackNavigator} from '@react-navigation/native-stack'
import SigIn from '../pages/Cadastro';
import Welcome from '../pages/welcome';
const Stack = createNativeStackNavigator();

export default function Rotes(){
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
=======
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
>>>>>>> e30e789f6733df4baeee35585c1dac7e7f8a2b9d
