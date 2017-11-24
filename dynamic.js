const generateObject = (customKey, repeat) => {
    let result = {};
    for(let i = 1;i <= repeat;i++){
        result [customKey+i]=i;
    }
    console.log(result);
}
//generateObject('test',5);
module.exports = generateObject;