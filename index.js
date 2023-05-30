/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import AppNav from './AppNav';
import Home from './src/pages/Home';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppNav);
