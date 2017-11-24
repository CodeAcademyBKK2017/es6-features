const generateObject = require('../generate-object.js');

test('', () => {
    const name = 'test';
    const amount = 5;
    const object = generateObject('test', amount);

    expect(object['test1']).toBe(1);
    expect(object['test2']).toBe(2);
    expect(object['test3']).toBe(3);
    expect(object['test4']).toBe(4);
    expect(object['test5']).toBe(5);
});