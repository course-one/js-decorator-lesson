function upperCase( target ) {
    console.log( 'target', target );

    // get initial value
    const value = target.initializer();

    // update `initializer` functions
    target.initializer = function() {
        return value.toUpperCase();
    }

    return target;
}

class User {
    // style : 1
    @upperCase
    firstName = 'default_first_name';

    // style : 2
    @upperCase lastName = 'default_last_name';

    getFullName = function() {
        return this.firstName + ' ' + this.lastName;
    }
}

var dummy = new User();
console.log( 'getFullName() =>', dummy.getFullName() );