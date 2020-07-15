var myObj = {
    myPropOne: 1,
    myPropTwo: 2
};

// get property descriptor of `myPropOne`
let descriptor = Object.getOwnPropertyDescriptor(
    myObj, 'myPropOne'
);

console.log( descriptor );