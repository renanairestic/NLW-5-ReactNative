import React, {useEffect} from 'react';
import { UserIdentification } from './src/pages/UserIdentification';
import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';
import Routes from './src/routes';
import { PlantProps } from './src/libs/storage';


export default function App(){
 const [ fontsLoaded ] = useFonts({
   Jost_400Regular,
   Jost_600SemiBold
 })
 
useEffect(() =>{
    //Remover notificações
    /* const subcription = Notifications.addNotificationReceivedListener(
    async notification =>{
      const data = notification.request.content.data.plant as PlantProps
      console.log(data)
    });
    return () => subcription.remove();  */

//Mostrar notificações
/*async function notifications(){
  await Notifications.cancelAllScheduledNotificationsAsync()
      const data = await Notifications.getAllScheduledNotificationsAsync()
      console.log('============ NOTIFICAÇÕES AGENDADAS ========')
      console.log(data); 
    
    }
    notifications() 
*/
    
},[])


 if(!fontsLoaded)
  return <AppLoading />
  
  return (
    <Routes  />
  )
}
