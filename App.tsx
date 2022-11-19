import { StatusBar } from 'expo-status-bar';

import {useFonts} from 'expo-font';
import Navigation from '_navigation';

export default function App() {
  const [isFontsLoading] =useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-500': require('./src/assets/fonts/GeneralSans-Bold.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf')
  });

  if(!isFontsLoading){
    return null;
  }
  return (
    <>
      <StatusBar style="dark" />
      <Navigation/>
    </>
  );
}
