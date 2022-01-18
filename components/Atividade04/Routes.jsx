import Home from './Home'
import About from './About'

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Modal from './Modal'
import CalculadoraApp from './IMCApp'
import Cadastro from './Cadastro'


const PilhaDasTelas = createStackNavigator()
const PilhaRaiz = createStackNavigator()

function FuncaoPilhaDasTelas(){
    return(
        <PilhaDasTelas.Navigator
            initialRouteName='Home'
        >
            <PilhaDasTelas.Screen 
            name='Home'
            component={Home}
            options={{title:'Tela Inicial'}}/>
            <PilhaDasTelas.Screen 
            name='About'
            component={About}
            options={{title:'Sobre'}}/>
            <PilhaDasTelas.Screen 
            name='imc'
            component={CalculadoraApp}
            options={{title:'IMC'}}/>
            <PilhaDasTelas.Screen 
            name='Cadastro'
            component={Cadastro}
            options={{title:'Cadastro'}}/>
        </PilhaDasTelas.Navigator>
    )
}

function FuncaoPilhaRaiz(){
    return(
        <NavigationContainer>
            <PilhaRaiz.Navigator>
                <PilhaRaiz.Screen 
                    name='Principal'
                    component={FuncaoPilhaDasTelas}
                    options={{headerShown:false}}
                />
                <PilhaRaiz.Screen 
                    name='Modal'
                    options={{title:'Perfil'}}
                    component={Modal}
                />
            </PilhaRaiz.Navigator>
        </NavigationContainer>
    )
}

export default FuncaoPilhaRaiz
