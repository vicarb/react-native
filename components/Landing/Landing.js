import React from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import { useQuery } from 'react-query'


export const Landing = () => {
  const getProducts = async () => {
  const response = await fetch ('http://127.0.0.1:8000/api/productos');
  return response.json();


  }
  const { data, status } = useQuery('products', getProducts)
  console.log("Data Query", data);
  return (
    <ScrollView className='flex'>{data && data.map((item) => {
        return(
            
            <View className=''>

            <Text key={item.id} className='text-2xl font-bold text-green-500'>{item.name}</Text>
            <Text  className='text-2xl font-bold text-green-500'>${item.price}</Text>
            <Image
        source={{uri: "http://127.0.0.1:8000" + item.image}}
        style={{width: 100, height: 100}}
      />
            </View>
            
        )
    })}</ScrollView>
  )
}
