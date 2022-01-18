import React from 'react'
import {Text} from 'react-native'

const mensagem = (props) =>{
    if (props.IMC<17) return <Text style={{fontSize:18, fontWeight:'bold', color:'red'}}>Muito abaixo do peso</Text>
    if (props.IMC<18.49) return <Text style={{fontSize:18, fontWeight:'bold', color:'red'}}>Abaixo do peso</Text>
    if (props.IMC<24.99) return <Text style={{fontSize:18, fontWeight:'bold', color:'blue'}}>Peso normal</Text>
    if (props.IMC<29.99) return <Text style={{fontSize:18, fontWeight:'bold', color:'red'}}>Acima do peso</Text>
    if (props.IMC<34.99) return <Text style={{fontSize:18, fontWeight:'bold', color:'red'}}>Obseidade I</Text>
    if (props.IMC<39.99) return <Text style={{fontSize:18, fontWeight:'bold', color:'red'}}>Obseidade I (severa) </Text>
    if (props.IMC>40) return <Text style={{fontSize:18, fontWeight:'bold', color:'red'}}>Obseidade II (mórbida) </Text>
    
}

export default mensagem