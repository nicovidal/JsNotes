import {getHeroeById} from './bases/08-import-export'



//recive 3 agumentos uno es resolver y el otro reject , es una convension que se llamen asi
//resolve se ejecuta cuando es exitosa y reject cuando no se pueda cumplir
//y se le notifica a la persona cuando no pudo funcionar
const promesa= new Promise((resolve,reject)=>{
    //permite ejecutar una tarea en cierto tiempo y recibir un callback
    setTimeout(() => {
        
        const heroe=getHeroeById(2);
        console.log(heroe)
        //lo que sea de los parentecis lo amnda
        resolve(heroe);
        //console.log('2 segundos despues')
        //aqui va el tiempo que se esperara
    }, 2000);

});


//hacer algo cuando la promesa se cumpla
//then significa que se hizo correctamente
//catch que ocurrio un erro
//finally es lo ultimo que se ejcuta
promesa.then((heroe)=>{
    console.log('heroe',heroe)
})

.catch(err=>console.warn(err));

//recibir la id ya que asi lo busco
const getHeroeByIdAsync=(id)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            
            const p1=getHeroeById(id);
            if(p1){
                resolve(p1);
            }else{
                reject('No se pudo encontrar')
            }           
        }, 2000);
    
    });
    //return promesa;
}


getHeroeByIdAsync(4)
    .then(console.log)
    //.then(heroe=>console.log('Heroe',heroe))
    //.catch(err=>console.warn(err))
    .catch(console.warn)