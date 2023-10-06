// Declara e inicializa un arreglo con la información de ventas por mes y día de la semana
const ventasPorMes = [
    [5, 16, 10, 12, 24], // Enero
    [40, 55, 10, 11, 18], // Febrero
    [15, 41, 78, 14, 51], // Marzo
    [35, 22, 81, 15, 12], // Abril
    [50, 12, 71, 10, 20], // Mayo
    [70, 40, 60, 28, 22], // Junio
    [50, 50, 50, 36, 25], // Julio
    [40, 70, 40, 11, 20], // Agosto
    [20, 20, 30, 12, 18], // Septiembre
    [10, 40, 32, 13, 16], // Octubre
    [50, 3, 24, 15, 82], // Noviembre
    [40, 46, 15, 46, 22]  // Diciembre
  ];
  
  // Función para encontrar el mínimo y máximo valor y su ubicación en la matriz
  function encontrarMinimoYMaximo(matriz) {
    let minimo = matriz[0][0];
    let maximo = matriz[0][0];
    let mesMinimo, diaMinimo, mesMaximo, diaMaximo;
  
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] < minimo) {
          minimo = matriz[i][j];
          mesMinimo = i;
          diaMinimo = j;
        }
        if (matriz[i][j] > maximo) {
          maximo = matriz[i][j];
          mesMaximo = i;
          diaMaximo = j;
        }
      }
    }
  
    return { minimo, mesMinimo, diaMinimo, maximo, mesMaximo, diaMaximo };
  }
  
  // Función para calcular la venta total
  function calcularVentaTotal(matriz) {
    let total = 0;
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        total += matriz[i][j];
      }
    }
    return total;
  }
  
  // Función para calcular la venta por día de la semana
  function calcularVentaPorDia(matriz) {
    const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    const ventaPorDia = new Array(7).fill(0);
  
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        ventaPorDia[j] += matriz[i][j];
      }
    }
  
    return ventaPorDia.map((venta, index) => `${diasSemana[index]}: $${venta}.00`);
  }
  
 
  const { minimo, mesMinimo, diaMinimo, maximo, mesMaximo, diaMaximo } = encontrarMinimoYMaximo(ventasPorMes);
  
  const ventaTotal = calcularVentaTotal(ventasPorMes);

  const ventaPorDiaSemana = calcularVentaPorDia(ventasPorMes);
  
  // Imprimir resultados
  console.log("Menor Venta:");
  console.log(`Mes: ${mesMinimo + 1}, Día: ${diaMinimo + 1}, Venta: $${minimo}.00`);
  
  console.log("\nMayor Venta:");
  console.log(`Mes: ${mesMaximo + 1}, Día: ${diaMaximo + 1}, Venta: $${maximo}.00`);
  
  console.log("\nVenta Total:");
  console.log(`Total: $${ventaTotal}.00`);
  
  console.log("\nVenta por Día de la Semana:");
  ventaPorDiaSemana.forEach((ventaDia) => {
    console.log(ventaDia);
  });
  