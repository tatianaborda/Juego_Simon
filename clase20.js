var tatiana = {
  nombre : 'Tatiana' ,
  apellido : 'Borda' ,
  altura : 1.70 ,
  cantidaddelibros: 200
}

var david = {
  nombre : 'David' ,
  apellido : 'Espinoza' ,
  altura : 1.78 ,
  cantidaddelibros: 150
}

var marcelo = {
  nombre : 'Marcelo' ,
  apellido : 'Borda' ,
  altura : 1.76 ,
  cantidaddelibros: 117
}

var christian = {
  nombre : 'Christian' ,
  apellido : 'Borda' ,
  altura : 1.82 ,
  cantidaddelibros: 91
}

var mary = {
  nombre : 'Mary' ,
  apellido : 'Laciar' ,
  altura : 1.65 ,
  cantidaddelibros: 127
}
var personas = [tatiana, david, marcelo, christian, mary]

//var acum = 0
//for(var i =0; i < personas.length; i++){
  //acum = acum + personas[i].cantidaddelibros
//}
const reducer = (acum, {cantidaddelibros}) => acum + cantidaddelibros
var totalDeLibros = personas.reduce(reducer, 0)
console.log(`En total todes tiene ${totalDeLibros} libros`)
