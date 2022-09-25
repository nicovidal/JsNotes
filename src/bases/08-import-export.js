//aqui se importa y es necesario expotrar de donde este el archivo
/* import {heroes} from './data/heroes'; */
//imp para importar la linea
//import {  heroes  } from './data/heroes';
//escribir el arreglo
import  heroes,{owners}  from './data/heroes';

console.log(owners)
/* const getHeroeById=(id)=>{
    return heroes.find((heroe)=>{
        if(heroe.id ===id){
            return true;
        }else{
            return false
        }
    });
} */

/* const getHeroeById=(id)=>{
    return heroes.find((heroe)=>heroe.id===id);
} */

const getHeroeById=(id)=>heroes.find((heroe)=>heroe.id===id);

console.log(getHeroeById(2));
//usar el filter ya que find solo trae 1
//que busque un hoere que tenga esa condicion
const getHeroesByOwner=(owner)=>heroes.filter((heroe)=>heroe.owner===owner);

console.log(getHeroesByOwner('DC'))