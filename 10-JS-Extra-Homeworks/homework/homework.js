// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  
  var array = [];
  for (clave in objeto) {
    array.push([clave, objeto[clave]]);
  }
  return array;

  //return Object.entries(objeto);
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objeto = {};
  for (var i = 0 ; i < string.length ; i++) {
    if (!objeto[string[i]]) {
      objeto[string[i]] = 1;
    }
    else {
      objeto[string[i]]++; //objeto[string[i]]++ = objeto[string[i]] + 1;//
    }
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayus = "";
  var minus = "";
  for (var i = 0 ; i < s.length ; i++) {
    if (s[i] === s[i].toUpperCase()) {
      mayus += s[i];
    }
    else {
      minus += s[i];
    }
  }
  return mayus.concat("", minus);
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  //Opcion 1:
  var espejo = str.split(" ").map(function(elemento) {
    return elemento.split("").reverse().join("");
  }).join(" ");
  return espejo;

  /*Opcion 2:
  var newstring = "";
  for (var i = 0 ; i < str.length ; i++) {
    if (str[i] === " ") {
      for (var j = i - 1 ; j >= 0 ; j--) {
        newstring += str[j];
      }
      newstring += " ";
      str = str.slice(i + 1);
      i = 0;
    }
    if (i === str.length - 1) {
      for (var k = i ; k >= 0 ; k--) {
        newstring += str[k];
      }
    }
  }
  return newstring;*/
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  /*Opcion 1:
  var string = numero.toString();
  for (var i = 0 ; i < Math.floor(string.length / 2) ; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return "No es capicua";
    }
  }
  return "Es capicua";*/

  //Opcion 2:
  let string = numero.toString();
  let stringInvertida = "";
  stringInvertida = string.split("").reverse().join("");
	if(string == stringInvertida){
    return "Es capicua";
  }
  return "No es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var string1 = "";

  for (var i = 0 ; i < cadena.length ; i++) {
    if (cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c") {
      string1 += cadena[i];
    }
  }
  return string1;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  //Opcion 1:
  var auxiliar;
  for (var i = 0 ; i < arr.length - 1 ; i++) {
    for (var j = i + 1 ; j < arr.length ; j++) {
      if (arr[i].length > arr[j].length) {
        auxiliar = arr[i];
        arr[i] = arr[j];
        arr[j] = auxiliar;
      }
    }
  }
  return arr;

  /*Opcion 2:
  for (let i = 0; i < arr.length; i ++ ){
    var temp = arr[i]
    var j = i - 1
    while (j >= 0 && temp.length < arr[j].length) {
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1] = temp
  }
  return arr;*/
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí

  var newarray = [];
  var menor = [];
  var mayor = [];
  if (arreglo1.length < arreglo2.length) {
    menor = arreglo1;
    mayor = arreglo2;
  }
  else {
    menor = arreglo2;
    mayor = arreglo1;
  }
  for (var i = 0 ; i < menor.length ; i++) {
    for (var j = 0 ; j < mayor.length ; j++) {
      if (menor[i] === mayor[j]) {
        newarray.push(menor[i]);
      }
    }
  }
  return newarray;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

