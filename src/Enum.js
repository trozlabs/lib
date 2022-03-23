module.exports = function Enum(values) {

    // create a new function as our enum 
    // with some key/val search functionality.
    const newEnum = new Function(`
        return function ENUM(keyOrVal) {
            const result = Object.entries(ENUM).filter(entry => {
                return entry.includes(keyOrVal);
            }).map(entry => {
                let [ key, val ] = entry;
                return { key, val };
            });
            return result;
        }
    `)();

    // Add the keys and vals to the function as 
    // static properties.
    Object.entries(values).forEach((entry, index) => {
        let [ key, val ] = entry;
        val = typeof(val) === 'undefined' ? index : val;

        newEnum[key] = val;
        newEnum[key] = key;
        newEnum[key.toLowerCase()] = val;
        newEnum[key.toUpperCase()] = val;
        newEnum[val] = key;
        
        if (typeof(val) === 'string') {
            newEnum[val.toLowerCase()] = key;
            newEnum[val.toUpperCase()] = key;
        }
    });

    // allow MyEnum.key(keyOrVal) to get the key by value or name
    newEnum.key = new Function(`keyOrVal`, `
        const [result] = this(keyOrVal);
        return result?.key;
    `).bind(newEnum);
    
    // allow MyEnum.key(keyOrVal) to get the val by value or name
    newEnum.val = new Function(`keyOrVal`, `
        const [result] = this(keyOrVal);
        return result?.val;
    `).bind(newEnum);

    return newEnum;
}