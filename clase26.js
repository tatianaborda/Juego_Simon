class Persona {
  constructor(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }
  saludar(fn){
    var { nombre, apellido } = this
    console.log(`Hola me llamo ${nombre} ${apellido}`)
    if(fn){
      fn(nombre, apellido, null)
    }
  }
  serAlto(){
    return this.altura > 1.7
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura){
    super(nombre, apellido, altura)
  }
  saludar(fn){
    var { nombre, apellido } = this
    console.log(`Hola me llamo ${nombre} ${apellido} y soy desarrollador/a`)
    if(fn){
      fn(nombre, apellido, true)
    }
  }
}
function responderSaludo(nombre, apellido, esDev){
  console.log(`Buen día ${nombre} ${apellido}`)
  if(esDev){
    console.log('Ah mirá, no sabía que eras dev')
  }
}


var tatiana = new Desarrollador('Tatiana','Borda', 1.70)
var david = new Persona('David', 'Espinoza',1.78)
var arturo = new Persona('Arturo','Martinez', 1.89)


david.saludar(responderSaludo)
arturo.saludar()
tatiana.saludar(responderSaludo)
