// Example:
// input: "holly"
// output: "hIJKLMNOPQRSTUVWXYZoPQRSTUVWXYZlMNOPQRSTUVWXYZlyZ"

function insertMissingLetters (str){
  let results = []
  let alphabet = Array.from("abcdefghijklmnopqrstuvwxyz")
  for (var i = 0; i < str.length; i++){
    let letter = str[i] 
    if (!results.includes(letter)) {
      results.push(letter)
      let startAlphabet = alphabet.indexOf(letter)
      for(var j = startAlphabet + 1; j < alphabet.length; j++) {
        results.push(alphabet[j].toUpperCase())
      }
    } else {
      results.push(letter)
    }
  }
  return results;
}

console.log(insertMissingLetters("holly").join(""))