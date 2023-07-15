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

function delayMsg(msg)
{
console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')
  
