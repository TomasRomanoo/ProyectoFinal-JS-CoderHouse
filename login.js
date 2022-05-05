function validarDatos(inputDni,inputPassword){
	
	const resultado = usuarios.find(usr => usr.dni === inputDni);
		
	if (resultado && resultado.password === inputPassword){
		check();

	} else{
		alert("Usuario y/o contraseña incorrecto")
	}

}

function check(){
	$("#boton3").fadeOut(200);
	$("#boton4").fadeOut(200);
	
	setTimeout(() => {
		$(location).attr("href", "main.html");
	}, 500);
}

$("#boton3").click( function(){
    $(location).attr("href", "index.html")
})

document.querySelector("#boton4").addEventListener("click", iniciarSesion);


function iniciarSesion(){
	let iAcceso = false
	let inputDni = document.querySelector("#dni2").value;
	let inputPassword = document.querySelector("#password2").value;
	iAcceso = validarDatos(inputDni, inputPassword);
}