import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//import OlaMundo from './components/OlaMundo'
//import Andrine from './components/Andrine'
//import Aula03 from './components/Aula03'
import Cabecalho from './components/Cabecalho';
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0c9c9ff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px'
  },
});
