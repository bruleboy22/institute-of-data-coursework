// Module 3 Labs JS Fundamentals

// Excercise 1 - What are the results of these expressions? (answer first, then use console.log() to check)

// '10' - empty string has concatenated with the number 1 and the number 0
console.log("" + 1 + 0);
//  -1 - empty string has concatenated with -1 and the number 0
console.log("" - 1 + 0);
//  1 - true has a value of 1, false has a value of 0, 1+0=1 
console.log(true + false);
// false - the boolean value of true has been negated to false
console.log(!true);
// 2 - number value of 6 divided by string "3"
console.log(6 / "3");
// 6 - string "2" multiplied by sring "3"
console.log("2" * "3");
// '9px' - number value 4 added to number value 5 = 9 concatenated with "px"
console.log(4 + 5 + "px");
// '$45' - the string symbol "$" is concatenated with the numbers 4 and 5
console.log("$" + 4 + 5);
// 2 - string value "4" minus number value 2 = 2
console.log("4" - 2);
// NaN - string 4 px cannot be converted into a number 
console.log("4px" - 2);
// '-9 5' - "-9" string is concatenated with the number value 5
console.log(" -9 " + 5);
// -14
console.log(" -9 " - 5);
// 1 - null=0 so the equation becomes 0+1=1
console.log(null + 1);
// NaN - undefined= NaN so the equation becomes NaN+1= NaN
console.log(undefined + 1);
// true - undefined and null are equal both converting to 0
console.log(undefined == null);
// false - undefined and null are different types therefore not strictly equal
console.log(undefined === null);
// -2 
console.log(" \t \n" - 2);

//Excercise 2 - Which of the below are not giving the right answer? Why are they not correct? How can we fix them?

let three = "3";
let four = "4";
let thirty = "30";
//what is the value of the following expressions?
// this is not adding three plus four it is combining them
let addition = three + four;
let multiplication = three * four;
let division = three / four;
let subtraction = three - four;
let lessThan1 = three < four;
let lessThan2 = thirty < four;

console.log(addition); // Output: 7
console.log(multiplication); // Output :12
console.log(division); // Output: 0.75
console.log(subtraction); // Output: -1
console.log(lessThan1); // Output: true
console.log(lessThan2); // Output: true

//Excercise 3 - Which of the following console.log messages will print? Why?

if (0) console.log('#1 zero is true');
// this message will print because it is a truthy
if ("0") console.log('#2 zero is true');
if (null) console.log('null is true');
// this message will print because it is a truthy
if (-1) console.log('negative is true');
//this message will print because it is a truthy
if (1) console.log('positive is true');

//Excercise 4 - Rewrite this if using the ternary/conditional operator '?'. Test it with different values for 
//a and b. Whats does the '+=' do?

// '+=' adds one to the previous result
//result += 'less than 10'

let a = 5, b = 7;
let result = `${a} + ${b} is ${a + b < 10 ? 'less than 10' : 'greater than 10'}`;
console.log(result); // output greater than 10


//Excercise 5 - Rewrite the following function using: a) function expression syntax, and b) arrow function
//syntax. Test each version to make sure they work the same.

//function getGreeting(name) {
    //return 'Hello ' + name + '!';


const getGreeting = function(name) {
    return 'Hello ' + name + '!';
  };
  
  console.log(getGreeting('Steven')); {// Output: Hello Steven!
  
const getGreeting = (name) => {
        return 'Hello ' + name + '!'
      };
      
    console.log(getGreeting('Steven')); // Output: Hello Steven!
    }      

//Excercise 6 - a) Complete the inigo object by adding a lastName property and including it in the greeting.
//b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead
//prints his famous catch phrase to the console. HINT: see
//https://www.imdb.com/title/tt0093779/characters/nm0001597.
//c) Update getCatchPhrase to use arrow function syntax and a conditional operator.

    const westley = {
        name: 'Westley',
        numFingers: 5
      };
      
      const rugen = {
        name: 'Count Rugen',
        numFingers: 6
      };
      
      const inigo = {
        firstName: 'Inigo',
        lastName: 'Montoya',
        greeting(person) {
          let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
          console.log(greeting + this.getCatchPhrase(person));
        },
        getCatchPhrase: (person) => (person.numFingers === 6 ? "You killed my father. Prepare to die." : 'Nice to meet you.')
      };
      
      inigo.greeting(westley);
      inigo.greeting(rugen);
      
      

    // Excercise 7 - The following object represents a basketball game and keeps track of the score as the
