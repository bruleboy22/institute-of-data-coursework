//Excercise 1. makeCounter below is a decorator function which creates and returns a function that
//increments a counter.
//a) Create a second counter counter2 using the makeCounter function and test to see if
//it remains independent to counter1
//b) Modify makeCounter so that it takes an argument startFrom specifying where the
//counter starts from (instead of always starting from 0)
//c) Modify makeCounter to take another argument incrementBy, which specifies how
//much each call to counter() should increase the counter value by.

function makeCounterA(initialValue) {
    let currentCount = initialValue || 0;
    return function() {
      currentCount++;
      console.log(currentCount);
      return currentCount;
    };
  }
  
  let counter1 = makeCounterA(0);
  counter1(); 
  counter1(); 
  
  let counter2 = makeCounterA(2);
  counter2(); 
  counter2(); 
  

function makeCounterB(startFrom) {
    let currentCount = startFrom || 4;
    return function() {
      currentCount++;
      console.log(currentCount);
      return currentCount;
    };
  }
  let counter3 = makeCounterB(4);
counter3(); 
counter3(); 

function makeCounterC(startFrom, incrementBy) {
    let currentCount = startFrom || 0;
    incrementBy = incrementBy || 7;
    return function() {
      currentCount += incrementBy;
      console.log(currentCount);
      return currentCount;
    };
  }
  
  let counter4 = makeCounterC(0, 7);
  counter4(); 
  counter4(); 
//-------------------------------------------------------------------------------------------------------------
  

//Excercise 2. The following delayMsg function is intended to be used to delay printing a message until
//some time has passed.
//a) What order will the four tests below print in? Why?
//b) Rewrite delayMsg as an arrow function
//c) Add a fifth test which uses a large delay time (greater than 10 seconds)
//d) Use clearTimeout to prevent the fifth test from printing at all.

const delayMsg = (msg) => {
  console.log(`This message will be printed after a delay: ${msg}`);
};

setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all'); //this message will print first with no delay

const timeoutId = setTimeout(delayMsg, 15000, '#5: Delayed by 15 seconds');
clearTimeout(timeoutId);

//--------------------------------------------------------------------------------------------------------------

// Excercise 3. 'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed,
//similar requests until there's a brief pause, then only executing the most recent of those
//requests. See https://www.techtarget.com/whatis/definition/debouncing
//It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server
//requests being initiated if a user clicks repeatedly on a button.
//Using the following code to test and start with:
//a) Create a debounce(func) decorator, which is a wrapper that takes a function func and
//suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
//pause, the most recent call to func should be executed and any others ignored.
//b) Extend the debounce decorator function to take a second argument ms, which defines the
//length of the period of inactivity instead of hardcoding to 1000ms
//c) Extend debounce to allow the original debounced function printMe to take an argument
//msg which is included in the console.log statement.


function debounce(func, ms = 1000) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, ms);
  };
}

function printMe(msg) {
  console.log(`Printing debounced message: ${msg}`);
}

printMe = debounce(printMe);

setTimeout(() => printMe('First call'), 100);
setTimeout(() => printMe('Second call'), 200);
setTimeout(() => printMe('Third call'), 300);

//--------------------------------------------------------------------------------------------------------------


//Excercise 4. The Fibonacci sequence of numbers is a famous pattern where the next number in the
//sequence is the sum of the previous 2.
//e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
//a) Write a function printFibonacci() using setInterval that outputs a number in
//the Fibonacci sequence every second.
//b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
//calls to do the same thing
//c) Extend one of the above functions to accept a limit argument, which tells it how many
//numbers to print before stopping.

function printFibonacci() {
  let current = 1;
  let previous = 0;

  const intervalId = setInterval(() => {
    console.log(current);

    const next = current + previous;
    previous = current;
    current = next;
  }, 1000);

  setTimeout(() => {
    clearInterval(intervalId);
  }, 10000);
}

printFibonacci();

function printFibonacciTimeouts(limit) {
  let current = 1;
  let previous = 0;
  let count = 0;

  const printNumber = () => {
    console.log(current);
    const next = current + previous;
    previous = current;
    current = next;
    count++;

    if (count < limit) {
      setTimeout(printNumber, 1000);
    }
  };

  setTimeout(printNumber, 1000);
}

printFibonacciTimeouts(10);

//--------------------------------------------------------------------------------------------------------------


// Excercise 5. The following car object has several properties and a method which uses them to print a
//description. When calling the function normally this works as expected, but using it from
//within setTimeout fails. Why?
//a) Fix the setTimeout call by wrapping the call to car.description() inside a function
//b) Change the year for the car by creating a clone of the original and overriding it
//c) Does the delayed description() call use the original values or the new values from b)? Why?
//d) Use bind to fix the description method so that it can be called from within
//setTimeout without a wrapper function
//e) Change another property of the car by creating a clone and overriding it, and test that
//setTimeout still uses the bound value from d)

let car = {
  make: "Porsche",
  model: '911',
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  }
};

let newCar = { ...car, year: 2000 };
let anotherCar = { ...car, make: "Ferrari" };

setTimeout(car.description.bind(car), 200);


    // c.)The delayed description() call will use the original values from the car object 
    //because the clone created in step b) is a separate object and does not affect the original car object.
    
//--------------------------------------------------------------------------------------------------------------

//Excercise 6. Use the Function prototype to add a new delay(ms) function to all functions, which can
//be used to delay the call to that function by ms milliseconds.
//a) Use the example multiply function below to test it with, as above, and assume that all
//delayed functions will take two parameters
//b) Use apply to improve your solution so that delayed functions can take any number of parameters
//c) Modify multiply to take 4 parameters and multiply all of them, and test that your
//delay prototype function still works.

Function.prototype.delay = function (ms) {
  const fn = this; // "this" refers to the function being called
  return function (...args) {
    setTimeout(() => {
      fn.apply(null, args); // using apply to invoke the function with the provided arguments
    }, ms);
  };
};

function multiply(a, b, c, d) {
  console.log(a * b * c * d);
}

multiply.delay(500)(2, 3, 4, 5); // prints 120 after 500 milliseconds

//--------------------------------------------------------------------------------------------------------------

 

