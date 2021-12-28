import React from 'react';
import "react-native-gesture-handler";
import {ApolloProvider} from '@apollo/client';
import {Provider} from "react-redux";
import {Container, NativeBaseProvider} from 'native-base';
import {client} from './Apollo'
import store from './utils/state/store'
import Navigation from './navigation/Navigation';

const App = () => {

  return (
    <NativeBaseProvider>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Container>
              <Navigation/>
          </Container>
        </Provider>
      </ApolloProvider>
    </NativeBaseProvider>
  );
};


export default App;
