let arr = [1,2,1,3,2,1,2,3,4,5];

const getDuplicateFromArr = (inputArr) => {
    let resultArr = [];
    let obj = {};
    for(let i=0; i<inputArr.length; i++)
    {
        if(obj[inputArr[i]]){
            if(!resultArr.includes(inputArr[i])){
                resultArr.push(inputArr[i]);
            }
        }else{
            obj[inputArr[i]] = 1;
        }
    }
    return resultArr;
}

console.log(getDuplicateFromArr(arr));