const dynamic = require('../index.js')

test('generateSomeObjectSuccessFull',()=>{
    const res = dynamic('test',5)
    const expectRes = {
        test1: 1,
        test2: 2,
        test3: 3,
        test4: 4,
        test5: 5
       }
    expect(res).toEqual(expectRes)
})

test('generateSomeObjectFormString',()=>{
    const res = dynamic('test','5')
    const expectRes = {
        test1: 1,
        test2: 2,
        test3: 3,
        test4: 4,
        test5: 5
       }
    expect(res).toEqual(expectRes)
})

test('generateSomeObject try to send frist arg to number',()=>{
    const res = dynamic(6,5)
    const expectRes = "first arg must be string!";
    expect(res).toEqual(expectRes)
})