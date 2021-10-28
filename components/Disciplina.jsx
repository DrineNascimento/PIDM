import React, {Component} from 'react'
import {Text, View} from 'react-native'

export default class DisciplinaProps extends Component{
    render(){
        return(
            <View>
                <Text>Disciplina: {this.props.disciplina}</Text>
            </View>
        )
    }
}

/*export default class Disciplina extends Component{
    render(){
        return(
            <View>
                <DisciplinaProps nome='PIMD'/>
                <DisciplinaProps nome='Sociologia e Antropologia'/>
                <DisciplinaProps nome='TCC2'/>
            </View>
        )
    }
}*/