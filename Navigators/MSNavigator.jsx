import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Screens/Home'
import View from '../Screens/View'
import Image from '../Screens/Image'
import ScrollView from '../Screens/ScrollView'
import KTI from '../Screens/KTI'
import ImageBg from '../Screens/ImageBg'
import Pressable from '../Screens/Pressable'

const Stack = createStackNavigator()

export default () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="View" component={View}/>
        <Stack.Screen name="Image" component={Image}/>
        <Stack.Screen name="ScrollView" component={ScrollView}/>
        <Stack.Screen name="KeyboardAvoidingView + TextInput" component={KTI}/>
        <Stack.Screen name="ImageBackground" component={ImageBg}/>
        <Stack.Screen name="Pressable" component={Pressable}/>
    </Stack.Navigator>
)
