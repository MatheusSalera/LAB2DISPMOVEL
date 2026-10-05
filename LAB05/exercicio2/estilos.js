
import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: 24,
    backgroundColor: '#fff',
  },
  titulo: {
    color: '#1E3A8A',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  texto: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  botoes: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginVertical: 15,
  },
  resultado: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#dc2626',
    marginVertical: 10,
  },
  placar: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  final: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#16a34a',
    marginTop: 15,
    textAlign: 'center',
  },
  espaco: {
    marginTop: 20,
  },
});

export default estilos;
