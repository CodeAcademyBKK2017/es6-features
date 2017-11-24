
const generateObject = (customKey, repeat) => {
    let newObject = {};
    for (let i = 1; i <= repeat; i++) {
        newObject[`${customKey}${i}`] = i;
    }
    
    return newObject;
}

module.exports = generateObject;