var tatiana = {
  nombre : 'Tatiana',
  apellido : 'Borda',
  edad: 13 ,
  administradora : true ,
  cocinera : false ,
  cantante: false ,
  programadora : true ,
  guitarrista : false
  }
  var david= {
    nombre: 'David' ,
    apellido: 'Espinoza',
    edad: 31
  }

  const MAYORIA_DE_EDAD = 18

  //var esMayorDeEdad = function(persona){
    //return persona.edad >= MAYORIA_DE_EDAD
//  }
const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD


  function imprimirMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
      console.log(`${persona.nombre} es mayor de edad`)
    }
    else{
      console.log(`${persona.nombre} es menor de edad`)
    }
  }
  imprimirMayorDeEdad(tatiana)
  imprimirMayorDeEdad(david)

  function permitirAcceso(persona){
    if(!esMayorDeEdad(persona)){
      console.log('ACCESO DENEGADO')
    }
  }
