const generateObject = (customKey, repeat) => {
    let result = {};
    for(let i = 1;i <= repeat;i++){
        result [customKey+i]=i;
    }
    return result;
}
module.exports = generateObject;