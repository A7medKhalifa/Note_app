import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { store } from "../Store/index";
import { Provider } from "react-redux";

import {
    Main_Page,
    AddNotes,
    ViewNotes
} from '../Screen/index';

const Stack = createNativeStackNavigator();

function NoteNavigation() {
    return (
        <>
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center', headerShown: false }}>
                        <Stack.Screen name='Main_Page' component={Main_Page} />
                        <Stack.Screen name='AddNotes' component={AddNotes} />
                        <Stack.Screen name='ViewNotes' component={ViewNotes} />

                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>

        </>
    )
}
export default NoteNavigation