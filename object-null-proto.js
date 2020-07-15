'use strict';

// create an object with `null` prototype
var o = Object.create( null, {
    a: { value: 1, writable: false },
    b: { value: 2, writable: true }
} );

// log prototype
console.log( o.__proto__ );

// get property descriptor of `a`
console.log( 
    'o.hasOwnProperty( "a" ) =>',
    o.hasOwnProperty( "a" ) 
);