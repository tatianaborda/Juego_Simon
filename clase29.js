const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL ='people/:id'

const OPTIONS = {crossDomain : true}

const ON_PEOPLE_RESPONSE = function(persona){
  console.log(`Hola soy ${persona.name}`)
}

function obtenerPersonaje(id){
  const URL =`${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $.get(URL , OPTIONS, ON_PEOPLE_RESPONSE)
}


obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)
