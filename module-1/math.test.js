const { Add, Subtract, Divide, Multiply } = require('./math.js');


 test ('should add two numbers correctly', () => {
      expect(Add(4,3)).toBe(7);  
    });
  
test ('should subtract two numbers correctly', () => {
      expect(Subtract(10, 3)).toBe(7);
    });
  
  

test ('should divide two numbers correctly', () => {
      expect(Divide(14, 2)).toBe(7);
})
  
    test('should handle division by zero', () => {
      expect(() => Divide(10, 0)).toThrow();
    });

  

test ('should multiply two numbers correctly', () => {
      expect(Multiply(7, 1)).toBe(7);
    });

test ('should concatenate "Hello" with the provided name', () => {
        expect(SayHello('Steven')).toBe('Hello Steven');
        expect(SayHello('John')).toBe('Hello John')});