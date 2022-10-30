import { Text, View , Image, TouchableOpacity} from 'react-native'
import React from 'react'
import Styles from '../Style'
import Title from '../components/Title'

const Result = ({navigation, route}) => {
  const params = route.params.score
  return (
    <View style={Styles.resultContainer} >
      <View>
        <Title titleText={"SCORE"}/>
      </View>

      <View style={Styles.scoreContainer}>
        <Text style={Styles.scoreText}>{params}</Text>
      </View>

      <View style={Styles.bannerContainer}>
        <Image source={require('../assets/result.jpg')} style={Styles.banner} resizeMode='contain'/>
      </View>

      <TouchableOpacity onPress={()=> navigation.navigate('Home')} style={Styles.endButton}>
        <Text style={Styles.endText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Result