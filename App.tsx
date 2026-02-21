import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Hello, World!Diiogos</Text>
      <TouchableOpacity>
        
      </TouchableOpacity>
      <Button title="Clique aqui"
      onPress={() => alert('Botão clicado!')} 

      />
      <StatusBar style="auto" />
    </View>
  ); 
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#0e0ae600',
    alignItems: 'center',
    justifyContent: 'center',

  },
  titulo: {
    color: '#189ef700',
    fontWeight: 'bold',
    fontSize: 25,
  },
  botao: {
    borderRadius: '45rem',
    fontSize: 10,
  },
});
