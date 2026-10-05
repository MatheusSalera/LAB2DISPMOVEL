
import React from 'react';
import { Text, Button, View } from 'react-native';
import estilos from './estilos';

const OPCOES = ['Pedra', 'Papel', 'Tesoura'];
const TOTAL_RODADAS = 5; // melhor de 5 jogadas

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jogadaJogador: '',
      jogadaApp: '',
      resultado: '',
      vitorias: 0,
      derrotas: 0,
      empates: 0,
      rodada: 0,
    };
  }

  sortearJogada() {
    return OPCOES[Math.floor(Math.random() * OPCOES.length)];
  }

  jogar(escolha) {
    if (this.state.rodada >= TOTAL_RODADAS) return;

    const jogadaApp = this.sortearJogada();
    let resultado = '';
    let vitorias = this.state.vitorias;
    let derrotas = this.state.derrotas;
    let empates = this.state.empates;

    if (escolha === jogadaApp) {
      resultado = 'Empate!';
      empates++;
    } else if (
      (escolha === 'Pedra' && jogadaApp === 'Tesoura') ||
      (escolha === 'Papel' && jogadaApp === 'Pedra') ||
      (escolha === 'Tesoura' && jogadaApp === 'Papel')
    ) {
      resultado = 'Você ganhou!';
      vitorias++;
    } else {
      resultado = 'Você perdeu!';
      derrotas++;
    }

    this.setState({
      jogadaJogador: escolha,
      jogadaApp,
      resultado,
      vitorias,
      derrotas,
      empates,
      rodada: this.state.rodada + 1,
    });
  }

  reiniciar() {
    this.setState({
      jogadaJogador: '',
      jogadaApp: '',
      resultado: '',
      vitorias: 0,
      derrotas: 0,
      empates: 0,
      rodada: 0,
    });
  }

  corDoResultado() {
    if (this.state.resultado === 'Você ganhou!') return '#16a34a';
    if (this.state.resultado === 'Você perdeu!') return '#dc2626';
    return '#6b7280'; 
  }

  mensagemFinal() {
    const { vitorias, derrotas } = this.state;
    if (vitorias > derrotas) return 'Você venceu a partida!';
    if (vitorias < derrotas) return 'O aplicativo venceu a partida!';
    return 'A partida terminou empatada!';
  }

  render() {
    const fimDeJogo = this.state.rodada >= TOTAL_RODADAS;

    return (
      <View style={estilos.container}>
        <Text style={estilos.titulo}>Pedra, Papel ou Tesoura</Text>
        <Text style={estilos.texto}>Rodada {this.state.rodada} de {TOTAL_RODADAS}</Text>

        <View style={estilos.botoes}>
          <Button title="Pedra" onPress={() => this.jogar('Pedra')} disabled={fimDeJogo} />
          <Button title="Papel" onPress={() => this.jogar('Papel')} disabled={fimDeJogo} />
          <Button title="Tesoura" onPress={() => this.jogar('Tesoura')} disabled={fimDeJogo} />
        </View>

        {this.state.jogadaApp !== '' && (
          <Text style={estilos.texto}>
            Você jogou {this.state.jogadaJogador} — App jogou {this.state.jogadaApp}
          </Text>
        )}

        <Text style={[estilos.resultado, { color: this.corDoResultado() }]}>
          {this.state.resultado}
        </Text>

        <Text style={estilos.placar}>
          Placar (melhor de {TOTAL_RODADAS}): {this.state.vitorias} x {this.state.derrotas}
        </Text>
        <Text style={estilos.texto}>Empates: {this.state.empates}</Text>

        {fimDeJogo && <Text style={estilos.final}>{this.mensagemFinal()}</Text>}

        <View style={estilos.espaco}>
          <Button title="Reiniciar" onPress={() => this.reiniciar()} color="gray" />
        </View>
      </View>
    );
  }
}

export default App;
