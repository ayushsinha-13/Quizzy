import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Title from '../components/Title';
import Styles from '../Style';

const Home = ({navigation}) => {
  return (
    <View  style={Styles.container}>
      <Title titleText={"Quizzy"}/>

      <View style={Styles.bannerContainer}>
        <Image source={require('../assets/5484597.jpg')} style={Styles.banner} resizeMode='contain'/>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Quiz")} style={Styles.button}>
        <Text style={Styles.startText}>Start</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Home
