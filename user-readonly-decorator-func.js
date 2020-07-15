function change( key, value ) {
    return function change( target ) {
        target.descriptor[ key ] = value;
        return target;
    }
}

class User {
    constructor( firstname, lastName ) {
        this.firstname = firstname;
        this.lastName = lastName;
    }
    
    @change( 'writable', false )
    getFullName() {
        return this.firstname + ' ' + this.lastName;
    }
}

// create instance
let user = new User( 'John', 'Doe' );

// check property descriptor of `getFullName` method
console.log(Object.getOwnPropertyDescriptor(
    User.prototype, 'getFullName'
) );

// hack `getFullName` method
User.prototype.getFullName = function() {
    return 'HACKED!';
}

// print full name
console.log( user.getFullName() );