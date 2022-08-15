var clientes = [];
var localStorage = window.localStorage;

var modalNuevaClient = new bootstrap.Modal(document.getElementById('modalNuevaClient'), 
    {
    keyboard: false
    });


console.log('CLIENTES: ', localStorage.getItem('clientes'));
if (localStorage.getItem('clientes') == null ) {
    localStorage.setItem('clientes', JSON.stringify(clientes));
}   else {
    clientes = JSON.parse(localStorage.getItem('clientes'));
}

for (let i=1; i<=6; i++){
    document.getElementById('list-img-client').innerHTML += 
    `<option value="img/profile-pics/${i}.jpg">Imagen ${i}</option>`;
}

function generarClientes() {
    document.getElementById('clientes').innerHTML = '';
    clientes.forEach(function(client, i){
        document.getElementById('clientes').innerHTML += 
        `<div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" style="padding:5px;">
        <div class="card" style="border-radius:20px ; background-color: #b82727; color:white;" >
        <img src="${client.urlImage}" style="border-radius:10px ; hover" class="card-img-top app-img" >
            <div class="card-body">
            <h3 class="card-title" style="margin-bottom: 0; margin-top:0;" >${client.nombreClientes}</h3>
            <p class="card-text" style="margin-bottom: 0; margin-top:0; ">${client.opcionClientes}</p>
            <p class="card-text"><small class="text-muted">Se unio hace ${client.tiempoClientes}</small></p> 
            <div> 
                    <button class="btn btn-outline-warning btn-sm" style="float:right" onclick="eliminar(${i})"><i class="fas fa-trash-alt"></i></button>
                </div>
        </div>
        </div>   
        </div>`;
    });
}

generarClientes();


function guardar() {
    const client = {
        nombreClientes: document.getElementById('nombre-client').value,
        urlImage: document.getElementById('list-img-client').value,
        opcionClientes: document.getElementById('opciones-client').value,
        tiempoClientes: document.getElementById('tiempo-client').value,
    };

    console.log(client);
    clientes.push(client);
    localStorage.setItem('clientes', JSON.stringify(clientes));
    console.log(clientes);
    generarClientes();
}

function eliminar(indice) {
    console.log('Eliminar empresa con el indice', indice);
    clientes.splice(indice, 1);
    generarClientes();
    localStorage.setItem('clientes', JSON.stringify(clientes));
}
