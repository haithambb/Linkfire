# Technical Task
Write a function that will receive a string as param (cannot be null).
The function should trim the param (remove whitespaces), and return another string that counts the number of times a character was present (discarding numbers).

Specification by example:
- If I send `aaaabc`, the function should return `a4b1c1`.
- If I send `a1b2c3`, the function should discard the numbers and return `a1b1c1`.
- If I send `!!oopp??`, the function should return `!2o2p2?2`.
- If I send `aabbccaabb`, the function should return `a4b4c2`.
---
# Solution Overview
To align with Linkfire’s tech stack, I chose javascript and quickly familiarized myself with `jest` to use as the testing framework.
## Approach
To solve the given technical task, I chose test-driven development (TDD) to guide my solution.
1. Wrote the test cases before writing the task code
1. Repeatedly tested my solution against all test cases

Throughout the exercise, I added edge cases and iterated over the solution to ensure test coverage and solution comprehensiveness.
## Why Test-Driven Development?
I chose this approach for a couple of reasons
1. Upstream solution testing to reduce bugs during development
1. Increase code quality
## How to run the solution
The solution lives in two files and will be run through the unit test cases 
1. `index.js` contains the function `getNumberOfOccurrencesOfNonnumericalCharsInString`
1. `index.spec.js` contains the unit test cases.
   
Optional: I added **_"Additional tests for task reviewer"_** in `index.spec.js` for the task reviewer to add additional test cases if needed.

Clone the repository and `cd` to it
```
git clone https://github.com/haithambb/Linkfire.git
cd Linkfire
```
Install `jest-cli`
```
npm i jest-cli -g
```
Install [Underscore.js](https://underscorejs.org/)
```
npm install underscore
```
Run the following to create a `package.json` file
```
npm init
```
Run the tests in `index.spec.js`
```
jest
```
The output of the test run should look something like this
```
hbayoumi@JPN Linkfire % jest
 PASS  ./index.spec.js
  ✓ Throws expected errors for invalid input (6 ms)
  ✓ Handles whitespace and empty string inputs
  ✓ Handles input with whitespace and numbers (1 ms)
  ✓ Returns expected outputs (EN)
  ✓ Returns expected outputs (non-EN) (1 ms)
  ✓ Returns escaped characters count
  ✓ Additional tests for task reviewer

Test Suites: 1 passed, 1 total
Tests:       7 passed, 7 total
Snapshots:   0 total
Time:        0.317 s, estimated 1 s
Ran all test suites.
```

## Resources
- [Test-driven development ](https://en.wikipedia.org/wiki/Test-driven_development)
- [When to Use Test Driven Development | JRebel by Perforce ](https://www.jrebel.com/blog/when-to-use-test-driven-development)
- [How to Start Unit Testing Your JavaScript Code](https://www.freecodecamp.org/news/how-to-start-unit-testing-javascript/)
