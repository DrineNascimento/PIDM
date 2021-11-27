import React, {Component} from "react";
import {View, Text, Button} from 'react-native'

class MyState extends Component{

    constructor(props){
        super(props)
        this.state= {contador:0} //se tem um estado no componente não se cria uma variavel, mas sim uma state 
    }

    acaoBotao(){
        //alert('Andrine')
        //this.contador++
        this.setState({contador:this.state.contador+1}) //para modificar o estado do componente se usa o setState
    }

    render(){
        return(
            <View>
                <Text style={{fontSize:26}}> Contador: {this.state.contador} </Text>
                <Button
                    title="Me aperte"
                    onPress={()=>this.acaoBotao()}
                />
            </View>
        )
    }
}
export default MyState

