import { greetings } from "../src/greeting";

describe('greetings', () => {
    test('no input', () => {
        expect(greetings(null)).toBe('Hello, my friend');
    })

    test('single input', () => {
        expect(greetings(['Bob'])).toBe('Hello Bob.');
    })

    test('multiple input', () => {
        expect(greetings(['Alice', 'Bob', 'Jerry'])).toBe('Hello Alice, Bob and Jerry');
    })

})