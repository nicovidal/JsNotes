//importante exportar el archivo para usarlo en otro lado
// por default se puede scar el tipo del arreglo que no sea const
// y se puede expotar sin necesidad del nombre
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

 export const owners=['DC','MARVEL']


/*  const owners=['DC','MARVEL'] */

//buena practica es expotarlo aca abajo

export default heroes; 

/* export{
    heroes as default,
    owners
} */