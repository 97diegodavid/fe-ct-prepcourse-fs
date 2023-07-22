/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:

   return  nombre[0].toUpperCase() + nombre.slice(1);
   /*El método toUpperCase() en JavaScript se utiliza para 
     convertir todos los caracteres de una cadena en mayúsculas.*/
   /*slice(): Este método devuelve una parte de una cadena, empezando por el índice
     que se especifica hasta el índice final que se le indique. Es una forma de extraer un
     fragmento de una cadena de texto, creando una nueva cadena.*/
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb();
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   var resultado = cb(num1,num2);
   return resultado;
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   let suma = 0 ; 
   for( var  i =0 ; i<arrayOfNumbers.length; i++){
      suma+=arrayOfNumbers[i];
   
  }
  cb(suma);
  
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   array.forEach(function(element){
      cb(element);
  });
}
function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:

  /* for(let i =0 ; i<array.length; i++ ){
      
      array.forEach(function(element){
         cb(element);
     });
      
   }*/
   return array.map((element) => cb(element));

   /*let newArray = [];
   for(let i =0 ; i<array.length; i ++){
       
      newArray.push(cb(array[i]));

   }
   return newArray; */
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:

  /*let array = [];
  for(let i = 0 ; i<arrayOfStrings.length; i++){

       if(arrayOfStrings[i][0].toLowerCase() ==='a')
          array.push(arrayOfStrings[i]); 
  }
   return array;*/
   
  return  arrayOfStrings.filter(elemento => elemento[0].toLowerCase()=== 'a'); 
  /*El método toLowerCase() en JavaScript es un método de cadenas que devuelve 
  una nueva cadena con todos los caracteres de la cadena original convertidos a minúsculas .*/

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
