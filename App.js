import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { useState } from 'react';
import { MainLayout } from "./src/layouts/MainLayout";
import useFonts from './src/hooks/useFonts';


export default function App() {

  const [isReady, setIsReady] = useState(false);

  const loadFonts = async () => {
    await useFonts();
  }

  return (
    <>
    { !isReady ? 
      <AppLoading 
        startAsync={loadFonts}
        onFinish={() => setIsReady(true)}
        onError={() => {console.log('error')}}
      />
      :
      <MainLayout />
    }
    </>
  );
}
