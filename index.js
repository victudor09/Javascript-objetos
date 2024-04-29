//1
const Coche = {
    marca: 'ford',
    modelo: '2024',
    matricula: '1010abc',
}

//2
const Casa = {
    codPostal: '48940',
    calle: 'calle unamuno',
    portal: '1',
    piso:'2',
}

//3
const FullStackDeveloper = {
    lenguajes: ['español', 'ingles'],
    proyectos: ['coches', 'motos'],
}

//4
const Perro = {
    nombre: 'Firulais',
    raza: 'labrador',
    color: 'negro',
    edad: '5 años',
    ladrar: function() {
        return console.log('guau')
    },
    popo: function() {
        return Math.random()*3
    },
}

//LECTURA DE PROPIEDADES

//5
const marcaPortatil = Portatil.marca;


//6
const marcaPortatil2 = Portatil['marca'];

/*
//7
const Concierto = {
    arraygrupos: [],
}

let vblegrupos = Concierto.arraygrupos 
*/
//7

const grupos = Concierto.grupos;

//8
const RGB = [Led.rojo, Led.verde, Led.azul]


//MODIFICACIÓN DE PROPIEDADES

//9

Portatil.modelo = 'P345';

//10
Concierto.cartelera.push("Guns N' Roses");

//11
Concierto.fecha = new Date();

//12
const objeto = {
    nombreArchivo: '', 
    copias:'',
    numPaginas: 2,
}

Impresora.imprimiendo = objeto


//DECLARACIONES

//13 
const Noticia = {
    titular: '',
    cuerpo: '',
}

//14
const Persona = {
    nombre: '',
    apellidos: '',
    edad:'',
}

//15
const Avion = {
    numPasajeros:'',
    despegar: function() {
        return console.log('despegando')
    },
    volar: function() {
        return console.log('llegando al destino')
    },
    aterrizar: function() {
        return console.log('aterrizando')
    },

}

//16
const Paquete = {
    contenido: [],
}

//17
const Pais = {
    numHabitantes: '',
    continente: '',
    gentilicio: '',
}

//LECTURA DE PROPIEDADES
//18
const codError = O_Error.codigo

//19
const integrantes = Grupo.integrantes

//20

const nivelesTinta = Impresora.tinta

//21

const pixeles = Pantalla.pixeles;

//22
const especificaciones = Movil["especificaciones"]

//MODIFICACIONES DE PROPIEDADES
//23
Grupo.numIntegrantes = 5

//24
Pantalla.dimensiones = '1920x1080';

//25
Led.encendido = !true

//26
Movil.temperatura = '20º'