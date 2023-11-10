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

    test('mixed input', () => {
        expect(greetings(['JAY', 'Maya', 'Alice', 'BOB', 'Charlotte'])).toBe('Hello Maya, Alice and Charlotte. HELLO JAY AND BOB!');
    })

    test('entry contains comma input', () => {
        expect(greetings(['Jerry', 'Alice, Bob'])).toBe('Hello Jerry, Alice and Bob.');
    })

    test('entry contains more than 1 comma', () => {
        expect(greetings(['Jerry', 'Alice, Jenny, Bob'])).toBe('Hello Jerry, Alice, Jenny and Bob.');
    })

    test('entry contains comma input and shouting', () => {
        expect(greetings(['JERRY', 'ALICE, BOB'])).toBe('HELLO JERRY, ALICE AND BOB!');
    })

})