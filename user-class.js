class User {
    constructor( firstname, lastName ) {
        this.firstname = firstname;
        this.lastName = lastName;
    }
    
    getFullName() {
        return this.firstname + ' ' + this.lastName;
    }
}

// create instance
let user = new User( 'John', 'Doe' );

// print full name
console.log( user.getFullName() );