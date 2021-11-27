import React from 'React'
import{View, Text} from 'react-native'
import Personagem from './Personagem'

const Casa = (props) =>
<View>
    <Text>Game of Thrones</Text>
    {props.children}
</View>

export default Casa