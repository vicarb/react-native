import React from 'react'
import { useContext } from 'react'
import { View, Text } from 'react-native'
import GlobalContext from '../../context/GlobalContext'
export const Navbar = () => {
  const { count, setCount  } = useContext(GlobalContext)
  return (
<View className='bg-black mb-0 py-4'>

    <Text className='text-green-500 font-bold text-2xl'>Navbar-{count}</Text>
</View>


  )
}
