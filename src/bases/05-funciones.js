//funciones
// no es recomendable
/* function saludar(nombre){
    return `hola,${nombre}`;

}
saludar=30
 console.log(saludar('Goku')) 

console.log(saludar) */

const saludar=function(nombre){
    return `hola,${nombre}`;
}

console.log(saludar)

const saludar2=(nombre)=>{
    return `hola,${nombre}`;
}

console.log(saludar2('Vegata'))


const saludar3=(nombre)=>`Hola,${nombre}`;


console.log(saludar3('goku'))

const saludar4 = () => `WEna WEna`;

console.log(saludar4())


const getUser=()=>{
    return{
        uid:'123456',
        username:'El xd'
    }
}

console.log(getUser())

const getUser2=()=>({
    
        uid:'123456',
        username:'El xd'
    
});

console.log(getUser2())

const user=getUser();
console.log(user);

function getUsuarioActivo(nombre){
    return{
        uid:'ABC12345',
        username:nombre
    }
};

const usuarioActivo=getUsuarioActivo('fernando');
console.log(usuarioActivo);


//return objeto implicito

const getUsuarioActivo2=(nombre)=>({
    
        uid:'ABC12345',
        username:nombre
    
});

const usuarioActivo2=getUsuarioActivo2('prueba2');
console.log(usuarioActivo2)
