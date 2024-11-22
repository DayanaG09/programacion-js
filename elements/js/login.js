const inputCorreo = document.getElementById("inputCorreo");
const inputContraseña = document.getElementById("inputContraseña");
const botonInicioSesion = document.getElementById("inicioSesion");
const registrate = document.getElementById("registrate");

const registroCorreo = document.getElementById("registroCorreo");
const registroContraseña = document.getElementById("registroContraseña");
const registroBtn = document.getElementById("registroBtn");

const loginSection = document.getElementById("login-section");
const registroSection = document.getElementById("registro-section");

// Simulación de una base de datos de usuarios
let usuarios = {
  dayana: "1234", // Usuario preexistente
};

// Evento para iniciar sesión
botonInicioSesion.addEventListener("click", () => {
  const correo = inputCorreo.value.trim();
  const contraseña = inputContraseña.value.trim();

  if (!correo || !contraseña) {
    alert("Por favor completa la información requerida para iniciar sesión.");
    return;
  }

  if (usuarios[correo] && usuarios[correo] === contraseña) {
    alert("Inicio de sesión exitoso ⭐");
    window.location.href = "piedra-papel-tijera.html";
  } else {
    alert("Correo o contraseña incorrectos.");
  }
});

// Mostrar formulario de registro
registrate.addEventListener("click", () => {
  loginSection.style.display = "none";
  registroSection.style.display = "block";
});

// Registrar un nuevo usuario
registroBtn.addEventListener("click", () => {
  const correo = registroCorreo.value.trim();
  const contraseña = registroContraseña.value.trim();

  if (!correo || !contraseña) {
    alert("Por favor completa la información requerida para registrarte.");
    return;
  }

  if (usuarios[correo]) {
    alert("Este correo ya está registrado.");
    return;
  }

  usuarios[correo] = contraseña;
  alert("Registro exitoso. Ahora puedes iniciar sesión.");
  registroSection.style.display = "none";
  loginSection.style.display = "block";
});
