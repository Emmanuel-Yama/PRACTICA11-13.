  
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


let matriz = [];
for (let i = 0; i < 5; i++) {
  let fila = [];
  for (let j = 0; j < 10; j++) {
    fila.push(getRandomInt(1, 100));
  }
  matriz.push(fila);
}


let A = [];
let B = [];
let C = new Array(10).fill(0); 
let D = new Array(10).fill(0);  


for (let i = 0; i < 5; i++) {
  let filaSuma = 0;
  for (let j = 0; j < 10; j++) {
    filaSuma += matriz[i][j];
    C[j] += matriz[i][j];
  }
  A.push(filaSuma);
  B.push(filaSuma / 10); 
}

for (let j = 0; j < 10; j++) {
  D[j] = C[j] / 5; 
}


console.log("Matriz:");

for (let i = 0; i < 5; i++) {
  console.log(matriz[i].join(" "));
}

console.log("\nResultados:");

for (let i = 0; i < 5; i++) {
  console.log(`Fila ${i + 1}: Suma = ${A[i]}, Promedio = ${B[i]}`);
}

for (let j = 0; j < 10; j++) {
  console.log(`Columna ${j + 1}: Suma = ${C[j]}, Promedio = ${D[j]}`);
}

  