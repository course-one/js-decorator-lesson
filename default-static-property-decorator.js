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
    static firstName = 'default_first_name';

    // style : 2
    @upperCase static lastName = 'default_last_name';
    
    static getFullName = function() {
        return this.firstName + ' ' + this.lastName;
    }
}

console.log( 'getFullName() =>', User.getFullName() );