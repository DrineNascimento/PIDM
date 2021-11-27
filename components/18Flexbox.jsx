import React from "react"
import {View} from 'react-native'

const myFlex = () =>
    <View style={{
        flex:1,//valor padrão é 1
        //flexDirection:'row' //organizado em linha (esquerda pra direitra)
        //flexDirection:'row-reverse',
        flexDirection:'column', // TUDO VAI DE ACORDO COM O QUE ESTÁ AQUI
        //flexDirection:'column-reverse',

        justifyContent:'flex-start', //valor padrão
        //justifyContent:'flex-end',
        //justifyContent:'space-around', //divisão proporcional entre os componentes
        //justifyContent:'space-between', 
        //justifyContent:'space-evenly', //mesmo espaço entre os componentes

       // alignItems:'flex-start', //valor padrão
        alignItems:'center',
    }}>

        <View style={{width:50, height:50, backgroundColor:'green'}}></View>
        <View style={{width:50, height:50, backgroundColor:'red'}}></View>
        <View style={{width:50, height:50, backgroundColor:'blue', alignSelf:'flex-end'}}></View>
    
    </View>

export default myFlex