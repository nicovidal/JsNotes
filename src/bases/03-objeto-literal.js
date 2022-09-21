
const persona={

    nombre:'Nico',
    apellido:'Stark',
    edad:45,
    direccion:{
        ciudad:'New York',
        zip:3231231,
        lat:14.1231,
        lng:123122.22,
    }

};

console.log(persona);

//crear otro objeto
/* const persona2=persona; */
//se copia la referencia d
/* persona2.nombre='Peter'; */
/* console.log(persona2) */

/* para crear un clon */
const persona2={...persona};
persona2.nombre='Pter'

console.log(persona2);