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
  
