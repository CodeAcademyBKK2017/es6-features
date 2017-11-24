const generateObject = require('../generateObject');
test('Success case1',()=>{
    let resultTestFn = {};
    resultTestFn = generateObject('test',3);
    expect(resultTestFn.test1).toEqual(1);
    expect(resultTestFn.test2).toEqual(2);
    expect(resultTestFn.test3).toEqual(3);
})