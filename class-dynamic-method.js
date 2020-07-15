class User {
    constructor( firstName, lastName ) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// add `getVersion` static method
User.getVersion = function() {
    return '1.0.0';
}

// add `getFullName` prototype method
User.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
}

// print version
console.log( 'version =>', User.getVersion() );

// create an instance and call `getFullName` method
let user = new User( 'John', 'Doe' );
console.log( 'full-name =>', user.getFullName() );