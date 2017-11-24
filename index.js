const generateObject = (customKey, repeat) => {
    if(typeof(customKey) === 'string'){
        let dynamicResult = {}
        for(let i = 1;i <= repeat;i++){
            dynamicResult = {...dynamicResult,[customKey+i]:i}
        }
        return dynamicResult;
    }else{
        return "first arg must be string!"
    }
}
console.log(generateObject(5,6))
module.exports = generateObject;