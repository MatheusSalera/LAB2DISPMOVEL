

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
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  texto: {
    fontSize: 16,
    marginBottom: 12,
    textAlign: 'center',
  },
  caixa: {
    borderWidth: 2,
    borderColor: '#1E3A8A',
    fontSize: 20,
    width: '60%',
    padding: 8,
    marginBottom: 15,
    textAlign: 'center',
  },
  resultado: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  espaco: {
    marginTop: 20,
  },
});

export default estilos;
