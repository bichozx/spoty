let uri = "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/top-tracks?market=US" ;
let token = "Bearer BQBSzYQVwXwuXjPsue-DSfhWZRU4toh4THcruBcah-7QF33dYhXbAcYtOk2dpoqsVwkgpUW3OnvI9Ey52RIyC859jNjDuepkj2z7DocLTSg3xtq6VeIW0usrSn38BY1P7aDlu9gYKSLnT7hxx2vCCmyf5JN72vQ";

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
})
.catch(function(error){
 console.log(error)
})
