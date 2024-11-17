document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const successMessage = document.getElementById("successMessage");

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    if (!name) {
      nameError.textContent = "El nombre es obligatorio.";
      isValid = false;
    }

    if (!email) {
      emailError.textContent = "El correo electrónico es obligatorio.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailError.textContent = "El correo electrónico no es válido.";
      isValid = false;
    }

    if (!password) {
      passwordError.textContent = "La contraseña es obligatoria.";
      isValid = false;
    } else if (password.length < 6) {
      passwordError.textContent =
        "La contraseña debe tener al menos 6 caracteres.";
      isValid = false;
    }

    if (isValid) {
      successMessage.textContent = "Formulario enviado con éxito.";
      console.log({ name, email, password });
    }
  });
