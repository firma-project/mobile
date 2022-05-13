import * as Font from 'expo-font';

const useFonts = async () =>
  await Font.loadAsync({
    roboto: require('../../assets/fonts/Roboto/Roboto-Regular.ttf'),
    robotoBoldItalic: require('../../assets/fonts/Roboto/Roboto-BoldItalic.ttf'),
    robotoBold: require('../../assets/fonts/Roboto/Roboto-Bold.ttf'),
  });

  export default useFonts;