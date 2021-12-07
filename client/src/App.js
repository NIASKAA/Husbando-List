import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import "react-native-gesture-handler";
import {ApolloProvider} from '@apollo/client';
import {Provider} from "react-redux";
import {Container} from 'native-base';
import {client} from './apollo'
import Navigation from './navigation/Navigation';
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <ApolloProvider client={client}>
      <Provider>
        <Container>
            <Navigation/>
        </Container>
      </Provider>
    </ApolloProvider>
  );
};


export default App;
