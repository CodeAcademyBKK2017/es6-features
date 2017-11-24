const generateObject = (customKey, repeat) => {
    let newObj = {};
    for (i=1;i <= repeat; i++){
        concatKey = `${customKey}${i}`
           newObj[concatKey] = i
    }
    // console.log(newObj); 
    return newObj; 
}
module.exports = generateObject;