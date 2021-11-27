import React, {Component} from "react";
import { render } from "react-dom";
import {View, Text, Button} from 'react-native'

class VotacaoCidades extends Component{
    constructor(props){
        super(props)
        this.state = {quixada:0, fortaleza:0, caucaia:0}
    }
    //metodo
    votarQuixada(){
        this.setState({quixada:this.state.quixada+1}) //para modificar o estado do componente se usa o setState
    }
    //criando variável que recebe uma função
    votarFortaleza =() =>{
        this.setState({fortaleza:this.state.fortaleza+1})
    }
        

    render(){
        return(
            <View>
                <Text style={{fontSize:26}}> Quixada: {this.state.quixada}</Text>
                <Text style={{fontSize:26}}> Fortaleza: {this.state.fortaleza}</Text>
                <Text style={{fontSize:26}}> Caucaia: {this.state.caucaia}</Text>

                <Button
                    title="Quixadá"  
                    onPress={()=>this.votarQuixada()}  
                />
                <Button
                    title="Fortaleza"  
                    onPress={this.votarFortaleza}  //não é preciso criar uma função para chamar o método pois já tem a própria função no valor da variável
                />
                <Button
                    title="Caucaia"    
                    onPress={()=> this.setState({caucaia:this.state.caucaia+1})} //forma mais usada é essa, implemenytar direto no botão
                />
            </View>
        )
    }
}

export default VotacaoCidades