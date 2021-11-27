import React, {Component} from 'react'
import {View, Text, TextInput, Button} from 'react-native'
import Calculadora from './20Calculadora'

export default class CalculadoraApp extends Component{
    constructor(props){
        super(props)
        this.state = {altura:null, peso:null, apertou:false} //se fosse função utizava-se o Hook
    }

    acaoBotao = () => {
        if (this.state.altura!=null && this.state.peso!=null){
            this.setState({apertou:true})
        }
    }

    renderizarCalculo(){
        if(this.state.apertou)
        {     
            //this.setState({apertou:false})   
            return(
                <Calculadora altura={this.state.altura} peso={this.state.peso}/>
            )
        } 
        return null
    }

    render(){
        return(
        <View>
            <TextInput
                style={{height:60, fontSize:24}}
                placeholder="Digite a altura"
                onChangeText={(altura)=> this.setState({altura:altura})} //pega a mudança em tempo real
            />

            <TextInput
                style={{height:60, fontSize:24}}
                placeholder="Digite o peso"
                onChangeText={(peso)=> this.setState({peso:peso})}
            />

            <Button
                title='Calcular IMC'
                onPress={this.acaoBotao}
            />

            {this.renderizarCalculo()}
        </View>
        )
    }
}