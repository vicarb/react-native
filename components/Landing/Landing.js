import React from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import { useQuery } from 'react-query'
import Swiper from 'react-native-swiper'

export const Landing = () => {
  const getProducts = async () => {
  const response = await fetch ('https://crypton.cl/api/productos');
  // const response = await fetch ('http://127.0.0.1:8000/api/productos');
  return response.json();


  }
  const { data, status } = useQuery('products', getProducts)
  if(data){console.log("Data Query", data);}
  return (
    <ScrollView className='flex'>
       { data && data.map((item) => {
        return(
            
            <View className=''>

            <Text key={item.id} className='text-2xl font-bold text-green-500'>{item.name}</Text>
            <Text  className='text-2xl font-bold text-green-500'>${item.price}</Text>
            <Image
              source={{uri: "https://crypton.cl" + item.image}}
              style={{width: 100, height: 100}}
            />
            </View>
            
        )
    })}
    {data && <Swiper>
    { 
    data && data.map((item) => {return(<Image
              source={{uri: "https://crypton.cl" + item.image}}
              style={{width: '50%', height: '50%'}}
            />)})}
            </Swiper>}
    
    </ScrollView>
  )
}
