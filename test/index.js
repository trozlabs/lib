const lib = require('../src');
const { ObjectUtil } = lib;

console.log(lib);

const obj = {
    arr: [1,2,3],
    one: 1,
    two: 2,
    three: 3,
    deep: {
        arr: [1,2,3],
        one: 1,
        two: 2,
        three: 3,
        deeper: {
            arr: [1,2,3],
            one: 1,
            two: 2,
            three: 3,
        }
    }
};

const clone = ObjectUtil.clone(obj);

obj.four = 4;
obj.arr.push(4);
obj.deep.four = 4;
obj.deep.arr.push(4);
obj.deep.deeper.four = 4;
obj.deep.deeper.arr.push(4);

// original object with modifications. 
console.log('obj', obj)

// should not have any props at any level containing `four: 4`
console.log('clone', clone)