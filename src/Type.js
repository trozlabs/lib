module.exports = class Type {

    static isNull(obj) {
        return obj === null;
    }
    
    static isUndefined(obj) {
        return obj === undefined;
    }

    static isString(obj) {
        return typeof(obj) === 'string';
    }

    static isObject(obj) {
        return typeof(obj) === 'object';
    }
    
    static isBoolean(obj) {
        return typeof(obj) === 'boolean';
    } 

    static isArray(obj) {
        return Array.isArray(obj);
    }

    static isEmpty() {
        return (( obj                     === undefined )
            ||  ( obj                     === null      )
            ||  ( obj                     === 0         )
            ||  ( obj.length              === 0         ) 
            ||  ( obj.size                === 0         )
            ||  ( Object.keys(obj).length === 0         ));
    }
}