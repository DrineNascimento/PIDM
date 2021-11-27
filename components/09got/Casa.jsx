import React from 'React'
import{View, Text} from 'react-native'
import Personagem from './Personagem'

const Casa = () =>
<View>
    <Personagem nome='Tyrion' casa='Lannister'/>
    <Personagem nome='Tywin' casa='Lannister'/>
    <Personagem nome='Sansa' casa='Stark'/>
</View>

export default Casa