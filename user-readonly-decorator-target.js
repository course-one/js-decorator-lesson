function readonly( target ) {
    console.log( 'target', target );

    target.descriptor.writable = false;
    return target;
}

class User {
    constructor( firstname, lastName ) {
        this.firstname = firstname;
        this.lastName = lastName;
    }
    
    @readonly
    getFullName() {
        return this.firstname + ' ' + this.lastName;
    }
}