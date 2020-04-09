var tatiana = {
nombre : 'Tatiana',
apellido : 'Borda',
edad: 28
}
var david = {
  nombre : 'David',
  apellido : 'Espinoza',
  edad: 31
}

function imprimirNombreEnMayusculas(persona){
  var { nombre } = persona
  console.log(nombre.toUpperCase())
}
imprimirNombreEnMayusculas(tatiana)
imprimirNombreEnMayusculas(david)


 function cumple(persona){
   return{
     ...persona,
     edad : persona.edad + 1
   }
 }
