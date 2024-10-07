import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '@/components/Home/Header'
import Slider from '@/components/Home/Slider'


const Home = () => {

  return (
    <View>
      <Header/>
      <Slider/>
    </View>
  )
}

export default Home