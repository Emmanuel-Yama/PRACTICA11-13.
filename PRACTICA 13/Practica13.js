const calificaciones = [
    [5.5,8.6,10],
    [8.0,5.5,10],
    [9.0,4.1,7.8],
    [10,2.2,8.1],
    [7.0,9.2,7.1],
    [9.0,4.0,6.0],
    [6.5,5.0,5.0],
    [4.0,7.0,4.0],
    [8.0,8.0,9.0],
    [10,9.0,9.2],
    [5.0,10,8.4],
    [9.0,4.6,7.5]
  
  ];
  

  function calcularPromedio(calificacionesAlumno) {
    const suma = calificacionesAlumno.reduce((total, calificacion) => total + calificacion, 0);
    return suma / calificacionesAlumno.length;
  }

  function calcularPromedioMasAlto(calificaciones) {
    let promedioMasAlto = 0;
    for (const calificacionesAlumno of calificaciones) {
      const promedio = calcularPromedio(calificacionesAlumno);
      if (promedio > promedioMasAlto) {
        promedioMasAlto = promedio;
      }
    }
    return promedioMasAlto;
  }
  
  
  function calcularPromedioMasBajo(calificaciones) {
    let promedioMasBajo = 10; // Inicializar con un valor alto
    for (const calificacionesAlumno of calificaciones) {
      const promedio = calcularPromedio(calificacionesAlumno);
      if (promedio < promedioMasBajo) {
        promedioMasBajo = promedio;
      }
    }
    return promedioMasBajo;
  }
  

  function contarParcialesReprobados(calificaciones) {
    let contador = 0;
    for (const calificacionesAlumno of calificaciones) {
      for (const calificacion of calificacionesAlumno) {
        if (calificacion < 7.0) {
          contador++;
        }
      }
    }
    return contador;
  }
  
 
  function generarDistribucion(calificaciones) {
    const distribucion = {
      '0-4.9': 0,
      '5.0-5.9': 0,
      '6.0-6.9': 0,
      '7.0-7.9': 0,
      '8.0-8.9': 0,
      '9.0-10': 0,
    };
  
    for (const calificacionesAlumno of calificaciones) {
      const promedio = calcularPromedio(calificacionesAlumno);
  
      if (promedio >= 0 && promedio < 5.0) {
        distribucion['0-4.9']++;
      } else if (promedio >= 5.0 && promedio < 6.0) {
        distribucion['5.0-5.9']++;
      } else if (promedio >= 6.0 && promedio < 7.0) {
        distribucion['6.0-6.9']++;
      } else if (promedio >= 7.0 && promedio < 8.0) {
        distribucion['7.0-7.9']++;
      } else if (promedio >= 8.0 && promedio < 9.0) {
        distribucion['8.0-8.9']++;
      } else if (promedio >= 9.0 && promedio <= 10.0) {
        distribucion['9.0-10']++;
      }
    }
  
    return distribucion;
  }
  
  
  const promediosAlumnos = calificaciones.map(calcularPromedio);
  

  const promedioMasAlto = calcularPromedioMasAlto(calificaciones);
  

  const promedioMasBajo = calcularPromedioMasBajo(calificaciones);
  
 
  const parcialesReprobados = contarParcialesReprobados(calificaciones);
  

  const distribucionCalificaciones = generarDistribucion(calificaciones);
 
  console.log('Promedio de cada alumno:', promediosAlumnos);
  console.log('Promedio más alto:', promedioMasAlto);
  console.log('Promedio más bajo:', promedioMasBajo);
  console.log('Parciales reprobados:', parcialesReprobados);
  console.log('Distribución de calificaciones finales:', distribucionCalificaciones);
  