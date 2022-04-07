//= Libros: declaración de objetos y array 

class Libros{
    constructor(nombre, autor, nroDePaginas, valor){
        this.nombre = nombre;
        this.autor = autor;
        this.nroDePaginas = nroDePaginas;
        this.valor = valor;
    }
    
    calcularCuotas(cuotasProducto){
        this.valor = this.valor / cuotasProducto;
    }
}

const libro1 = new Libros ("Violeta", "Isabel Allende", 400, 3499);
const libro2 = new Libros ("La tía Cósima", "Florencia Bonelli", 576, 949);
const libro3 = new Libros ("Paseos por Londres", "Virginia Woolf", 160, 1790);


//= array:
const productosLibros = [libro1, libro2, libro3];
console.log(productosLibros);


//= calcular cuotas
let cuotasProducto = parseInt(prompt("Por favor, selecciona en cuántas cuotas quiere hacer el pago de su libro: 1 - 3 - 6"));
let seleccionCuotas = alert ("Has decidido hacer el pago en " + cuotasProducto + " cuotas")

for (const Libros of productosLibros) {
    Libros.calcularCuotas(cuotasProducto);

}



//= Interactuando con HTML:

let libros = document.getElementById("libros");
let nuevosLibros = ["La amiga estupenda de Elena Ferrante", "La bailarina de Auschwitz de Edith Eger"];


for(const Libros of nuevosLibros){
    let li = document.createElement("li");
    li.innerHTML = Libros;
    libros.append(li);
}

//= Incorporar eventos: 

let container = document.getElementById('container');
let resultado =  document.getElementById('resultado'); 

container.addEventListener('submit', validarBusqueda); 

function validarBusqueda(e){ 
    e.preventDefault(); 
    let buscadorLibro = document.getElementById('buscadorLibro').value;
    
    if(buscadorLibro.length < 4){  
        resultado.innerText = alert('El nombre de libro ingresado no es válido');
    }else{  
        resultado.innerText = alert('¡El nombre ingresado es válido!' + " El libro que deseas ver es: " + buscadorLibro);
        
    }
}



