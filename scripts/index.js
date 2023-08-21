// Esta es la base de datos de nuestros usuarios
const baseDeDatos = {
  usuarios: [
    {
      id: 1,
      name: "Steve Jobs",
      email: "steve@jobs.com",
      password: "Steve123",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "shanna@melissa.tv",
      password: "Ervin345",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "nathan@yesenia.net",
      password: "Floppy39876",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "julianne.oconner@kory.org",
      password: "MysuperPassword345",
    },
  ],
};

// ACTIVIDAD


let loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("click", function(e){

  let errores = [];

  let inputEmail = document.querySelector("#email-input");
  if(inputEmail.value == ""){
    errores.push("El campo de nombre no debe estar vacío");
  } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(inputEmail.value))){
    errores.push("Ingrese una dirección de correo electrónico válida");
  }
  
  let inputPassword = document.querySelector("#password-input");
  if(inputPassword.value == ""){
    errores.push("Debe ingresar una contraseña");
  } else if(inputPassword.value.length < 5){
    errores.push("La contraseña debe tener al menos 5 caractéres")
  }

  let usuarioEncontrado = baseDeDatos.usuarios.find(function(usuario){

    return usuario.email === inputEmail.value && usuario.password === inputPassword.value;

  })

  if(usuarioEncontrado === undefined){

    errores.push("Alguno de los datos ingresados son incorrectos");

  } else {

    let loader = document.querySelector("#loader");
    loader.classList.remove("hidden");
    setTimeout(function(){
          
      let form = document.querySelector("form");
      form.classList.add("hidden");

      let h1 = document.querySelector("h1");
      h1.classList.add("hidden");

      let bienvenida = document.createElement("p");
      bienvenida.textContent = "Bienvenido al sitio 😀";
      document.querySelector("main").appendChild(bienvenida);
   
    }, 3000)
  }

    let ulErrores = document.querySelector(".errores ul");
    ulErrores.innerHTML = ""

    if(errores.length > 0){
      e.preventDefault();

      for (let i = 0; i < errores.length; i++) {
        ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
        
      }
  }

})
    

  
  


    



// 4) A partir de los inputs ingresados en el formulario, se deberan realizar las siguientes validaciones:
// 1) Que el primer input sea un email válido.
// 2) Que la contraseña tenga al menos 5 caracteres.
// 3) Que los datos ingresados corresponden a una
// persona que se encuentre registrada en la base de datos.
// En caso de que alguna de las validaciones no sea exitosa,
// se deberá mostrar un mensaje de error que diga "Alguno de los datos ingresados son incorrectos"

// 5) En caso de que los datos ingresados sean correctos, se deberá ocultar el formulario y mostrar
// un mensaje de bienvenida al sitio.

/* 
TIPS:
  - Puedes averiguar acerca de la manera de validar el formato de un email utilizando Javascript, buscando
    en internet frases como "Validar email con Javascript o similar".

  - Recuerda que puedes seleccionar y manipular los elementos del archivo index.html, usando los
    recursos que Javascript te ofrece para ello. Además, en el archivo styles.css tiene algunas clases y 
    estilos predefinidos para ayudarte a completar la actividad.

  - También te dejamos algunos mensajes que te pueden ser de utilidad:
  
   Mensaje de error => <small>Alguno de los datos ingresados son incorrectos</small>

   Mensaje de bienvenida => "<h1> Bienvenido al sitio 😀 </h1>";

   ¡Manos a la obra!
 */

