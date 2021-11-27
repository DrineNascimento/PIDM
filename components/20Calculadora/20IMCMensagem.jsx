import React from 'react'
import {Text} from 'react-native'

const mensagem = (props) =>{
    if (props.IMC<=19) return <Text style={{fontSize:25}}>Abaixo do peso</Text>
    if (props.IMC>=25) return <Text style={{fontSize:25}}>Acima do peso</Text>
    return <Text style={{fontSize:25}}>Peso na média</Text>
    
}

export default mensagem