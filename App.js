import {DarkTheme, NavigationContainer} from '@react-navigation/native'
import { Provider } from 'react-redux'
import store from './src/store/store'
import RootNavigator from './src/navigation/RootNavigator'

export default function App() {
  return (
      <Provider store={store}>
        <NavigationContainer theme={{ ...DarkTheme, colors: { ...DarkTheme.colors, background: '#242424' } }}>
          <RootNavigator />
        </NavigationContainer>
      </Provider>
  )
}