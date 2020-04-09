function Persona(nombre, apellido, altura){
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function(){
  console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

var tatiana = new Persona('Tatiana','Borda', 1.70)
tatiana.saludar()
var david = new Persona('David', 'Espinoza',1.78)
var arturo = new Persona('Arturo','Martinez', 1.66)




Persona.prototype.decirAltura = function() {
if(this.altura>= 1.70){
  console.log (`Hola me llamo ${this.nombre} ${this.apellido} y soy altx porque mido ${this.altura} mts.`)
}else{
  console.log (`Hola me llamo ${this.nombre} ${this.apellido} y no soy altx porque mido ${this.altura} mts.`)
}
}
