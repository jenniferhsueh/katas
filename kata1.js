// In this Kata you have to create a function, named insertMissingLetters,
//that takes in a string and outputs the same string processed in a particular way.

// The function should insert only after the first occurence of each character of 
//the input string, all the alphabet letters that:

// -are NOT in the original string
// -come after the letter of the string you are processing

// Each added letter should be in uppercase, the letters of the original string will always be in lowercase.

// Example:
// input: "holly"
// missing letters: "a,b,c,d,e,f,g,i,j,k,m,n,p,q,r,s,t,u,v,w,x,z"
// output: "hIJKMNPQRSTUVWXZoPQRSTUVWXZlMNPQRSTUVWXZlyZ"
           "hIJKLMNOPQRSTUVWXYZoPQRSTUVWXYZlMNOPQRSTUVWXYZlyZ"

function insertMissingLetters (str){
  let results = []
  let alphabet = Array.from("abcdefghijklmnopqrstuvwxyz")
  let newAlphabet = []
  // for (var i = 0; i < alphabet.length; i++) {
  //   letter = str[i]
  //   if (alphabet[i] !== str[i]) {
  //     newAlphabet.push[alphabet[i]]
  //   }
  //   console.log(newAlphabet)
  // }
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