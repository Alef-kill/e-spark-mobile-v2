import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

import { AuthContext } from '../../providers/Auth';

import { Home } from '../../pages/home';
import { Login } from '../../pages/login';

import { colors } from '../../styles/global-styles';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
};

function DrawerNavigator({ type }) {
    return (
        <Drawer.Navigator
            initialRouteName="Login"
            drawerContent={props => <CustomDrawerContent {...props} />}
            drawerStyle={{
                backgroundColor: colors.root.colorhome,
                height: '100%',
                position: 'absolute'
            }}
            screenOptions={{ headerShown: false }}
            overlayColor={0}

            drawerContentOptions={{
                activeBackgroundColor: colors.root.colorsearchbar,
                itemStyle: {
                    width: '94%',
                    padding: 0,
                    marginLeft: '3%'
                }

            }}
        >
            {type === true ? <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                    headerTintColor: "red",
                
                }}/> : <Drawer.Screen
                name="Home2"
                component={Home}
                options={{
                    headerTintColor: "red",
                
                }}/> }

            

            
        </Drawer.Navigator>
    );
}

function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

function Navigation({ type }) {
    const { user } = useContext(AuthContext);

    if (user) {
        return <DrawerNavigator type={type} />
    } else {
        return <StackNavigator />
    }

}


export {  Navigation }