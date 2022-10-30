import React from 'react'
import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingHorizontal: 16,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    quizContainer: {
        paddingTop: 10,
        paddingHorizontal: 16,
        height: '100%',
        backgroundColor: '#003566'
    },
    resultContainer: {
        paddingTop: 10,
        paddingHorizontal: 16,
        height: '100%',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    scoreContainer: {
        paddingTop: 30
    },
    banner: {
        height: 300,
        width: 300
    },
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    top: {
        marginVertical: 16,
        backgroundColor: '#000814',
        borderRadius: 15,
        padding: 20
    },
    options: {
        marginVertical: 16,
        flex: 1
    },
    bottom: {
        marginBottom: 12,
        paddingVertical: 16,
        alignItems: 'center'
    },
    title: {
        fontSize: 60,
        fontWeight: '900',
        color: '#001d3d'
    },
    button: {
        width: '100%',
        backgroundColor: '#FFD60A',
        padding: 15,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 40
    },
    startText: {
        color: '#001D3D',
        fontWeight: '900',
        fontSize: 30
    },
    quizButton: {
        width: '50%',
        backgroundColor: '#000814',
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        marginBottom: 20,
    },
    quizButtonText: {
        fontSize: 20,
        fontWeight: '900',
        color: 'white'
    },
    question: {
        fontSize: 28,
        color: 'white'
    },
    optionArea: {
        paddingVertical: 12,
        marginVertical: 6,
        paddingHorizontal: 15,
        backgroundColor: '#FFD60A',
        borderRadius: 12
    },
    option: {
        fontSize: 20,
        fontWeight: '500',
        color: '#000814'
    },
    parent: {
        height: "100%"
    },
    endButton:{
        width: '50%',
        backgroundColor: '#003566',
        padding: 15,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 40
    },
    endText: {
        fontSize: 20,
        fontWeight: '900',
        color: 'white'
    },
    scoreText: {
        fontSize: 50,
        fontWeight: "900",
        color: "#B60B0B"
    }
})

export default Styles