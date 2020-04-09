class Persona {
  constructor(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }
  saludar(){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
  }
  serAlto(){
    return this.altura > 1.7
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura){
    super(nombre, apellido, altura)
  }
  saludar(){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
  }
}



var tatiana = new Desarrollador('Tatiana','Borda', 1.70)
//var tatiana = new Persona('Tatiana','Borda', 1.70)
var david = new Persona('David', 'Espinoza',1.78)
//var arturo = new Persona('Arturo','Martinez', 1.89)
