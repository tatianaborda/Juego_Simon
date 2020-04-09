var tatiana = {
  nombre : 'Tatiana',
  apellido : 'Borda',
  edad: 28 ,
  peso: 55
}
console.log(`Al principio del año ${tatiana.nombre} pesaba ${tatiana.peso} kgs`)

const DIAS_DEL_AÑO = 365
const INCREMENTO_PESO = 0.3

const aumentaDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazaDePeso = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const haceEjercicio = () => Math.random() < 0.4

const META = tatiana.peso - 3
var dias = 0


while(tatiana.peso > META){
  if(comeMucho()){
    aumentaDePeso(tatiana)
  }
  else if(haceEjercicio()){
    adelgazaDePeso(tatiana)
  }
  dias += 1
}
console.log(`Pasaron ${dias} dias hasta qu ${tatiana.nombre} adelgazó los 3 kgs`)
