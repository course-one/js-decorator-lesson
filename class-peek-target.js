function peek( target ) {
    console.log( 'target', target );
    return target;
}

@peek
class User {
    constructor( firstName, lastName ) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    static getVersion() {
        return '1.0.0';
    }
}