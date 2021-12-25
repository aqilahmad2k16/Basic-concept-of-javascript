function value(a,b){
    console.log(a + '  ' + b);
    console.log(arguments);// arguments is like array but in actual it is not an array.

    let res = Array.from(arguments)// here, we are making arguments into array
    // let squre = res.map(x => x*x)// here arrow notation is kind of representation of function
    let squre = res.map(x => x)
    console.log(squre);
}

// value();
// value(10);
// value(10,20);
value(10,20,30);
