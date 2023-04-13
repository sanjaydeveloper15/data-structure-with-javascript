//Write a program to Add id key with value 1 in each nested object
const obj = {
    name: {
        final: {
            val: 'yes'
        }
    }
}
// const outObj = {
//     id: 1,
//     name: {
//         id: 1,
//         final: {
//             id: 1,
//             val: 'yes'
//         }
//     }
// }

const addKeyInObj = (obj, key, value) => {
    Object.values(obj).forEach(val => {
        if (val && typeof val === 'object') {
            addKeyInObj(val, key, value);
        }
    });
    obj[key] = value;
    return obj;
}

console.log(addKeyInObj(obj, 'id', 1));