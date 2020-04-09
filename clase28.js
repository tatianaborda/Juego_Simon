const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL ='people/:id'

const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const OPTIONS = {crossDomain : true}

const ON_PEOPLE_RESPONSE = function(persona){
  console.log(`Hola soy ${persona.name}`)
}
$.get(LUKE_URL , OPTIONS, ON_PEOPLE_RESPONSE)
