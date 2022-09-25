const apiKey='SYKq4Etj4sLkKXTPHaS80JvuV1pS66uF';

const peticion=fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    //crear otra respuesta que retorne lo que trae la api
    //las promepsas pueden encadenarse
/* peticion.then(resp=>{

    resp.json().then(data=>{
        console.log(data)
    })
})
 */

//promesa en cadenas
peticion
    .then(resp=>resp.json())
    .then(({data})=>{
        const {url}=data.images.original;
        
        const img=document.createElement('img');
        img.src=url;
        document.body.append(img);
    })
    .catch(console.warn);