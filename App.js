import * as React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AppearanceProvider, useColorScheme} from 'react-native-appearance'
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import MSNavigator from './Navigators/MSNavigator'

export default () => {
  
  const dark = useColorScheme() === 'dark' ? true : false
  
  return (
    <AppearanceProvider>
      <SafeAreaProvider>
        <NavigationContainer theme={dark ? DarkTheme : DefaultTheme}>
          <StatusBar style={dark ? 'light' : 'dark'}/>
          <MSNavigator/>
        </NavigationContainer>
      </SafeAreaProvider>
    </AppearanceProvider>
  )
}