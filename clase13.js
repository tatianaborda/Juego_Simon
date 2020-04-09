var tatiana = {
  nombre : 'Tatiana',
  apellido : 'Borda',
  edad: 28 ,
  peso: 55
}
console.log(`Al principio del año ${tatiana.nombre} pesaba ${tatiana.peso} kgs`)



const INCREMENTO_PESO = 0.2
const aumentaDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazaDePeso = persona => persona.peso -= INCREMENTO_PESO
const DIAS_DEL_AÑO = 365
for(var i= 1 ; i <= DIAS_DEL_AÑO ; i++){
var random = Math.random()
if(random < 0.25){
  aumentaDePeso(tatiana)
}
else if(random < 0.5){
  adelgazaDePeso(tatiana)
}
}
console.log(`Al final del año ${tatiana.nombre} pesa ${tatiana.peso.toFixed(1)} kgs`)
