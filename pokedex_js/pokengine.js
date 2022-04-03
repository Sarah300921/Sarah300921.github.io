//DOM objects
const nombrePoke=document.querySelector('#p_nombre');
const pokeImg=document.querySelector('#p_imagen');
const pantallaDatos=document.querySelector('.pantalla_datos');
const pantallaDatos2=document.getElementById("pantalla_datos2");
//const pokeId=document.querySelector('#p_id');
//const pokeTipo=document.querySelector('#p_tipo');



// constants and variables
const TYPES = [
    'normal', 'fighting', 'flying',
    'poison', 'ground', 'rock',
    'bug', 'ghost', 'steel',
    'fire', 'water', 'grass',
    'electric', 'psychic', 'ice',
    'dragon', 'dark', 'fairy'
  ];

/*const resetScreen = () => {
    mainScreen.classList.remove('hide');
    for (const type of TYPES) {
      mainScreen.classList.remove(type);
    }
};*/



const pokeFetch = () => {
    //const nombrePoke=document.querySelector('#p_nombre');       
    let entrada=nombrePoke.value.toLowerCase();      
     const url = `https://pokeapi.co/api/v2/pokemon/${entrada}`;
        fetch(url).then((respuesta) => {
        if(respuesta.status!="200" || nombrePoke.value==""){
            alert("Ingrese un nombre/ID valido");            
            pokeImagen("PB.jpg");  
            pantallaDatosReset();              
            }
        else{   
            return respuesta.json();      
        }
            }).then((datos) => {
        console.log(datos);
        let imagenPoke= datos.sprites.other.home.front_default;
        console.log(imagenPoke);        
        pokeImagen(imagenPoke);        
        let nombreP=datos.name;
        dpNombre(datos);
        let pokeId=datos.id;
        dpID(datos);
        let tipoP=datos.types[0].type.name;
        dpTipo(datos);
        let pesoP=datos.weight;
        dpPeso(datos);
        let alturaP=datos.height;
        dpAltura(datos);
        let habil=datos.abilities[0].ability.name;
        //let habil2=datos.abilities[1].ability.name;
        //let habil3=datos.abilities[2].ability.name;
        dpHabilidad(datos);
       });
}


const pantallaDatosReset=()=>{
    nombreP.textContent="Pokemon no encontrado";
    pokeId.textContent="";
    tipoP.textContent="";
    pesoP.textContent="";
    alturaP.textContent="";
    habil.textContent="";
    
    //pantallaDatos2.classList.add('hide');
    //for (const type of TYPES) {
    //    pantallaDatos.classList.remove(type);
           
    //}
};


const pokeImagen=(url)=>{
    //pokeImg=document.querySelector('#p_imagen');
    pokeImg.src=url;
    }

const dpNombre = (datos) =>{
    nombreP.textContent=datos.name.toUpperCase();
}

const dpID = (datos) =>{
    pokeId.textContent=datos.id;
    console.log(pokeId);
    }

const dpTipo = (datos) =>{
    tipoP.textContent=datos.types[0].type.name;
    
    console.log(tipoP);
    }

const dpPeso = (datos) =>{
    pesoP.textContent=datos.weight;
     }

const dpAltura = (datos) =>{
     alturaP.textContent=datos.height;
     }

const dpHabilidad = (datos) =>{
    habil.textContent=datos.abilities[0].ability.name;    
    }

/*const dpDesc = (datos) =>{
    //const url = `https://pokeapi.co/api/v2/characteristic/${entrada}`;
    descriP.textContent=datos.description;
    console.log(descriP);
}*/



        
