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
//const pasarAlturaACtms = personas => {
//  return {
//    ...personas,
//    altura : personas.altura *100}}
const pasarAlturaACtms = personas => ({
    ...personas,
    altura : personas.altura *100
})




var personasCmts = personas.map(pasarAlturaACtms)

console.log(personasCmts);
