import React, {Component} from 'react'
import {Text, View} from 'react-native'


export default class OlaMundo extends Component{
    render(){ //responsável por renderizar a página
        //aqui dentro fic ao código jsx
        return(
            <View>
                <Text style={{fontSize:23, fontWeight:'bold'}}>
                    Primeira aula de react
                </Text>
            </View>
        )
    }
}
//necessário exportar a classe e importar no App.js