//game progresses.
//a) Modify each of the methods so that they can be ‘chained’ together and the last line of
//the example code works
//b) Add a new method to print the full time final score
//c) Add a new object property to keep track of the number of fouls and a method to
//increment it, similar but separate to the score. Include the foul count in the half time and
//full time console messages
//d) Test your object by chaining all the method calls together in different combinations.

const basketballGame = {
  score: 0,
  fouls: 0,

  freeThrow() {
    this.score++;
    return this;
  },

  basket() {
    this.score += 2;
    return this;
  },

  threePointer() {
    this.score += 3;
    return this;
  },

  halfTime() {
    console.log('Halftime score is ' + this.score + '. Fouls: ' + this.fouls);
    return this;
  },

  fullTime() {
    console.log('Full-time score is ' + this.score + '. Fouls: ' + this.fouls);
    return this;
  },

  incrementFoul() {
    this.fouls++;
    return this;
  }
};

// Test by chaining all the method calls together in different combinations
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();
basketballGame.basket().incrementFoul().freeThrow().halfTime();
basketballGame.freeThrow().threePointer().halfTime().incrementFoul().fullTime();


    // Excercise 8 - The object below represents a single city.
    //a) Write a function that takes an object as an argument and uses a for...in loop to access
    //and print to the console each of those object properties and their values. Test it using
    //the sydney object below.
    //b) Create a new object for a different city with different properties and call your function
    //again with the new object.

    function printObjectProperties(city) {
      for (let property in city) {
        console.log(`${property}: ${city[property]}`);
      }
    }
    
    const sydney = {
      name: 'Sydney',
      population: 5_121_000,
      state: 'NSW',
      founded: '26 January 1788',
      timezone: 'Australia/Sydney'
    };
    
    printObjectProperties(sydney);

    const thibodaux = {
      name: 'Thibodaux',
      population: 15_948,
      country: 'United States',
      founded: '1830',
      timezone: 'UTC-6 (CST)'
    };
    
    printObjectProperties(thibodaux);
    

       //Excercise 9 - Use the following variables to understand how JavaScript stores objects by reference.
//a) Create a new moreSports variable equal to teamSports and add some new sport
//values to it (using push and unshift)
//b) Create a new dog2 variable equal to dog1 and give it a new value
//c) Create a new cat2 variable equal to cat1 and change its name property
//d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
//changed? Why?
//e) Change the way the moreSports and cat2 variables are created to ensure the
//originals remain independent

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

let moreSports = [...teamSports];
teamSports.push('Football');
teamSports.push('Basketball');

let dog2 = dog1;
dog1 = 'Mogli';

let cat2 = Object.assign ([], cat1);
cat1.name = 'Bagheera';
cat1.breed = 'Domestic Shorthair';

console.log(teamSports);
console.log(dog1);
console.log(cat1);

//Excercise 10. The following constructor function creates a new Person object with the given name and
//age values.
//a) Create a new person using the constructor function and store it in a variable
//b) Create a second person using different name and age values and store it in a separate
//variable
//c) Print out the properties of each person object to the console
//d) Rewrite the constructor function as a class called PersonClass and use it to create a
//third person using different name and age values. Print it to the console as well.
//e) Add a canDrive method to both the constructor function and the class that returns true
//if the person is old enough to drive.

class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }

  canDrive() {
    return this.age >= 16;
  }
}

let person1 = new PersonClass('Steven', 40);
console.log(person1);

let person2 = new PersonClass('Lacie', 26);
console.log(person2);

console.log(person1.name, person1.age, person1.human);
console.log(person2.name, person2.age, person2.human);
console.log(person1.canDrive());
console.log(person2.canDrive());


