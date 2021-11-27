import React from "react"
import {View,Text} from 'react-native'

const myFlex = () => // divisão proporcional entre os filhos de acordo com o que o pai deu
<View style={{flex:1, backgroundColor: 'blue'}}> 
    <View style={{flex:1, backgroundColor: 'lightblue'}}> 
        
    </View>
    <View style={{flex:2, backgroundColor: 'red'}}>
        
    </View>
    <View style={{flex:3, backgroundColor: 'green'}}>
        
    </View>
</View>

export default myFlex