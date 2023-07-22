/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length -1];
 
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   /*
   for (var i =0; i <= array.length -1;i++){

       array[i] = array[i] + 1 ;

   }
   return array;*/

   var incremento = array.map(num=> num + 1);   /*El método map() también nos permite recorrer un arreglo y 
                                                  realizar una acción por cada elemento. La diferencia es que
                                                  este método devuelve un nuevo arreglo con los elementos 
                                                  modificados.*/
   return incremento ;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
  
 /* var vec=[array.length+1];
  for(var i=0;i<=array.length-1;i++){
      vec[i] = array[i];

  }
     vec[array.length] = elemento;

  return vec ; */
 
   array.push(elemento); /*El método push() añade uno o más elementos al final de un arreglo, 
                           y devuelve la nueva longitud del array. */
         
   return array ; 

}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
  
  /* var vec= [array.length+1];
   vec[0] = elemento;
   for(var i =0 ; i<=array.length-1;i++){
      
      vec[i+1] = array[i];

   }

   return vec ;   */
   
    array.unshift(elemento);  /* El método unshift() agrega uno o más elementos al inicio de un arreglo, 
                                 y devuelve la nueva longitud del array. */
    return array ;


}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var frase = palabras.join(" "); /*El método join() convierte un arreglo en un string, 
                                    uniendo todos los elementos de este en una misma cadena. */
   return frase ;

}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   /*
   for( var i = 0 ; i<= array.length-1; i++ ){
     
      if(elemento===array[i]) return true;
         
   }
    return false ; */

    return  array.includes(elemento) ; /* El método includes() determina si un arreglo incluye 
                                          o contiene un elemento específico. 
                                          Devuelve true o false en cada caso. */


}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   /*
   var suma =0;
   for(var i = 0 ; i<arrayOfNums.length;i++){
         suma+=arrayOfNums[i];
   }
   return suma ; */
   let suma = arrayOfNums.reduce((num1 , num2 ) => num1 + num2 );
   return suma ;
   /* El método reduce() puede ser utilizado para una variedad de tareas, como la sumatoria, 
      la multiplicación, y la concatenación de elementos de un arreglo.
      El método reduce nos permite, como su nombre indica,reducir el array insertado a un solo valor */

}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   /*
   let suma =0 ;
   for (let i =0; i<resultadosTest.length; i++){
      
      suma+=resultadosTest[i];
      
   }
   return suma/resultadosTest.length; */

   var promedio = 0 ;
   for( var i  of resultadosTest) {
      
      promedio = promedio  + i ;
 
   } 
   
   return  promedio/ resultadosTest.length ;
   
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   let mayor =0;
   for(let i =0 ; i <arrayOfNums.length;i++)
       
        if(arrayOfNums[i]>mayor) mayor = arrayOfNums[i];

   return mayor;   
  /* let elemento = arrayOfNums[0];
   for ( let i =0 ; i < arrayOfNums.length ; i ++ )

        if(arrayOfNums[i]> elemento ) elemento = arrayOfNums [i];
            
   return elemento;*/
        
           
    }
   


function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   let mult=1 ;
   if(arguments.length===0) return 0 ;
   else 
      for(let i = 0 ; i<arguments.length; i ++)  mult*=arguments[i] ; 

   return mult ;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let cont =0 ;
   for(let  i =0 ;i<array.length;i++ )
       
        if(array[i]>18) cont ++ ;
   
   return cont; 

   
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   /*
   switch(numeroDeDia){

      case 1 :  return "Es fin de semana"; break 
      case 2 : 
      case 3 : 
      case 4 : 
      case 5 : 
      case 6 :  return "Es dia laboral"; break 
      case 7 :  return "Es fin de semana"; break 

   }  */

   return numeroDeDia===1 || numeroDeDia===7 ? "Es fin de semana" : "Es dia laboral";
          // operadores ternarios 
 
}


function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
  
   /*
   while(num>10){

   num = num/10;
   num =Math.floor(num);  Math.floor redondeará el número decimal al entero de menor valor. Por ejemplo, 
                          si tenemos el número 5.93, el resultado será 5.
    

   }
   
   if(num===9) return true;
   else return false ;
   */
  
      while(num>=10){
         num/=10;
      }
      return  Math.trunc(num)===9;
   /*
   Math.trunc(),devuelve la  parte entera de un número eliminando cualquier dígito fraccional.
   */
  /* var  aux = num.toString().charAt(0);
   if(parseInt(aux)===9) return true;
   else return false ;*/

}


function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
  /* let cont=1;
   for(let i=0; i<array.length;i++)
      if(array[i]===array[i+1]) cont ++;           
         
   if(cont=== array.length)  return true ;  
   else return false ;
*/
   let booleano = true ; 
   for(let i =0 ; i<array.length;i++){

      for(j=i+1;j<array.length;j++){
         if(array[i]===array[j])  booleano = true ;
         else  booleano = false ; 
      }
   }
   return booleano ;

}


function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var nuevo = [];
    for( let i = 0 ; i<array.length ; i ++ ){

      if(array[i]==="Enero") nuevo.push(array[i]);
      if(array[i]==="Marzo") nuevo.push(array[i]);
      if(array[i]==="Noviembre") nuevo.push(array[i]);

    }  
     if(nuevo.length===3) return nuevo ;
     else return  "No se encontraron los meses pedidos";

}


function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   
    let vec= [];
   for(let i =0 ; i<11;i++)
      vec[i] = i*6;
   return vec; 
   
   
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var vec = [];
   for( let i =0  ;i<array.length;  i++){
           if(array[i]>100)
               vec.push(array[i]);  
   }
   return vec; 
   /*El método push() añade uno o más elementos al final de un arreglo, y devuelve la
     nueva longitud del array.*/
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var vec =[];
   for(let i =0 ; i < 10 ; i ++){
       num+=2;
       vec.push(num);
       if(num===i) return "Se interrumpió la ejecución" ;
      
    }
   return vec;
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   /*
   var vec =[];
   for(let i =0 ; i < 10 ; i ++){
      if(5!==i){
        
         num+=2;
         vec.push(num);
      }    
       
    }
   return vec;
   */
   let vec =[];
   for(var i =0 ; i < 10 ; i ++){
      if(5===i){
        continue;
      }    
      num+=2;
      vec.push(num);
       
    }
   return vec;

   }


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
