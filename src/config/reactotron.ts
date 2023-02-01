import { NativeModules } from 'react-native';
import reactotron from 'reactotron-react-native';

const scriptURL = NativeModules.SourceCode.scriptURL;
const scriptHostname = scriptURL.split('://')[1].split(':')[0];

reactotron.configure({ host: scriptHostname }).useReactNative();

export default reactotron;
