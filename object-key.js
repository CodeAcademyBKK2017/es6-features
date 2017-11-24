const generateObject = (customKey, repeat) => {
    if (!(typeof customKey === "string" && typeof repeat === "number")) {
        return false;
    }
    else {
        let returnObj = {};
        for (let i = 1; i <= repeat; i++) {
            returnObj[customKey + i] = i;
        }
        return returnObj;
    }
};

module.exports = generateObject;