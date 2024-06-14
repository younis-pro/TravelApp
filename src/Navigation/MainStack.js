import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    Home,
    Detail,
    Map,
    Gallery
} from '../Screens';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="Gallery" component={Gallery} />
            <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
    );
}
export default MainStack;