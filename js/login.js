let formLogin = document.getElementById("form-login");


formLogin.addEventListener("submit", function (event) {
    let usuarioLogueado = {
        usuario: document.getElementById("inputEmail").value,
        clave: document.getElementById("inputPassword").value
    }


    localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioLogueado))

    setTimeout(() => {}, 1000);

    location.href ="./index.html"

    event.preventDefault()
})
