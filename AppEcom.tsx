/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React ,{useEffect,useState}from 'react';
import MainStack from './src/routing/MainStack';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import storePre from './src/redux/store';
import DropdownAlert from 'react-native-dropdownalert';
import {AlertHelper} from './src/utils/AlertHelper';
import {PersistGate} from 'redux-persist/integration/react';
import TabNavigationStack from './src/routing/TabNavigationStack';
import {navigationTypeTabs} from './app.json';
import Feather from 'react-native-vector-icons/Feather'; 
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 

MaterialIcons.loadFont()
Ionicons.loadFont()
FontAwesome.loadFont()
Feather.loadFont()
MaterialCommunityIcons.loadFont()
const App: () => React$Node = () => {
  const {persistor, store} = storePre;
 

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {navigationTypeTabs ? <TabNavigationStack/> : <MainStack />} 
        <DropdownAlert
          defaultContainer={{
            padding: 8,
            paddingTop: StatusBar.currentHeight,
            flexDirection: 'row',
          }}
          ref={(ref) => AlertHelper.setDropDown(ref)}
          onClose={() => AlertHelper.invokeOnClose()}
        />
      </PersistGate>
    </Provider>
  );
};

export default App;
