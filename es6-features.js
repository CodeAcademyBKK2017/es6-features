

const generateObject = (customKey, repeat) => {
    if(typeof customKey !== 'string' || typeof repeat !== 'number'){
        return false;
    }
    const result = {};
    for(let i = 1; i <= repeat ; i++){
        result[customKey + i] = i;
    }
    return result;
}

module.exports = generateObject;