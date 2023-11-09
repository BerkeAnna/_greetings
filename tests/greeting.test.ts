import { greetings } from "../src/greeting";

describe('greetings', () => {
    test('no input', () => {
    expect(greetings(null)).toBe('Hello, my friend');
    })

})