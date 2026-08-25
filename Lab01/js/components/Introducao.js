
function Introducao() {
  const estiloSecao = {
    padding: "20px 30px",
    textAlign: "center"
  };

  const estiloTexto = {
    color: "#33337a",
    fontFamily: "sans-serif",
    fontSize: "20px",
    textAlign: "justify",
    maxWidth: "850px",
    margin: "0 auto 16px auto"
  };

  return (
    <section id="home" style={estiloSecao}>
      <h2>Introdução</h2>
      <p style={estiloTexto}>
        Com o React, você cria interfaces organizadas em componentes reutilizáveis, que
        controlam tanto a exibição quanto o comportamento da aplicação. Ele permite atualizar
        elementos de forma dinâmica, sem recarregar a página inteira, além de facilitar a
        aplicação de estilos, animações e recursos interativos de maneira escalável. 
      </p>
      <p style={estiloTexto}>
        O React é uma das bibliotecas mais populares do ecossistema JavaScript e tornou-se
        referência no desenvolvimento de interfaces modernas. Sua principal força está na
        criação de componentes reutilizáveis, que tornam o código mais organizado e facilitam
        a construção de aplicações escaláveis e de fácil manutenção. 
   
      </p>
    </section>
  );
}
