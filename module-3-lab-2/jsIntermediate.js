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


// Excercise 5. Decimal number operations in JavaScript can lead to unexpected results, as in the
//following:

let twentyCents = 0.20
let tenCents = 0.10
let result = twentyCents + tenCents;
console.log(`${twentyCents} + ${tenCents} = ${result.toFixed(2)}`);
// 0.2 + 0.1 = 0.30000000000000004

//We can sometimes avoid this using the toFixed function to force the number of decimal
//places as below, but it’s not always useful:


//a) Explain why this code returns the wrong answer

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen) //why is this not working? 
//This is not working because the additon sign here is concatenating.
//It is attemting to return a string.

//b) Create a function currencyAddition(float1, float2) which safely adds the two
//decimal numbers float1 and float2 and returns the correct float result.

function currencyAddition(float1, float2) {
  return (parseFloat(float1) + parseFloat(float2)).toFixed(2);
}
console.log(result);
// Output: 0.30

//c) Create a function currencyOperation(float1, float2, operation) which
//safely performs the given operation (either +, -, / or *) on the two numbers and returns
//the correct float result. https://developer.mozilla.org/en-
//US/docs/Web/JavaScript/Reference/Statements/switch may be useful.

function currencyOperation(float1, float2, operation) {
  switch (operation) {
    case '+':
      return (parseFloat(float1) + parseFloat(float2)).toFixed(2);
    case '-':
      return (parseFloat(float1) - parseFloat(float2)).toFixed(2);
    case '/':
      return (parseFloat(float1) / parseFloat(float2)).toFixed(2);
    case '*':
      return (parseFloat(float1) * parseFloat(float2)).toFixed(2);
    default:
      return 'Invalid operation';
  }
}
console.log(result);
// Output: 0.30

//d) (Extension) Extend the above function to include a fourth argument numDecimals
//which allows the operation to support different amounts of decimal places from 1 to 10.
//HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with
//different values as well as the below:

console.log(0.3 == currencyAddition(0.1, 0.2)) // true
console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true


// Excercise 6. Create a function unique(duplicatesArray) which takes an array parameter that may
//include duplicates. Your function should return an array containing only the unique values
//from duplicatesArray.
//Test with the following arrays and create another one of your own.

function unique(duplicatesArray) {
  const uniqueArray = [];
  
  for (let i = 0; i < duplicatesArray.length; i++) {
    if (uniqueArray.indexOf(duplicatesArray[i]) === -1) {
      uniqueArray.push(duplicatesArray[i]);
    }
  }
  
  return uniqueArray;
}

const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
const students = ['Sam', 'Steven', 'Jeremy','Nick','Brandon'];

console.log(unique(colors)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]
console.log(unique(students)); // ['Sam', 'Steven', 'Jeremy', 'Nick', 'Brandon']

//Excercise 7. Use the following array of book objects to practice the array functions for map, find and
//filter. Test each of your answers to the below tasks.

//a) Write a function getBookTitle(bookId) that uses the find function to return the
//title of the book object with the matching id.
//b) Write a function getOldBooks() that uses the filter function to return all book
//objects written before 1950.
//c) Write a function addGenre() that uses the map function to add a new genre property
//to all of the above books, with the value ‘classic’.
//d) (Extension) Write a function getTitles(authorInitial) that uses map and
//filter together to return an array of book titles for books written by authors whose
//names start with authorInitial.
//e) (Extension) Write a function latestBook() that uses find and forEach to get the
//book with the most recent publication date.

function getBookTitle(bookId) {
  const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
  ];
  
  const book = books.find(book => book.id === bookId);
  return book ? book.title : 'Book not found';
}

function getOldBooks() {
  const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
  ];
  
  const oldBooks = books.filter(book => book.year < 1950);
  return oldBooks;
}

function addGenre() {
  const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
  ];
  
  const booksWithGenre = books.map(book => ({ ...book, genre: 'classic' }));
  return booksWithGenre;
}

function getTitles(authorInitial) {
  const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
  ];
  
  const titles = books
    .filter(book => book.author.startsWith(authorInitial))
    .map(book => book.title);
  return titles;
}

