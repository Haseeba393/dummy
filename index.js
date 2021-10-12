/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Startup from './Startup';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Startup);
