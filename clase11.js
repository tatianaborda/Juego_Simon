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
  var david= {
    nombre: 'David' ,
    apellido: 'Espinoza',
    edad: 13
  }

  const MAYORIA_DE_EDAD = 18

  function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD
  }


  function imprimirMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
      console.log(`${persona.nombre} es mayor de edad`)
    }
    else{
      console.log(`${persona.nombre} es menor de edad`)
    }
  }
