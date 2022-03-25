const Type = require('./Type');

module.exports = class ObjectUtil {

    static override(defaults, ...overrides) {
        overrides = overrides.map(o => (!Type.isObject(o) ? o : {}));
        return Object.assign({}, defaults, ...overrides);
    }

    static clone(obj) {
        return Object.entries(obj).reduce((obj, [key, val]) => {
            Object.assign(obj, { [key]: val });
            if (Type.isArray(val)) {
                obj[key] = [...val];
            }
            else if (Type.isObject(val)) {
                obj[key] = this.clone(val);
            }
            return obj;
        }, {});
    }
}