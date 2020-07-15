'use strict';

var myObj = {
    myPropOne: 1,
    myPropTwo: 2
};

// modify property descriptor
Object.defineProperty( myObj, 'myPropOne', {
    writable: false
} );

// print property descriptor
let descriptor = Object.getOwnPropertyDescriptor(
    myObj, 'myPropOne'
);

console.log( descriptor );

// set new value
myObj.myPropOne = 2;