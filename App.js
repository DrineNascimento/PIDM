import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

//atividade 3
import CalculadoraApp from './components/Atividade03/IMCApp';

export default function App() {
  return (
    < CalculadoraApp/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#e0c9c9ff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px'
  },
});

// RASCUNHOS DOS EXERCÍCIOS 

//import OlaMundo from './components/OlaMundo'
//import Andrine from './components/Andrine'
//import Aula03 from './components/Aula03'

//ATIVIDADE 2
/*import Cabecalho from './components/Cabecalho';
import Corpo from './components/Corpo';
import Disciplina from './components/Disciplina';

export default function App() {
  return (
    <View style={styles.container}> 
      <Corpo />
      <Cabecalho 
        nome='Andrine Nascimento'
        curso= 'Design Digital'
      />
      <Disciplina
        disciplina= 'PIMD'
      />
      <Disciplina
        disciplina= 'Sociologia e Antropologia'
      />
      <Disciplina
        disciplina= 'TCC 2'
      />
    </View> 
  );
}*/

//AULA 04
/*import {Hulk as H, Loki} from './components/08Vingadores'

export default function App(){
  return(
    <View style={styles.container}>
        <H nome='Jefferson'/>
        <Loki nome='Pedro'/>
        
    </View>
  )
}*/


/*import Casa from './components/11got/Casa'
import Personagem from './components/11got/Personagem';

export default function App(){
  return(
    <View style={styles.container}>
        <Casa casa='Lannister' canal="HBO">
        <Personagem nome='Tyrion'/>
        <Personagem nome='Tywin'/>
        </Casa>  
    </View>
  )
}*/

/*import IMC from './components/12IMC'

export default function App() {
  return (
    <View style={styles.container}>
      <IMC altura={1.84} peso={91} />
    </View>
  );
}*/


/*import MyState from './components/13State';
export default function App() {
  return (
    <View style={styles.container}>
      <MyState/>
    </View>
  );
}*/

/*import VotacaoCidades from './components/15VotacaoCidades';
export default function App() {
  return (
    <View style={styles.container}>
      <VotacaoCidades/>
    </View>
  );
}*/

//ESTILOS
/*import EstudoEstilos from './components/16Estilos';

export default function App() {
  return (
    <View style={styles.container}>
      <EstudoEstilos/>
    </View>
  );
}*/

//FLEXBOX

/*import MyFlex from './components/17Flexbox';

export default function App() {
  return (
    <MyFlex/>
  );
}*/

/*import MyFlex from './components/18Flexbox';

export default function App() {
  return (
    <MyFlex/>
  );
}*/

// AULA 06
/*import CalculadoraApp from './components/20Calculadora/20CalculadoraApp';

export default function App() {
  return (
    < CalculadoraApp/>
  );
}*/

/*import EntradaComBotao from './components/21ExemploBotao/21EntradaComBotao';
export default function App() {
  return (
    <EntradaComBotao/>
  );
}*/



