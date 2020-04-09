var tatiana = {
  nombre : 'Tatiana',
  apellido : 'Borda',
  edad: 18 ,
  administradora : true ,
  cocinera : false ,
  cantante: false ,
  programadora : true ,
  guitarrista : false
  }
 function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es : `)
    if(persona.administradora===true){
      console.log('Administradora')
  }
  if(persona.cocinera===true){
    console.log('Cocinera')
  }
  if(persona.cantante===true){
    console.log('Cantante')
  }
  if(persona.programadora===true){
    console.log('Programadora')
  }
  if(persona.guitarrista===true){
    console.log('Guitarrista')
  }
 }
 imprimirProfesiones(tatiana)

function imprimirMayorDeEdad(persona){
  console.log(`${persona.nombre} es : `)
  if(persona.edad >= 18){
    console.log('mayor de edad')
  }
  else{
    console.log('menor de edad')
  }
}
imprimirMayorDeEdad(tatiana)
