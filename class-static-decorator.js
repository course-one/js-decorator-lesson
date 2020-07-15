function change( key, value ) {
    return function( target ) {
        console.log( 'target', target );

        target.descriptor[ key ] = value;
        return target;
    }
}

class User {
    @change( 'writable', false )
    static getVersion() {
        return '1.0.0';
    }
}

// check property descriptor of `getVersion` method
console.log(Object.getOwnPropertyDescriptor(
    User, 'getVersion'
) );

// hack `getVersion` method
User.getVersion = function() {
    return 'HACKED!';
}

// print version
console.log( User.getVersion() );