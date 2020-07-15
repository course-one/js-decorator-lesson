var myObj = {
    myPropOne: 1,
    myPropTwo: 2
};

// modify property descriptor
Object.defineProperty( myObj, 'myPropOne', {
    enumerable: false
} );

// print property descriptor
let descriptor = Object.getOwnPropertyDescriptor(
    myObj, 'myPropOne'
);

console.log( descriptor );

// print keys
console.log( Object.keys( myObj ) );