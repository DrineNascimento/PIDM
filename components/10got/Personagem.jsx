import React from 'React'
import{View, Text} from 'react-native'

const Personagem = (props) =>
<View>
    <Text> Pesonagem {props.nome} da Casa {props.casa}</Text>
    
</View>

export default Personagem