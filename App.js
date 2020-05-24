import * as React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {Asset} from 'expo-asset';
import {SplashScreen} from 'expo';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {configureStore} from './store/configureStore';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import AuthNavigator from './navigation/AuthNavigator';
import useLinking from './navigation/useLinking';
import {AppearanceProvider} from 'react-native-appearance';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import firebase from 'firebase';
import "firebase/firestore";
import {firebaseConfig} from './config';
import {AuthContext} from './context';

const store = configureStore();
const Stack = createStackNavigator();

try {
  firebase.initializeApp(firebaseConfig)
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error raised', err.stack)
  }
}

let db = firebase.firestore()

const App = (props) => {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const [userToken, setUserToken] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const containerRef = React.useRef();
  const {getInitialState} = useLinking(containerRef);


  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());
        await Asset.loadAsync([
          require('./assets/images/splash.png'),
          require('./assets/images/bg.png'),
        ]);
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

  React.useEffect(() => {
    checkUserAuthentication()
  }, [])


  const authContext = React.useMemo(() => {
    return {
      login: async (email, password) => {
        try {
          const {user: {refreshToken}} = await firebase.auth().signInWithEmailAndPassword(email, password)
          setLoading(false)
          setUserToken(refreshToken)
          return userToken
        } catch (error) {
          return error
        }
      },
      createAccount: async ({email, password, firstName, lastName}) => {
        try {
          const {user: {refreshToken, uid}} = await firebase.auth().createUserWithEmailAndPassword(email, password)
          const profile = await db
            .collection('User')
            .doc(uid)
            .set({
              first_name: firstName,
              last_name: lastName,
              email: email,
              avatar: null,
              bio: null,
              phone_number: null,
              dob: null,
            })
          setLoading(false)
          setUserToken(refreshToken)
          return profile;
        } catch (e) {
          return e
        }
      },
      userSignOut: () => {
        firebase.auth().signOut().then(() => {
          setLoading(false)
          setUserToken(null)
        }).catch(() => {
          setLoading(false)
          setUserToken(null)
        });
      },
      updateUserEmail: (email) => {
        firebase.auth().currentUser.updateEmail(email).catch(() => {
          console.log('Updating user email Failed')
        })
      },
      updateUserPassword: (newPassword) => {
        firebase.auth().currentUser.updatePassword(newPassword).catch((error) => {
          console.log('Updating user email Failed')``
        });
      },
      sendUserPasswordResetEmail: async (email) => {
        try {
          return await firebase.auth().sendPasswordResetEmail(email)
        } catch (e) {
          return e
        }
      },
      reauthenticateUserWithCredential: (credential) => {
        firebase.auth().currentUser.reauthenticateWithCredential(credential).then(() => {
          return true
        }).catch(() => {
          return false
        })
      }
    }
  }, [])


  const checkUserAuthentication = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const {refreshToken} = user;
        setUserToken(refreshToken)
      } else {
        setUserToken(null)
      }
    })
  }

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle='light-content'/>}
        <Provider store={configureStore(store)}>
          <AuthContext.Provider value={authContext}>
            <AppearanceProvider>
              <SafeAreaProvider>
                <NavigationContainer theme={DarkTheme} ref={containerRef} initialState={initialNavigationState}>
                  {userToken
                    ? <Stack.Navigator>
                      <Stack.Screen
                        options={{headerShown: false}}
                        name="Root" component={BottomTabNavigator}/>
                    </Stack.Navigator>
                    : <AuthNavigator/>
                  }
                </NavigationContainer>
              </SafeAreaProvider>
            </AppearanceProvider>
          </AuthContext.Provider>
        </Provider>
      </View>
    );
  }
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
