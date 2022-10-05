/* const getImagenPromesa =()=>{
    const promesa=new Promise((resolve,reject)=>{
        resolve('https://akjsdakjskdja.com')
    })

    return promesa;
}
 */

/* getImagenPromesa().then(console.log) */

//async es para simplificar una funcion a que retone en una promesa
//para trabajar con un await debe ser trabajado dentro de una funcion async
const getImagen=async()=>{
    

    try {
        const apiKey='SYKq4Etj4sLkKXTPHaS80JvuV1pS66uF';
        const resp=await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    
        const {data}=await resp.json();
    
        const {url}=data.images.original;
    
        return url;
    } catch (error) {

        console.error(error)
        return 'No se encontro la imagen';
        
    }


}

getImagen();








