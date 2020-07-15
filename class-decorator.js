function add( { name, callback } ) {
    return function( target ) {
        // add new element
        target.elements.push( {
            kind: 'method',
            key: name,
            placement: 'prototype',
            descriptor: {
                value: callback,
                writable: false,
                configurable: false,
                enumerable: false,
            }
        } );

        return target;
    }
}

@add( {
    name: 'getFullName',
    callback: function() {
        return this.firstName + ' : ' + this.lastName;
    } 
} )
class User {
    constructor( firstName, lastName ) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    static getVersion() {
        return '1.0.0';
    }
}

// create an instance and call `getFullName` method
let user = new User( 'John', 'Doe' );
console.log( 'full-name =>', user.getFullName() );