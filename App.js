import * as React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {SplashScreen} from 'expo';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {configureStore} from './store/configureStore';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import useLinking from './navigation/useLinking';
import {AppearanceProvider} from 'react-native-appearance';

const store = configureStore();

const Stack = createStackNavigator();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const {getInitialState} = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
          'cinema': require('./assets/fonts/AirbnbCerealBook.ttf'),
          'cinema-black': require('./assets/fonts/AirbnbCerealBlack.ttf'),
          'cinema-bold': require('./assets/fonts/AirbnbCerealBold.ttf'),
          'cinema-extra': require('./assets/fonts/AirbnbCerealExtraBold.ttf'),
          'cinema-medium': require('./assets/fonts/AirbnbCerealMedium.ttf'),
          'cinema-thin': require('./assets/fonts/AirbnbCerealLight.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle='light-content'/>}
        <Provider store={configureStore(store)}>
          <AppearanceProvider>
            <NavigationContainer theme={DarkTheme} ref={containerRef} initialState={initialNavigationState}>
              <Stack.Navigator>
                <Stack.Screen
                  options={{
                    headerShown: false,
                  }}
                  name="Root" component={BottomTabNavigator}/>
              </Stack.Navigator>
            </NavigationContainer>
          </AppearanceProvider>
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
