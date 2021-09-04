let uri = "https://api.spotify.com/v1/artists/4vhNDa5ycK0ST968ek7kRr/top-tracks?market=US" ;
let token = "Bearer BQDPPzzv1R3fJURwOmiZu9I-UxLEHVhp1H5I96U_oFTE9FVrTUKr9WNq6BR9FI49MFOlpt9B3kjD2fPo2KtlJUP69BzKJqpNraeN2rokBs40Ml8fzHYOBc8fdSA8AB_6crh_cGRzQkZpGV0QVTDYQlxoH46cFz8";

let parametrosPeticion = {

    method : "GET",
    headers : {
        Authorization: token
    
    }
}

fetch(uri,parametrosPeticion)
.then(function(respuesta) {
    return(respuesta.json())

})
.then(function(respuesta){
    console.log(respuesta)
    pintarDatos(respuesta.tracks)
    /*console.log(respuesta.tracks)
    console.log(respuesta.tracks[0])
    console.log(respuesta.tracks[0].name)
    console.log(respuesta.tracks[0].preview_url)
    console.log(respuesta.tracks[0].album.images[0].url)*/

})
.catch(function(error){
 console.log(error)
})


function pintarDatos(datos){
    let fila = document.getElementById("fila")
    datos.forEach(function(cancion){

        let columna = document.createElement("div")
        columna.classList.add("col")

        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")

        let imagen = document.createElement("img")
        imagen.classList.add("card-img-top")
        imagen.src=cancion.album.images[0].url
        

        let titulo = document.createElement("h1")
        titulo.textContent=cancion.name

        //padre e hijos
        
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(titulo)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

    
});

        
        

}

