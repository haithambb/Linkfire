var _ = require('underscore');
function getNumberOfOccurrencesOfNonnumericalCharsInString(inputString){
    if (inputString === null) {
        throw new Error('The input cannot be null!');
    }
    var trimmedInput = inputString.replace(/\s+|\d+/g, '');
    if (trimmedInput === "") {
        return "";
    }
    // Code adapted from Stack Overflow example:
    // https://stackoverflow.com/questions/19480916/count-number-of-occurrences-for-each-char-in-a-string
    var nonnumericalCharArray = Array.from(trimmedInput);
    var charCountObject = _.countBy(nonnumericalCharArray, function (count) {
        return count;
    });
    // Code adapted from Stack Overflow example:
    // https://stackoverflow.com/questions/5612787/converting-an-object-to-a-string
    var outputString = Object.entries(charCountObject).reduce((str, [char, count]) => {
        return `${str}${char}${count}`;
    }, '');
    return outputString;
}
module.exports = getNumberOfOccurrencesOfNonnumericalCharsInString;
