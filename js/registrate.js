const URLCiudades = "https://api-colombia.com/api/v1/City";

const KeysUsuarios = "usuarios";

async function pintarCiudades() {
  let ciudades = localStorage.getItem("ciudades");

  if (ciudades == null) {
    let ciudades = await consultarCiudades();
    localStorage.setItem("ciudades", JSON.stringify(ciudades));
  }

  ciudadesLocalStorage = localStorage.getItem("ciudades");
  ciudades = JSON.parse(ciudadesLocalStorage);

  let selectCiudades = document.getElementById("selectElement");

  selectCiudades.innerHTML = "";

  ciudades.forEach((ciudad) => {
    selectCiudades.innerHTML += `<option>${ciudad.name}</option>`;
  });

  new SlimSelect({
    select: "#selectElement",
  });
}

async function consultarCiudades() {
  response = await fetch(URLCiudades);
  response = await response.json();

  return response;
}

class Persona {
  constructor(nombre, telefono, email, ciudad, inquietud) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.email = email;
    this.ciudad = ciudad;
    this.inquietud = inquietud;
  }

  setPersonaLocalStorage() {
    let valores = {
      nombre: this.nombre,
      telefono: this.telefono,
      email: this.email,
      ciudad: this.ciudad,
      inquietud: this.inquietud,
    };


    if(this.validarUsuarioExiste(this.email, this.telefono)){
      Swal.fire({
        title: 'Error!',
        text: 'Este usuario ya fue registrado',
        icon: 'error',
        confirmButtonText: 'Cool'
      })

      return
    }

    let usuariosAntiguos = localStorage.getItem(KeysUsuarios)||"[]"
    usuariosAntiguos = JSON.parse(usuariosAntiguos)

    usuariosAntiguos.push(valores)

    localStorage.setItem(KeysUsuarios, JSON.stringify(usuariosAntiguos));
    Swal.fire({
      title: "<strong>Registro exitoso</strong>",
      icon: "success",
      focusConfirm: true,
    }).then(() =>{
       location.href = "./index.html";
    });
  }

  validarUsuarioExiste(email, telefono) {
    let usuarios = localStorage.getItem(KeysUsuarios);
    usuarios = JSON.parse(usuarios);

    if (usuarios != undefined) {
      return usuarios.some((usuario) => (usuario.email == email || usuario.telefono == telefono));
    }

    return false;
  }
}

document
  .getElementById("btn-registrarse")
  .addEventListener("click", function (event) {
    
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let ciudad = document.getElementById("selectElement").value;
    let inquietud = document.getElementById("inquietud").value;

    persona = new Persona(nombre, telefono, email, ciudad, inquietud);
    
    
    persona.setPersonaLocalStorage();

    
  });

pintarCiudades();
