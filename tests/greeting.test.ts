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

    test('multiple input 2.0', () => {
        expect(greetings(['Alice', 'Bob', 'Jerry', 'Jenny'])).toBe('Hello Alice, Bob, Jerry and Jenny');
    })

    test('only shouting input', () => {
        expect(greetings(['BARRY'])).toBe('HELLO BARRY!');
    })

})