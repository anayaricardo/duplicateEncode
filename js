function duplicateEncode(word){
    // ...
      let returnString = ""; // Regresa un valor (String vacío).
      const charMap = {};    // La constante que va a contar cada letra. 
                             // Es un objeto {}.

    // Recorrer la string original
    Array.from(word).forEach(char => { // Array.from y forEach. char = cada letra de 'word'
    char = char.toLowerCase(); //Todas son minúsculas.
      // Llevar la cuenta de cada uno de los carácteres
     if (!charMap[char]) { // Si char no existe.
         charMap[char] = { // Si char existe contar 1.
         count:1,
} 
} else { //Si existe sumar uno más.
   charMap[char].count++;
}
})
   //console.log(charMap); // Imprime en consola el número de veces 
   //que se repite char.

   //Si el carácter aparece una vez, devolver "("
   //Si el caracter aparece más de una vez, devolver ")"
for (let i = 0; i < word.length; i++){ // Estructura 'for'.
  let char = word[i].toLowerCase(); // Todas son minúsculas
  returnString += charMap[char].count > 1 ? ")" : "(" 
  // La condición para retornar la nueva string es igual a la 
  // concatenación del recorrido de cada caractér,
  // almacenado en charMap. Se pregunta:
  // ¿charMap es menor a 1, entonces "(" o ':' si es mayor a 1 entonces ")". 
}
  //Retornar la nueva string
  return returnString;
}
