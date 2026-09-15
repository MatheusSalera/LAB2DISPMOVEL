const { useState } = React;

function gerarNumeroAleatorio() {
 
  return Math.floor(Math.random() * 100);
}

function Adivinhacao() {
  const [numeroSecreto, setNumeroSecreto] = useState(gerarNumeroAleatorio());
  const [palpite, setPalpite] = useState("");
  const [mensagem, setMensagem] = useState("Tente Adivinhar");
  const [classeMensagem, setClasseMensagem] = useState("neutro");

  function verificarPalpite() {
    const numeroDigitado = Number(palpite);

    if (palpite === "" || isNaN(numeroDigitado)) {
      setMensagem("Digite um número válido");
      setClasseMensagem("grande");
      return;
    }

    if (numeroDigitado === numeroSecreto) {
      setMensagem("Parabéns, número correto");
      setClasseMensagem("correto");
    
      setNumeroSecreto(gerarNumeroAleatorio());
    } else if (numeroDigitado > numeroSecreto) {
      setMensagem("Número grande");
      setClasseMensagem("grande");
    } else {
      setMensagem("Número pequeno");
      setClasseMensagem("pequeno");
    }
  }

  return (
    <div className="jogo">
      <input
        type="text"
        value={palpite}
        onChange={(e) => setPalpite(e.target.value)}
        placeholder="0 a 99"
      />
      <br />
      <button onClick={verificarPalpite}>Clique Aqui</button>
      <div className={`mensagem ${classeMensagem}`}>{mensagem}</div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Adivinhacao />);
