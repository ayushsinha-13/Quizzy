import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Styles from '../Style'

const shuffleArray = (array) => {
  for(let i = array.length - 1; i > 0 ;i--){
    const j = Math.floor(Math.random() * i);
    [array[i], array[j]] = [array[j], array[i]]
  }
}

const Quiz = ({navigation}) => {

  const [questions, setQuestion] = useState()
  const [currQuestion, setCurrQuestion] = useState(0)
  const [options, setOptions] = useState([])
  const [score, setScore] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const getQuiz = async()=>{
      setIsLoading(true)
      const url = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple&encode=url3986"
      const res = await fetch(url)
      const data = await res.json()
      // console.log(data.results[0].question)
      setQuestion(data.results)
      setOptions(generateOptionsAndShuffle(data.results[0]))
      setIsLoading(false)
    }
  
  useEffect(()=>{  
    getQuiz()
  },[])

  const handleNextPress = () => {
    setCurrQuestion(currQuestion+1)
    setOptions(generateOptionsAndShuffle(questions[currQuestion+1]))
  }

  const generateOptionsAndShuffle = (_question) => {
    const options = [..._question.incorrect_answers]
    options.push(_question.correct_answer)
    shuffleArray(options)
    return options
  }

  const handleSelectedOption = (_option) => {
    if(_option===questions[currQuestion].correct_answer){
      setScore(score+10)
    }
    if(currQuestion!==9){
      handleNextPress()
    }else{
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    navigation.navigate("Result", {
      score: score
    })
  }

  return (
    <View style={Styles.quizContainer}>
      { isLoading ? <View style={{height: '100%',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 32, fontWeight: '700', color:'#FFD60A'}}>Loading...</Text>
      </View> : questions && (
        <View style={Styles.parent}>
        <View style={Styles.top}>
        <Text style={Styles.question}>Q. {decodeURIComponent(questions[currQuestion].question)}</Text>
      </View>

      <View style={Styles.options}>
        <TouchableOpacity style={Styles.optionArea} onPress={()=> handleSelectedOption(options[0])}>
          <Text style={Styles.option}>{"A) "}{decodeURIComponent(options[0])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.optionArea} onPress={()=> handleSelectedOption(options[1])}>
          <Text style={Styles.option}>{"B) "}{decodeURIComponent(options[1])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.optionArea} onPress={()=> handleSelectedOption(options[2])}>
          <Text style={Styles.option}>{"C) "}{decodeURIComponent(options[2])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.optionArea} onPress={()=> handleSelectedOption(options[3])}>
          <Text style={Styles.option}>{"D) "}{decodeURIComponent(options[3])}</Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.bottom}>
        {(currQuestion !== 9) && (
          <TouchableOpacity style={Styles.quizButton} onPress={handleNextPress}>
            <Text style={Styles.quizButtonText}>SKIP</Text>
          </TouchableOpacity>
        )}

        {(currQuestion === 9) && (
          <TouchableOpacity style={Styles.quizButton} onPress={handleSubmit}>
            <Text style={Styles.quizButtonText}>Show Results</Text>
          </TouchableOpacity>
        )}
      </View>
      </View>
      )}
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({})