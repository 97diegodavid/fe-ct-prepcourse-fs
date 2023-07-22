/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   
   /*var array = [];
   for (let ob in objeto) {
      array.push([ob, objeto[ob]]);
   }
   return array ; */
   var  valores  = Object.values(objeto);    // valores = objeto(propiedades);
   var  propiedades = Object.keys(objeto);
   var array = [];
   for(i=0; i<propiedades.length;i++){
          array.push([propiedades[i],valores[i]]);
      
   }
   return array ; 
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   var objeto = {};
   for(let i = 0 ; i<string.length; i++){
      var letra = string[i];
      if(objeto[letra])  objeto[letra] ++ ;
        
      else objeto[letra] =1 ; 
   }
   return objeto; 
}
function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var mayus = "";
   var minus = "";
   for(let i = 0 ; i<string.length;i++){
       if(string[i]===string[i].toUpperCase())
          mayus+=string[i];
       else 
         minus+=string[i];
   }
    
    return  mayus + minus ; 

}

function asAmirror(frase){
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var palabras = frase.split(' ');
   for( i=0 ; i<palabras.length;i++){
      var palabraInvertida =palabras[i].split('').reverse().join('');
      palabras[i] = palabraInvertida;
   }
   frase = palabras.join(' ');

   return  frase ; 
   /*El método split() en JavaScript se utiliza para dividir una cadena 
     de caracteres en una matriz de subcadenas.*/
   /*El método join() en JavaScript se utiliza para unir todos los elementos de un array en 
   una cadena y separarlos por un carácter. */
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var str = numero.toString();
   for (var i = 0; i<str.length; i++){      
       if(str[i]===str[str.length-1-i])   return 'Es capicua'; 
       else  return 'No es capicua';
   
   }
 }


function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

   /* var newString = '';
     for(let i = 0; i <string.length; i++){
         if(string[i]!=='a'&&string[i]!=='b'&&string[i]!=='c')
             newString+=string[i];

     }
     return newString ;  */
     var newString = string.split('a').join('').split('b').join('').split('c').join('');
     return newString ; 

}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código: 
   
   let aux;
   for(let  i = 0 ; i<arrayOfStrings.length; i++){
       for( let j= 0; j<arrayOfStrings.length-1-i; j++ )
            if(arrayOfStrings[j].length>arrayOfStrings[j+1].length){
                aux = arrayOfStrings[j];
                arrayOfStrings[j] = arrayOfStrings[j+1];
                arrayOfStrings[j+1] = aux; 

            }
            
   }   
   return arrayOfStrings ;
//   arrayOfStrings = arrayOfStrings.sort((a,b) => a.length - b.length);
//   return arrayOfStrings ;  
/* El método sort() en JavaScript ordena los elementos de un array en su lugar y devuelve 
una referencia al mismo array ahora ordenado. El orden predeterminado es ascendente.*/
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
  /* let newArray= [];
     for(let i = 0; i<array1.length;i++)
       for(let j = 0 ; j<array2.length;j++)
           if(array1[i]=== array2[j])
               newArray.push(array1[i]);

     return newArray;  */

   let iguales = [];

   for(let i = 0 ; i<array1.length;i++){
      if(array2.includes(array1[i]) && !iguales.includes(array1[i])){
         iguales.push(array1[i]);
      }
   }
   return iguales;  
}


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
