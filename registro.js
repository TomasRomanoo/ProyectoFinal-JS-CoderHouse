class Usuario {
	constructor(nombre,dni, password, email) {
		this.nombre = nombre;
		this.dni = dni;
		this.password = password;
		this.email = email;
	}
}
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

function hacerRegistro(event) {

	event.preventDefault();

	const nombre = document.getElementById("nombre").value;
	const dni = document.getElementById("dni").value;
	const password = document.getElementById("password").value;
	const email = document.getElementById("email").value;
	
	const nuevoUsuario = new Usuario(nombre, dni, password, email);
	
	console.log(nuevoUsuario);

	usuarios.push(nuevoUsuario);
	localStorage.setItem("usuarios", JSON.stringify(usuarios));
}
	

$("#boton").click(function () {
	$("#rOk").fadeIn(500);
	
	$("#boton").fadeOut(100);
	$("#boton2").fadeOut(100);
	

	setTimeout(() => {
		$(location).attr("href", "login.html");
	}, 1000);
});

$("#boton2").click( function(){
    $(location).attr("href", "login.html")
})




	






