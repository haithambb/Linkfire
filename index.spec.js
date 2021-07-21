const getNumberOfOccurrencesOfNonnumericalCharsInString = require("./index");

test("Throws expected errors for invalid input", () => {
    expect(() => {getNumberOfOccurrencesOfNonnumericalCharsInString(null);}).toThrowError();
});

test("Handles whitespace and empty string inputs", () => {
    expect(getNumberOfOccurrencesOfNonnumericalCharsInString("\t\r\n")).toBe("");
    expect(getNumberOfOccurrencesOfNonnumericalCharsInString("")).toBe("");
});

test("Handles input with whitespace and numbers", () => {
    expect(getNumberOfOccurrencesOfNonnumericalCharsInString("\t\r\n")).toBe("");
    expect(getNumberOfOccurrencesOfNonnumericalCharsInString("")).toBe("");
    expect(getNumberOfOccurrencesOfNonnumericalCharsInString("\t1234\n44334   ")).toBe("");
    expect(getNumberOfOccurrencesOfNonnumericalCharsInString("a\t\r\n")).toBe("a1");
    expect(getNumberOfOccurrencesOfNonnumericalCharsInString("aabb\t\r\nccaabb")).toBe("a4b4c2");
});

test("Returns expected outputs (EN)", () => {
    expect(getNumberOfOccurrencesOfNonnumericalCharsInString("aaaabc")).toBe("a4b1c1");
    expect(getNumberOfOccurrencesOfNonnumericalCharsInString("aaaabc")).toBe("a4b1c1");
    expect(getNumberOfOccurrencesOfNonnumericalCharsInString("!!oopp??")).toBe("!2o2p2?2");
    expect(getNumberOfOccurrencesOfNonnumericalCharsInString("aabbccaabb")).toBe("a4b4c2");
});

test("Returns expected outputs (non-EN)", () => {
    expect(getNumberOfOccurrencesOfNonnumericalCharsInString("非同期コードドドドドド")).toBe("非1同1期1コ1ー1ド6");
    expect(getNumberOfOccurrencesOfNonnumericalCharsInString("ккккрасиваяяяяяяяя mirrora")).toBe("к4р1а2с1и1в1я8m1i1r3o1a1");
});

test("Returns backslack and single quotes count", () => {
    expect(getNumberOfOccurrencesOfNonnumericalCharsInString('\\\\\'\'')).toBe('\\2\'2');
});

test("Additional tests for task reviewer", () => {
    // Please add any additional test cases you can think of here
})
