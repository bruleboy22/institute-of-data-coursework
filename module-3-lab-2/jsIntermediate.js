//Exercise 1. Create a function that takes a string as a parameter and returns the string with the first
//character of each word changed into a capital letter, as in the example below. Test it with
//different strings.

function ucFirstLetters(string) {
    
    let words = string.split(" ");
    
    for (let i = 0; i < words.length; i++) {

      words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    
    let result = words.join(" ");
    
    return result;
  }

  console.log(ucFirstLetters("los angeles")); // Output: Los Angeles
  console.log(ucFirstLetters("new york city")); // Output: New York City
  console.log(ucFirstLetters("san francisco")); // Output: San Francisco

  //Excercise2. Create a function truncate(str, max) that truncates a given string of text if its total
//length is greater than the max length. It should return either the truncated text, with an
//ellipsis (...) added to the end if it was too long, or the original text otherwise.
//b) Write another variant of the truncate function that uses a conditional operator.

function truncate(str, max) {
    
    return str.length > max ? str.slice(0, max) + '...' : str;
  }
  console.log(truncate('This text will be truncated if it is too long', 25));
  
// This text will be truncat...

//Excercise 3. Use the following animals array for the below tasks. Test each one by printing the result to
//the console. Review the following link for tips: https://developer.mozilla.org/en-
//US/docs/Web/JavaScript/Reference/Global_Objects/Array
//a) Add 2 new values to the end
//b) Add 2 new values to the beginning
//c) Sort the values alphabetically
//d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
//middle of the animals array with newValue
//e) Write a function findMatchingAnimals(beginsWith) that returns a new array
//containing all the animals that begin with the beginsWith string. Try to make it work
//regardless of upper/lower case.

const animals = ['Tiger', 'Giraffe']
console.log(animals)

animals.push('Lion, Zebra');
console.log(animals);

animals.unshift('Monkey, Elphant');
console.log(animals);

animals.sort();
console.log(animals);

function replaceMiddleAnimal(newValue) {
  const middleIndex = Math.floor (animals.length / 2);
  animals[middleIndex] = newValue;
}
replaceMiddleAnimal('Hippo');
console.log(animals);

function findMatchingAnimals(beginsWith) {
  const matchingAnimals = animals.filter(animal =>
    animal.toLowerCase().startsWith(beginsWith.toLowerCase())
  );
  return matchingAnimals;
}

console.log(findMatchingAnimals('t'));




//Excercise 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like
//'margin-left' into camel-cased 'marginLeft'.
//The function should remove all dashes, and uppercase the first letter of each word after a dash.
//b) Create variants of the camelCase function that use different types of for loops, and
//c) with and without the conditional operator.
// Using a regular for loop and conditional operator

function camelCase(cssProp) {
  let words = cssProp.split('-');
  let camelCaseProp = words[0];
  
  for (let i = 1; i < words.length; i++) {
    camelCaseProp += words[i][0].toUpperCase() + words[i].slice(1);
  }
  
  return camelCaseProp;
}

console.log(camelCase('margin-left')); // marginLeft
console.log(camelCase('background-image')); // backgroundImage
console.log(camelCase('display')); // display

function camelCase(cssProp) {
  let words = cssProp.split('-');
  let camelCaseProp = words[0];
  
  for (let word of words.slice(1)) {
    camelCaseProp += word[0].toUpperCase() + word.slice(1);
  }
  
  return camelCaseProp;
}

console.log(camelCase('margin-left')); // marginLeft
console.log(camelCase('background-image')); // backgroundImage
console.log(camelCase('display')); // display
