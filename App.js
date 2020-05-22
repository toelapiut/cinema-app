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
import AuthNavigator from './navigation/AuthNavigator';
import useLinking from './navigation/useLinking';
import {AppearanceProvider} from 'react-native-appearance';
import {initialWindowSafeAreaInsets, SafeAreaProvider} from 'react-native-safe-area-context';
import firebase from 'firebase';
import "firebase/firestore";
import {firebaseConfig} from './config';
import {AuthContext} from './context';
import * as GoogleSignIn from 'expo-google-sign-in'


console.log({firebaseConfig})

console.log({name: firebase.apps})

const store = configureStore();
const Stack = createStackNavigator();


const App = (props) => {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const [userToken, setUserToken] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const containerRef = React.useRef();
  const {getInitialState} = useLinking(containerRef);

  try {
    firebase.initializeApp(firebaseConfig)
  } catch (err) {
    // we skip the “already exists” message which is
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error raised', err.stack)
    }
  }

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

  React.useEffect(() => {
    checkUserAuthentication()
  }, [])


  const authContext = React.useMemo(() => {
    const {signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut, currentUser: {updateEmail, updatePassword, reauthenticateWithCredential}} = firebase.auth()
    return {
      login: (email, password) => {
        signInWithEmailAndPassword(email, password).then(({refreshToken}) => {
          console.log({refreshToken})
          setLoading(false)
          setUserToken(refreshToken)
        }).catch(e => {
          setLoading(false)
          setUserToken(null)
        })
      },
      googleLogin: async () => {
        const {askForPlayServicesAsync} = GoogleSignIn
        try {
          await askForPlayServicesAsync();
          const {type, user: {auth: {idToken, accessToken}}} = await GoogleSignIn.signInAsync();
          const {GoogleAuthProvider, Auth: {Persistence: {LOCAL}}} = firebase.auth
          const {setPersistence, signInWithCredential} = firebase.auth()
          if (type === 'success') {
            await setPersistence(LOCAL);
            const credential = GoogleAuthProvider.credential(idToken, accessToken,);
            const googleProfileData = await signInWithCredential(credential);
            console.log({googleProfileData})
          }
        } catch ({message}) {
          alert('login: Error:' + message);
        }
      },
      createUserWithEmailAndPassword: (email, password) => {
        createUserWithEmailAndPassword(email, password).then(({refreshToken}) => {
          console.log({refreshToken})
          setLoading(false)
          setUserToken(refreshToken)
        }).catch(e => {
          setLoading(false)
          setUserToken(null)
        })
      },
      signOut: () => {
        signOut().then(() => {
          setLoading(false)
          setUserToken(null)
        }).catch(() => {
          setLoading(false)
          setUserToken(null)
        });
      },
      updateEmail: (email) => {
        updateEmail(email).catch(() => {
          console.log('Updating user email Failed')
        })
      },
      updatePassword: (newPassword) => {
        updatePassword(newPassword).catch((error) => {
          console.log('Updating user email Failed')``
        });
      },
      sendPasswordResetEmail: (email) => {
        sendPasswordResetEmail(email).catch((error) => {
          console.log('Updating user email Failed')``
        });
      },
      reauthenticateWithCredential: (credential) => {
        reauthenticateWithCredential(credential).then(() => {
          return true
        }).catch(() => {
          return false
        })
      }
    }
  }, [])


  const checkUserAuthentication = () => {
    const {onAuthStateChanged} = firebase.auth()
    onAuthStateChanged(user => {
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
    console.log({userToken})
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle='light-content'/>}
        <Provider store={configureStore(store)}>
          <AuthContext.Provider value={authContext}>
            <AppearanceProvider>
              <SafeAreaProvider initialSafeAreaInsets={initialWindowSafeAreaInsets}>
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
