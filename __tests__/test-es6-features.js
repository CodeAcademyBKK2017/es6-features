const generateObject = require('../es6-features');

test('test 1', () => {
    const result = generateObject('test', 3);
    expect(result).toMatchObject({test1: 1, test2: 2, test3: 3});
});

test('test 2', () => {
    const result = generateObject('hi', 3);
    expect(result).toMatchObject({hi1: 1, hi2: 2, hi3: 3});
});