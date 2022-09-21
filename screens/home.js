import React from 'react'
import {View, Text, Button} from 'react-native';
import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

export const Home = ({ navigation }) => {
  const { count, setCounter  } = useContext(GlobalContext)
  return (
    <>
    <View><Text>Home JS</Text>
    <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('About')}
        />
      <Button
        title="Example"
        onPress={() => navigation.navigate('Example')}
        />
      </View>
      <Text className='text-4xl font-bold'>{count}</Text>
      <Button title='Increase Global Counter' onPress={() => {setCounter(prevCount => prevCount + 1)}}/>
        </>
      
  )
}
