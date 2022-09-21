//desestructuracion
//asignacion desestructurante.

const persona={
    nombre:'Tony',
    edad:45,
    clave:'IronMan',
    rango:'soldado',
};

/* const { nombre,edad,clave }=persona;

console.log(nombre);
console.log(edad)
console.log(clave);  */


/*  const retornaPersona=({clave,nombre,edad,rango='cap'})=>{ */

/*    console.log(nombre,edad,rango) 

     return {
        nombreClave:clave,
        anios:edad,
    } 

 }  */

/*  retornaPersona(persona);  */



const userContext=({clave,nombre,edad,rango='cap'})=>{ 

   /* console.log(nombre,edad,rango)  */

    return {
        nombreClave:clave,
        anios:edad,
        latlng:{
            lat:12.31231,
            lng:-1212.1212
        }
        
    } 

 } 

//userContext desestructoriazo
//latlng se usa : y {} para sacar el argumento exacto y seran constantes
         //datos que se extraen//objeto de donde se extrae
const {nombreClave,anios,latlng:{lat,lng}}=userContext(persona);

console.log(nombreClave,anios)
console.log(lat,lng)

