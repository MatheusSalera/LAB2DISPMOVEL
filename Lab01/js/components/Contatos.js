
function Contatos() {
  const estiloSecao = {
    padding: "10px 30px 0 30px",
    textAlign: "center"
  };

  const estiloTabela = {
    border: "4px dashed red",
    borderCollapse: "collapse",
    margin: "10px auto"
  };

  const estiloCelula = {
    border: "1px solid #999",
    padding: "8px 20px"
  };

  const estiloCabecalho = {
    ...estiloCelula,
    color: "red",
    fontWeight: "bold"
  };

  const estiloCaixaSites = {
    backgroundColor: "yellow",
    width: "55%",
    maxWidth: "480px",
    padding: "25px 25px",
    textAlign: "left"
  };

  const estiloLinkLaranja = {
    color: "#cc3300",
    fontWeight: "bold",
    textDecoration: "underline"
  };

  const estiloLinkAzul = {
    color: "#5533cc",
    fontWeight: "bold",
    textDecoration: "underline"
  };

  return (
    <section id="contatos" style={estiloSecao}>
      <h2>Contatos</h2>

      <div className="tabela-wrapper">
        <table style={estiloTabela}>
          <thead>
            <tr>
              <th style={estiloCabecalho}>Nome</th>
              <th style={estiloCabecalho}>email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={estiloCelula}>Prof. Dr. Isaac</td>
              <td style={estiloCelula}>isaacjesus@fei.edu.br</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="sites-wrapper">
        <div className="caixa-sites" style={estiloCaixaSites}>
          <p>Sites para consulta:</p>
          <ul>
            <li>REACT - <a style={estiloLinkLaranja} href="https://www.w3schools.com/REACT/DEFAULT.ASP">https://www.w3schools.com/REACT/</a></li>
            <li>HTML - <a style={estiloLinkLaranja} href="https://www.w3schools.com/html/">https://www.w3schools.com/html/</a></li>
            <li>CSS - <a style={estiloLinkLaranja} href="https://www.w3schools.com/css/">https://www.w3schools.com/css/</a></li>
            <li>JavaScript - <a style={estiloLinkAzul} href="https://www.w3schools.com/js/">https://www.w3schools.com/js/</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
