function login() {
  let login_username;
  let login_password;

  document.getElementById("login_submit").onclick = function () {
    login_username = document.getElementById("usernameL").value;
    login_password = document.getElementById("passwordL").value;
    //Validacion
    const validateName = users_data.some((user) => user.name == login_username);
    const validatePassword = users_data.some(
      (user) => user.pass == login_password
    );

    validateName && validatePassword ? exitopopup() : noUserFound();

    return false;
  };
  function exitopopup() {
    document.getElementById("warningGL").innerHTML = "";
    document.getElementById("warningGL").innerHTML =
      "Felicidades " + login_username + "! has iniciado sesion exitosamente";
    Swal.fire({
      title: "Exito!",
      text: `${login_username} has iniciado sesion con exito!`,
      icon: "success",
      confirmButtonText: "Ok",
    });
    rickandmorty(login_username);
    return false;
  }
  function noUserFound() {
    document.getElementById("warningL").innerHTML =
      "Usuario o contrasenas no existen";
    setTimeout(() => {
      document.getElementById("warningL").innerHTML = "";
    }, 4000);
  }
}
