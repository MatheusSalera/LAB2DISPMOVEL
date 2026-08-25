
function Cabecalho() {
  const estiloTitulo = {
    backgroundColor: "#fbe0c4",
    border: "2px solid #002d9c",
    color: "#0a6b2d",
    textAlign: "center",
    fontWeight: "bold",
    padding: "12px",
    margin: 0,
    fontSize: "clamp(16px, 4.5vw, 22px)"
  };

  const estiloMenu = {
    backgroundColor: "#8ecae6",
    margin: 0,
    padding: "10px 0",
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    flexWrap: "wrap"
  };

  const estiloLink = {
    color: "#8b0000",
    fontWeight: "bold",
    textDecoration: "none",
    fontSize: "14px"
  };

  return (
    <header>
      <h1 style={estiloTitulo}>APRENDENDO REACT PARA DESENVOLVIMENTO WEB</h1>
      <nav>
        <ul style={estiloMenu}>
          <li><a href="#home" style={estiloLink}>HOME</a></li>
          <li><a href="#livros" style={estiloLink}>LIVROS</a></li>
          <li><a href="#videos" style={estiloLink}>VÍDEOS</a></li>
          <li><a href="#contatos" style={estiloLink}>CONTATOS</a></li>
        </ul>
      </nav>
    </header>
  );
}
