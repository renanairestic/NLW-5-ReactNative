import React, { useEffect, useState } from 'react';
import { 
        View,
        StyleSheet,
        Text,
        Image,
        FlatList,
        Alert,       
       } from 'react-native';

import colors from '../styles/colors';

import waterDrop from '../assets/waterdrop.png';
import { getStatusBarHeight} from 'react-native-iphone-x-helper';
import userImg from '../assets/renan.png';

import { loadPlant, PlantProps, removePlant } from '../libs/storage';
import { formatDistance, getTime } from 'date-fns';
import { pt } from 'date-fns/locale';
import fonts from '../styles/fonts';
import { PlantCardSecondary } from '../components/PlantCardSecondary';
import { Load } from '../components/Load';

export function MyPlants(){
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWaterd, setNextWaterd] = useState<string>();

  

  function handleRemove(plant: PlantProps){
    Alert.alert('Remover', `Deseja reomover a ${plant.name}?`,[
      {
          text:'Não 🙏️',
          style:'cancel'
      },
      {
          text:'Sim 😢️',
          onPress: async () =>{
            try {
              await removePlant(plant.id);
              setMyPlants((oldData) =>
                oldData.filter((item) => item.id !== plant.id)
              );
            } catch (error) {
              Alert.alert('Não foi possível remover! 😢️')
              }
          }
      }
    ])

  }
  useEffect(() =>{
    async function loadStorageData() {
      const plantsStoraged = await loadPlant();

      const nextTime = formatDistance(
        new Date(plantsStoraged[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt}
      );
      setNextWaterd(
        `Não esqueça de regar a ${plantsStoraged[0].name} às ${nextTime}  horas.`
      )
      setMyPlants(plantsStoraged);
      setLoading(false);
    }
    loadStorageData()
  },[])

  if(loading)
  return <Load />

  return(
    <View style={styles.container}>

     <View style={styles.containerTitle}>
       <View>
        <Text style={styles.title}>Minhas</Text>
        <Text style={styles.subtitle}>Plantinhas</Text>
       </View>
       <Image source={userImg} style={styles.image}/>
     </View>

      <View style={styles.spotlight}>
        <Image 
          style={styles.spotlightImage}
          source={waterDrop}
        />
        <Text style={styles.spotlightText}>
          {nextWaterd}
        </Text>
      </View>
      <View style={styles.plants}>
        <Text style={styles.plantsTitle}>
            Próximas Regadas
        </Text>

        <FlatList
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => (
            <PlantCardSecondary 
               data={item}
               handleRemove={() => {handleRemove(item)}}

            />)}
          
          showsVerticalScrollIndicator={false}        
          
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingTop: 50,
    backgroundColor: colors.background,
  },
  containerTitle:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-start',
    marginTop:getStatusBarHeight(),
  },
  title:{
    fontSize:32,
    color:colors.heading,
    fontFamily:fonts.text,
  },
  subtitle:{
    fontSize:32,
    fontFamily:fonts.heading,
    color:colors.heading,
    lineHeight:40,
  },
  image:{
    width:70,
    height:70,
    borderRadius:40,
  },
  spotlight: {
    backgroundColor: colors.blue_light,
    paddingHorizontal: 20,
    borderRadius: 20,
    height: 110,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  spotlightImage: {
    width: 60,
    height: 60,
  },
  spotlightText: {
    flex: 1,
    color: colors.blue,
    paddingHorizontal: 20,
    
  },
  plants: {
    flex: 1,
    width: "100%",
  },
  plantsTitle: {
    fontSize: 24,
    fontFamily: fonts.heading,
    color: colors.heading,
    marginVertical: 20,
  },
})