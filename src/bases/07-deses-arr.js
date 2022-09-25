const personajes=['Goku','Vegeta','Trunks'];


//definir una una consante [] = al arreglo
//la coma es para decir que ingnores el primero
const [ ,,p1 ]=personajes;


console.log(p1)


const retornaArreglo=()=>{
    return['ABC',1234];
}

const  [letras,numeros]=retornaArreglo();

console.log(letras,numeros);


//tarea

const userState=(valor)=>{
    return[valor,()=>{console.log('hola mundo')}];
}

const [nombre,setNombre]=userState('GOku');

console.log(nombre);
setNombre();