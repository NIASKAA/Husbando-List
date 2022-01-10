import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashView, Home, StoryInfo} from '../view';

export default function Navigation() {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    )
};

const Stack = createNativeStackNavigator();

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: true}}
            />

            <Stack.Screen
              name="StoryInfo"
              component={StoryInfo}
              options={{headerShown: true}}
            />
        </Stack.Navigator>
    )
};