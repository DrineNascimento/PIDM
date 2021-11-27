import React, {useState, useEffect} from "react";
import { render } from "react-dom";
import {View, Text, Button} from 'react-native'

const VotacaoCidades = () => {

    const [quixada, setQuixada] = useState(0) 
    const [fortaleza, setFortaleza] = useState(0)
    const [caucaia, setCaucaia] = useState(0)

    const [statusQuixada,setStatusQuixada] = useState("PAR")
    const [statusFortaleza, setStatusFortaleza] = useState ("PAR")

    useEffect(
        ()=>{
            if(quixada%2===0) setStatusQuixada("PAR")
            else setStatusQuixada("IMPAR")

            if(fortaleza%2===0) setStatusFortaleza("PAR")
            else setStatusFortaleza("IMPAR")
        },

        [quixada, fortaleza]//conjunto de variaveis para ser observada
    )

    function votarQuixada(){ //primeira forma de fazer
        setQuixada(quixada+1)
    }

    const votarFortaleza = ()=>{// segunda forma de fazer
        setFortaleza(fortaleza+1)
    }

    return(
        <View>
            <Text style={{ fontSize: 20 }}> Votação de cidades com funcão</Text>
            <Text style={{ fontSize: 16 }}> Quixada: {quixada} - {statusQuixada}</Text>
            <Text style={{ fontSize: 16 }}> Fortaleza: {fortaleza} - {statusFortaleza}</Text>
            <Text style={{ fontSize: 16 }}> Caucaia: {caucaia}</Text>

            <Button
                title="Quixadá"
                onPress={()=>votarQuixada()} //função para disparar função
            />

            <Button
                title="Fortaleza"
                onPress={votarFortaleza} //só dispara a função quando é pressionado
            />
            <Button
                title="Caucaia"
                onPress={()=>setCaucaia(caucaia+1)}//terceira forma de fazer
                
            />
        </View>
    )
}

export default VotacaoCidades