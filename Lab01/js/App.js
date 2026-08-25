
function App() {
  return (
    <div className="pagina">
      <Cabecalho />
      <Introducao />
      <Livros />
      <VideosEMapa />
      <Contatos />
      <Rodape />
    </div>
  ); 
}

ReactDOM.render(<App />, document.getElementById("root"));
