var tatiana = {
  nombre : 'Tatiana' ,
  apellido : 'Borda' ,
  altura : 1.70
}

var david = {
  nombre : 'David' ,
  apellido : 'Espinoza' ,
  altura : 1.78
}

var marcelo = {
  nombre : 'Marcelo' ,
  apellido : 'Borda' ,
  altura : 1.76
}

var christian = {
  nombre : 'Christian' ,
  apellido : 'Borda' ,
  altura : 1.82
}

var mary = {
  nombre : 'Mary' ,
  apellido : 'Laciar' ,
  altura : 1.65
}
var personas = [tatiana, david, marcelo, christian, mary]
const esAlta = ({altura}) => altura > 1.8
const esBaja = ({altura}) => altura < 1.7
//var personasAltas = personas.filter(function(personas){
  //return personas.altura > 1.8
//})

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

console.log(personasAltas)
console.log(personasBajas)
