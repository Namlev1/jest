import hello from "../src/hello";

test('First test', () => {
    expect(hello()).toEqual('hello')
})

test('Should fail', () => {
    expect(hello()).toEqual('not hello')
})
