import React from 'react'
import {View, Text, Button} from 'react-native';

export const About = ({ navigation }) => {
  return (
    <View><Text>About JS</Text>
    <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}
