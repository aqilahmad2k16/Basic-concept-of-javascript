//function

// function syntex

// function function name(){
    // 
//}

function sahHi(){// function without parameter
    // console.log("My name is Aqil");
    // this function is not returning any value because it does not have anything to return.
}

// function calling/ invoking/ running

// sahHi();
// sahHi();
// sahHi();

function fruitProcessor( apples, oranges){// function with parameter/ here function takes two value and return output 
    // console.log(apples, oranges);

    const juice = `Juice with ${apples} apples and with ${oranges} oranges`;

    return juice;
}
// here we store return value of function into a new variable the print it
// const applesJuice = fruitProcessor(5,0);
// console.log(applesJuice);

// without store return value of fruitProcesson
// console.log(fruitProcessor(5,0));


const appleNorangeJuice = fruitProcessor(4,5);
console.log(appleNorangeJuice);

console.log(fruitProcessor(50,60));