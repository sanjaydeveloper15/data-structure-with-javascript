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

const addKeyInObj = (obj,objKeyName='') => {
    if(objKeyName != ''){
    }
    //console.log(Object.fromEntries(obj));
    // console.log(Object.keys(resultObj).length)
    // obj[key] = val;
    // let keys = Object.keys(obj);
    // //resultObj[key] = val;
    // //resultObj[keys[0]] = obj[keys[0]];

    // if(typeof obj[keys[0]] == 'object')
    // {
    //     return addKeyInObj(obj[keys[0]],key,val,obj)
    // }

    // // for(let [k,v] of Object.entries(obj))
    // // {
    // //     //resultObj[k][key] = val;
    // //     resultObj[k] = obj[k];
    // //     // if(typeof obj[k] == 'object')
    // //     // {
    // //     //     return addKeyInObj(obj[k],key,val,resultObj);
    // //     // }
    // // }
    // if(Object.keys(resultObj).length != 0)
    // {
    //     obj = Object.create(resultObj);
    // }
    // return resultObj;
}

//console.log(addKeyInObj(obj,'id',1));