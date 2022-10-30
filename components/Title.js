import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Styles from '../Style'

const Title = ({titleText}) => {
  return (
    <View>
      <Text style={Styles.title}>{titleText}</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({})