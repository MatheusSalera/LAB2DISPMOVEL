

import React from 'react';
import { Text, TextInput, Button, View } from 'react-native';
import estilos from './estilos';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numeroSecreto: this.sortear(),
      palpite: '',
      resultado: '',
      tentativas: 0,
      acertou: false,
    };
  }

  sortear() {
    return Math.floor(Math.random() * 101); 
  }

  verificar() {
    const palpiteNum = parseInt(this.state.palpite);

    if (isNaN(palpiteNum)) {
      this.setState({ resultado: 'Digite um número válido.' });
      return;
    }

    const tentativas = this.state.tentativas + 1;

    if (palpiteNum === this.state.numeroSecreto) {
      this.setState({ resultado: 'Acertou!', tentativas, acertou: true });
    } else if (palpiteNum > this.state.numeroSecreto) {
      this.setState({ resultado: 'Maior', tentativas });
    } else {
      this.setState({ resultado: 'Menor', tentativas });
    }
  }

  jogarNovamente() {
    this.setState({
      numeroSecreto: this.sortear(),
      palpite: '',
      resultado: '',
      tentativas: 0,
      acertou: false,
    });
  }

  corDoResultado() {
    if (this.state.resultado === 'Acertou!') return '#16a34a';
    if (this.state.resultado === 'Maior' || this.state.resultado === 'Menor') return '#dc2626';
    return '#000000';
  }

  render() {
    return (
      <View style={estilos.container}>
        <Text style={estilos.titulo}>Jogo da Adivinhação</Text>
        <Text style={estilos.texto}>Pensei em um número entre 0 e 100. Tente adivinhar!</Text>

        <TextInput
          style={estilos.caixa}
          placeholder="Digite seu palpite"
          keyboardType="numeric"
          value={this.state.palpite}
          onChangeText={(texto) => this.setState({ palpite: texto })}
        />

        <Button
          title="Verificar"
          onPress={() => this.verificar()}
          disabled={this.state.acertou}
        />

        <Text style={[estilos.resultado, { color: this.corDoResultado() }]}>
          {this.state.resultado}
        </Text>

        <Text style={estilos.texto}>Tentativas: {this.state.tentativas}</Text>

        <View style={estilos.espaco}>
          <Button title="Jogar Novamente" onPress={() => this.jogarNovamente()} color="gray" />
        </View>
      </View>
    );
  }
}

export default App;
