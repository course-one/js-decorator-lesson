var myObj = {
    myPropOne: 1,
    myPropTwo: 2
};

// modify property descriptor
Object.defineProperty( myObj, 'myPropThree', {
    value: 3,
    writable: false,
    configurable: false,
    enumerable: true
} );

// print property descriptor
let descriptor = Object.getOwnPropertyDescriptor(
    myObj, 'myPropThree'
);

console.log( descriptor );

// change property descriptor
Object.defineProperty( myObj, 'myPropThree', {
    writable: true
} );