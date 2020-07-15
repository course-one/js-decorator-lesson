'use strict';

// create an object using `Object.create`
var o = Object.create( Object.prototype, {
    a: { value: 1, writable: false },
    b: { value: 2, writable: true }
} );

// see prototype of `o`
console.log(
    'o.__proto__ =>',
    o.__proto__
);

// see the property descriptor of `a`
console.log(
    'o.hasOwnProperty( "a" ) =>',
    o.hasOwnProperty( "a" )
);