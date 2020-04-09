const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL ='people/:id'
const OPTIONS = {crossDomain : true}

function obtenerPersonaje(id, callback){
  const URL =`${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $.get(URL , OPTIONS, function(persona){
    console.log(`Hola soy ${persona.name}`)
    if (callback){
      callback()
    }
  })
}


obtenerPersonaje(1, function () {
  obtenerPersonaje(2, function () {
    obtenerPersonaje(3, function () {
      obtenerPersonaje(4)
    })
  })
})
