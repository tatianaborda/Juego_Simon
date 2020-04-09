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

for(var i = 0; i < personas.length; i++){
  var persona = personas[i]
  console.log(`${persona.nombre} mide ${persona.altura} mts.`)
}
