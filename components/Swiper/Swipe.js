import Swiper from "react-native-swiper";

import React from 'react'
import { View, Text } from "react-native";

export const Swipe = () => {
  return (
    <View>
      <Swiper loop autoplay>
        <Text>

        Europa
        </Text>


        <Text>Usa</Text>
      </Swiper>

    </View>
  )
}
