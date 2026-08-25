
function VideosEMapa() {
  const estiloSecao = {
    padding: "10px 30px 30px 30px",
    textAlign: "center"
  };

  return (
    <section id="videos" style={estiloSecao}>
      <h2>Aprenda REACT na FEI.</h2>

      <div className="responsivo-frame">
        <iframe
          src="https://www.youtube.com/embed/4MHAOPxcnsQ"
          title="Vídeo FEI"
          allow="accelerometer; autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      <div style={{ marginTop: "20px" }}>
        <iframe
          title="Mapa FEI"
          src="https://maps.google.com/maps?q=FEI+Campus+Sao+Bernardo+do+Campo,+Av.+Humberto+de+Alencar+Castelo+Branco,+3972&output=embed"
          width="100%"
          style={{ border: 0, maxWidth: "600px", height: "300px" }}
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
