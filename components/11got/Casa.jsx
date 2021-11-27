import React from 'React'
import{View, Text} from 'react-native'
import Personagem from './Personagem'

const Casa = (props) =>
<View>
    <Text>Game of Thrones</Text>
    {
        React.Children.map(
            props.children,
            (personagem)=>{
               //return React.cloneElement(personagem,{casa:props.casa, canal:props.canal})
               return React.cloneElement(personagem,{...props}) //a retecencias significa que pegará todos os props
            }
        )
    }
</View>

export default Casa