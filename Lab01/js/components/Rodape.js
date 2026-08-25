
function Rodape() {
  const estiloRodape = {
    backgroundColor: "#fbe0c4",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 30px",
    marginTop: "30px",
    flexWrap: "wrap",
    gap: "10px"
  };

  const estiloTexto = {
    fontFamily: "'Comic Sans MS', 'Comic Sans', cursive",
    fontSize: "15px",
    textAlign: "center",
    flex: 1
  };

  return (
    <footer style={estiloRodape}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
        alt="HTML5"
        style={{ width: "60px" }}
      />
      <p style={estiloTexto}>
        Desejamos um excelente semestre a todos.
        <br />
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
        alt="CSS3"
        style={{ width: "60px" }}
      />
    </footer>
  );
}
