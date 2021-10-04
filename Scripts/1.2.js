let nombre = "";
let foix = "";
let cofm = true;
let prom = "";
let table = [];
let min ;
let max ;
 
while ( cofm == true){
  prom = parseFloat(prompt("Donner un nombre nombre"));
  nombre = parseInt(nombre+prom);
  foix ++;
  cofm =  confirm("Voulez vous continuer");
  table.push(prom)
  
}
min = table[0];
max = table[0];
console.log(table)
for(var i=0;i <=table.length;i++ ){
  if(table[i]< min){
    min = table[i];
  } else if (table[i]>max){
    max = table[i]
  }
}
console.log("Max:" + max)
console.log("Min:" + min)
console.log("La somme:" + nombre)
console.log("Nombre entier:" + foix)
console.log("moyenne:" + (nombre/foix))
