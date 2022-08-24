function signUp() {
  let register_Username;
  let register_Password;
  let confirm_Register_Password;
  let newUser;
  document.getElementById("register_submit").onclick = function () {
    register_Username = document.getElementById("usernameR").value;
    register_Password = document.getElementById("passwordR").value;
    confirm_Register_Password =
      document.getElementById("confirm_passwordR").value;

    if (register_Password === confirm_Register_Password) {
      if (register_Username.length > 1 && register_Password.length > 1) {
        if (
          register_Username.includes("<", ">", "*", "/") ||
          register_Password.includes("<", ">", "*", "/")
        ) {
          document.getElementById("warningR").innerHTML = "";
          document.getElementById("warningR").innerHTML =
            "No se permiten ese tipo de caracteres";
        } else {
          document.getElementById("warningR").innerHTML = "";
          newUser = new User(register_Username, register_Password);
          pushUserData(newUser);
          document.getElementById("usernameR").value = "";
          document.getElementById("passwordR").value = "";
          document.getElementById("confirm_passwordR").value = "";
          document.querySelector(".register").style.display = "none";
          document.querySelector(".login").style.display = "flex";
          //Recorriendo y mostrando objeto NewUser y array de objetos users_data en consola.
          console.log("El nuevo usuario creado es:");
          for (let prop in newUser) {
            console.log(newUser[prop]);
          }
          console.log("La base de datos de los usuarios registrados es: ");
          users_data.forEach((bloque) => console.log(bloque));
          Swal.fire({
            title: "Exito!",
            text: `${register_Username} has sido registrado con exito! Ahora puedes iniciar sesion`,
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      } else {
        document.getElementById("warningR").innerHTML = "";
        document.getElementById("warningR").innerHTML =
          "Su usuario y contrasena deben tener al menos 1 caracter";
      }
    } else {
      document.getElementById("warningR").innerHTML = "";
      document.getElementById("warningR").innerHTML =
        "Sus contrasenas no coinciden";
    }

    return false;
  };
}
