import React from 'react'
import {View,Image} from 'react-native'

export default class Corpo extends React.Component{
    render(){
        let figura = {uri:'https://mir-s3-cdn-cf.behance.net/user/276/248862162403393.5fbc0f512a0d3.jpg'}

        return(
            <Image
                source={figura} 
                style={{width:150,height:180}}/>
        )
    }
}