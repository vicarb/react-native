import React from 'react'
import {View, Text, Button} from 'react-native';

export const Home = ({ navigation }) => {
  return (
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
  )
}
