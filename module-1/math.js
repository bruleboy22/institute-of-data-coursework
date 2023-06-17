function Add (A,B){
    return(A+B)
}
function Subtract (A,B){
    return(A-B)
}
function Divide (A,B){
    return(A/B)
}
function Multiply (A,B){
    return(A*B)
}


console.log(Add(4,3));
console.log(Subtract(10,3));
console.log(Divide(14,2));
console.log(Multiply(7,1));


let string1 = "Hello";
let string2 = "Steven";
let concatenatedString = string1 + " " + string2;

console.log(concatenatedString);

function SayHello (Name){
    let string1 = "Hello";
let concatenatedString = string1 + " " + Name;
    return concatenatedString

}

console.log(SayHello('Steven'))