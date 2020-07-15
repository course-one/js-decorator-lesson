class User {

    // define class properties 
    firstName = 'default_first_name';
    lastName = 'default_last_name';
    getFullName = function() {
        return this.firstName + ' ' + this.lastName;
    }

    constructor( firstName, lastName ) {
        if( firstName ) this.firstName = firstName;
        if( lastName ) this.lastName = lastName;
    }
}

// create an instance without argument values
var dummy = new User();
console.log( 'dummy =>', dummy );
console.log( 'dummy.getFullName() =>', dummy.getFullName() );

// create an instance with argument values
var user = new User( 'John', 'Doe' );
console.log( 'user =>', user );
console.log( 'user.getFullName() =>', user.getFullName() );