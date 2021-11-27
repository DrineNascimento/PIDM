import React from 'React'
import{View, Text} from 'react-native'

const Personagem = (props) =>
<View>
    <Text> Pesonagem {props.nome} da Casa {props.casa} do Canal {props.canal}</Text>
    
</View>

export default Personagem