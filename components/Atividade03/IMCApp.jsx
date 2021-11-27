import React, {Component} from 'react'
import {StyleSheet,View, Text, Button, TextInput} from 'react-native'
import CalcularIMC from './IMCCalc'

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
                <CalcularIMC altura={this.state.altura} peso={this.state.peso}/>
            )
        } 
        return null
    }

    render(){
        return(
        <View style={estilos.container}>

            <Text style={estilos.cabecalho}>
                    Calculadora de IMC
            </Text>

            <TextInput
                style={estilos.altura}
                placeholder="Digite a altura"
                onChangeText={(altura)=> this.setState({altura:altura})} //pega a mudança em tempo real
            />

            <TextInput
                style={estilos.peso}
                placeholder="Digite o peso"
                onChangeText={(peso)=> this.setState({peso:peso})}
            />
            <View style={estilos.botao}> 
                <Button
                    title='Calcular IMC'
                    onPress={this.acaoBotao}
                />
            </View>

            {this.renderizarCalculo()}
        </View>
        )
    }    
}

const estilos = StyleSheet.create (
    {
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor: '#e5e5e5'
        },
        cabecalho:{
            fontSize:24,
            fontWeight: "bold",
            margin:15,
            

        },
        altura:{
            height:45,
            width: '70%',
            borderColor:'gray',
            borderWidth:2,
            paddingLeft: 20,
            margin:3

        },
        peso:{
            height:45,
            width: '70%',
            borderColor:'gray',
            borderWidth:2,
            paddingLeft: 20,
            margin:3

        },

        botao:{
            width:'70%',
            margin:7,
        }
    }
)