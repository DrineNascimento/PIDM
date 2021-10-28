import React, {Component} from 'react'
import {Text, View} from 'react-native'

export default class Cabecalho extends Component{
    render(){
        return(
            <View>
                <Text style={{fontSize:20, fontWeight:'bold'}}>
                    Nome: {this.props.nome}
                </Text> 
                <Text>
                    Curso: {this.props.curso}
                </Text>
            </View>
        )
    }
}