function latestBook() {
  const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
  ];
  
  let latest = books[0];
  books.forEach(book => {
    if (book.year > latest.year) {
      latest = book;
    }
  });
  return latest;
}

console.log(getBookTitle(3));
console.log(getOldBooks());
console.log(addGenre()); 
console.log(getTitles('F'));
console.log(latestBook());

//Excercise 8. The following code creates a new Map object for storing names beginning with A, B, or C
//with their phone numbers.

//a) Create a new phoneBookDEF Map to store names beginning with D, E or F
//b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
//c) Update the phone number for Caroline
//d) Write a function printPhoneBook(contacts) that prints the names and phone
//numbers in the given Map
//e) Combine the contents of the two individual Maps into a single phoneBook Map
//f) Print out the full list of names in the combined phone book

const phoneBookABC = new Map();
phoneBookABC.set('Annabelle', '0412312343');
phoneBookABC.set('Barry', '0433221117');
phoneBookABC.set('Caroline', '0455221182');

const phoneBookDEF = new Map([
  ['Dustin', '0123456789'],
  ['Edgar', '1234567890'],
  ['Fran', '2345678901'],
]);

phoneBookABC.set('Caroline', '3456789012');

function printPhoneBook(contacts) {
  for (const [name, phoneNumber] of contacts) {
    console.log(`${name}: ${phoneNumber}`);
  }
}

printPhoneBook(phoneBookABC);

const phoneBook = new Map(phoneBookABC);

for (const [name, phoneNumber] of phoneBookDEF) {
  phoneBook.set(name, phoneNumber);
}

for (const [name, phoneNumber] of phoneBook) {
  console.log(`${name}: ${phoneNumber}`);
}

//Excercise 9. Given the below salaries object, perform the following tasks.

//a) Write a function sumSalaries(salaries) that calculates and returns the total of all
//salaries
//b) Write a function topEarner(salaries) that calculates and returns the name of the
//person earning the highest salary

let salaries = {
  "Timothy": 35000,
  "David": 25000,
  "Mary": 55000,
  "Christina": 75000,
  "James": 43000
};

function sumSalaries(salaries) {
  const salaryValues = Object.values(salaries);
  const totalSalary = salaryValues.reduce((sum, salary) => sum + salary, 0);
  return totalSalary;
}

const total = sumSalaries(salaries);

function topEarner(salaries) {
  let maxSalary = 0;
  let topEarnerName = "";

  for (const [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      topEarnerName = name;
    }
  }

  return topEarnerName;
}

const topEarnerName = topEarner(salaries);
console.log("Total Salary:", total);
console.log("Top Earner:", topEarnerName);

// Excercise 10.The following code uses the Date object to print the current time and the number of hours
//that have passed today so far. Extend the code to do the following:

//a) Print the total number of minutes that have passed so far today
//b) Print the total number of seconds that have passed so far today
//c) Calculate and print your age as: 'I am x years, y months and z days old'
//d) Write a function daysInBetween(date1, date2) which calculates and returns the
//amount of days in between the two given dates.

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString());
console.log(today.getHours() + ' hours have passed so far today');

const totalMinutes = today.getHours() * 60 + today.getMinutes();
console.log(totalMinutes + ' minutes have passed so far today');

const totalSeconds = totalMinutes * 60 + today.getSeconds();
console.log(totalSeconds + ' seconds have passed so far today');

const birthDate = new Date('1983-01-08');
const ageInMilliseconds = today - birthDate;
const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
const ageInMonths = Math.floor((ageInMilliseconds / (1000 * 60 * 60 * 24 * 30.44)) % 12);
const ageInDays = Math.floor((ageInMilliseconds / (1000 * 60 * 60 * 24)) % 30.44);
console.log('I am ' + ageInYears + ' years, ' + ageInMonths + ' months, and ' + ageInDays + ' days old');


function daysInBetween(date1, date2) {
  const timeDifference = Math.abs(date2 - date1);
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  return daysDifference;
}

const startDate = new Date('2023-01-01');
const endDate = new Date('2023-12-31');
const daysBetween = daysInBetween(startDate, endDate);
console.log('Number of days between the two dates:', daysBetween);
