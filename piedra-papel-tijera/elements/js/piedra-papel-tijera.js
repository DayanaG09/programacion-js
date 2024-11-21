let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
  document
    .getElementById("boton-piedra")
    .addEventListener("click", () => seleccionarAtaque("Piedra"));
  document
    .getElementById("boton-papel")
    .addEventListener("click", () => seleccionarAtaque("Papel"));
  document
    .getElementById("boton-tijera")
    .addEventListener("click", () => seleccionarAtaque("Tijera"));
  document
    .getElementById("boton-lagarto")
    .addEventListener("click", () => seleccionarAtaque("Lagarto"));
  document
    .getElementById("boton-spock")
    .addEventListener("click", () => seleccionarAtaque("Spock"));

  document
    .getElementById("btn-reiniciar")
    .addEventListener("click", reiniciarJuego);
}

function seleccionarAtaque(ataque) {
  ataqueJugador = ataque;
  document.getElementById("jugador").innerText = ataque;
  seleccionarAtaqueEnemigo();
}

function seleccionarAtaqueEnemigo() {
  const ataques = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];
  ataqueEnemigo = ataques[aleatorio(0, ataques.length - 1)];
  document.getElementById("enemigo").innerText = ataqueEnemigo;
  combate();
}

function combate() {
  if (ataqueJugador === ataqueEnemigo) {
    crearMensaje("EMPATE");
  } else if (
    (ataqueJugador === "Piedra" &&
      (ataqueEnemigo === "Tijera" || ataqueEnemigo === "Lagarto")) ||
    (ataqueJugador === "Papel" &&
      (ataqueEnemigo === "Piedra" || ataqueEnemigo === "Spock")) ||
    (ataqueJugador === "Tijera" &&
      (ataqueEnemigo === "Papel" || ataqueEnemigo === "Lagarto")) ||
    (ataqueJugador === "Lagarto" &&
      (ataqueEnemigo === "Papel" || ataqueEnemigo === "Spock")) ||
    (ataqueJugador === "Spock" &&
      (ataqueEnemigo === "Piedra" || ataqueEnemigo === "Tijera"))
  ) {
    crearMensaje("GANASTE");
    vidasEnemigo--;
    document.getElementById("vidas-enemigo").innerText = vidasEnemigo;
  } else {
    crearMensaje("PERDISTE");
    vidasJugador--;
    document.getElementById("vidas-jugador").innerText = vidasJugador;
  }

  revisarVidas();
}

function revisarVidas() {
  if (vidasEnemigo === 0) {
    crearMensajeFinal("¡FELICIDADES! GANASTE 🎉");
  } else if (vidasJugador === 0) {
    crearMensajeFinal("LO LAMENTO, PERDISTE 😢");
  }
  var mensajes = document.getElementById("mensajes");
  if (mensajes.innerText != "") {
    mensajes.classList.remove("d-none");
  } else {
    mensajes.classList.add("d-none");
  }
}

function crearMensaje(resultado) {
  let sectionMensajes = document.getElementById("mensajes");
  let parrafo = document.createElement("p");
  parrafo.innerText = `Tu ataque: ${ataqueJugador}, Ataque enemigo: ${ataqueEnemigo} - ${resultado}`;
  sectionMensajes.appendChild(parrafo);
}

function crearMensajeFinal(resultadoFinal) {
  let sectionMensajes = document.getElementById("mensajes");
  let parrafo = document.createElement("p");
  parrafo.innerText = resultadoFinal;
  sectionMensajes.appendChild(parrafo);

  document
    .querySelectorAll("button[id^='boton-']")
    .forEach((boton) => (boton.disabled = true));
}

function reiniciarJuego() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
