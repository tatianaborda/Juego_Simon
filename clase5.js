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

function imprimirNombreEnMayusculas({nombre}){
  console.log(nombre.toUpperCase())
}
imprimirNombreEnMayusculas(tatiana)
imprimirNombreEnMayusculas(david)
imprimirNombreEnMayusculas({nombre: 'Salvatore'})
