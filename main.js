
let misTurnos = JSON.parse(localStorage.getItem("misTurnos")) || [];
let turnos;
obtenerTurnos();

$(() => {
	obtenerTurnos();
    imprimirMisTurnos(misTurnos);
	if (misTurnos.length) imprimirTurnos();
});




function obtenerTurnos() {
    
    $.get("./turnos.json", function (respuesta, estado) {
        if (estado != "success") return Swal.fire("Error obteniendo datos");
        turnos = respuesta.turnos;
        imprimirTurnos(turnos); 
    });
    
};   

function toggleBoton(boolean) {
    $('.testeo').prop('disabled', boolean);
}



function imprimirTurnos() {
    $("#test").empty();
        turnos.forEach(t => {
            let turnoAgendado = misTurnos.some(tA => tA.id === t.id);
            $("#test").append(
                `
                    <div class="btnturno">
                        <button class="testeo btnclasic" id="${t.id}" ${turnoAgendado ? "disabled": null} 
                        onclick="agregarMisTurnos(event)"> ${t.hora}hs </button>    
                    </div> 
                `
            );
        });
}

function agregarMisTurnos(e) {
    let id = Number(e.target.id);
    let turnoElegido = turnos.find(t=> t.id === id);
    
    misTurnos.push(turnoElegido);
    localStorage.setItem("misTurnos",JSON.stringify(misTurnos));

    imprimirMisTurnos(misTurnos);
    toggleBoton(true);
}

function cancelarMisTurnos(e) {
    toggleBoton(false);

    let id = Number(e.target.id);
    let index = misTurnos.findIndex(t=> t.id == id);
    

    misTurnos.splice(index,1);
    imprimirMisTurnos(misTurnos);
    localStorage.setItem("misTurnos",JSON.stringify(misTurnos));


}

function imprimirMisTurnos(array) {
    $("#turnoAdquirido").empty();
    array.forEach(t =>{
        $("#turnoAdquirido").append(
            `
            <p>Su turno es a las ${t.hora} hs</p>
            <button id="${t.id}" class="btnclasic" onclick="cancelarMisTurnos(event)">Cancelar Turno</button>
            `
        )
    });
}

function mostrarDiv(){
document.getElementById("modal").style.display="block";
}

function ocultarDiv(){
    document.getElementById("modal").style.display="none";
}

function salir(){
    $(location).attr("href", "login.html")
}