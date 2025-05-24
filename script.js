document.addEventListener("DOMContentLoaded", () => {
  let container = document.querySelector(".container");
  let img = document.createElement("img");
  let data = document.createElement("p");
  let saudacao = document.createElement("h1");

  let d = new Date();
  let dia = d.getDate();
  let mes = d.getMonth() + 1;
  let ano = d.getFullYear();
  let hora = d.getHours();

  if (dia < 10) dia = `0${dia}`;
  if (mes < 10) mes = `0${mes}`;

  data.innerText = `${dia}/${mes}/${ano}`;

  if (hora >= 18) {
    img.src = " Boa-noite.jpg";
    saudacao.innerHTML =
      "Boa noite, Que os anjos te protejam e que os sonhos te levem a bons lugares.";
  } else if (hora >= 12) {
    img.src = "Boa-tarde.jpg";
    saudacao.innerHTML =
      "Uma tarde cheia de fé, esperança e boas surpresas pra você.";
  } else if (hora >= 6) {
    img.src = "Bom-dia.jpg";
    saudacao.innerHTML = "Bom dia, que seu dia seja repleto de benção.";
  } else if (hora >= 0) {
    img.src = "Madrugada.jpg";
    saudacao.innerHTML =
      "Boa madrugada, Que o silêncio da noite acalme o coração e fortaleça a mente.";
  }

  container.appendChild(img);
  container.appendChild(saudacao);
  container.appendChild(data);
});
