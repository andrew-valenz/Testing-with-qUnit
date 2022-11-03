// IMPORT MODULES under test here:
import {
    addExclamationPoints,
    divideThenMultiply,
    multiplyBy12ThenHalve,
    multiplyBySeven,
    myFunction,
} from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = true;

    const actual = myFunction();

    expect.equal(actual, expected, 'true = true');
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

test('this test should add 3 exclamation points', (expect) => {
    const expected1 = 'bunny rabbit!!!';
    const actual1 = addExclamationPoints('bunny rabbit');
    expect.equal(actual1, expected1);

    const expected2 = 'dog!!!';
    const actual2 = addExclamationPoints('dog');
    expect.equal(actual2, expected2);

    const expected3 = 'horse!!!';
    const actual3 = addExclamationPoints('horse');
    expect.equal(actual3, expected3);
});

test('this test should equal 28', (expect) => {
    const expected1 = '28';
    const actual1 = multiplyBySeven('4');
    expect.equal(actual1, expected1);

    const expected2 = '49';
    const actual2 = multiplyBySeven('7');
    expect.equal(actual2, expected2);

    const expected3 = '21';
    const actual3 = multiplyBySeven('3');
    expect.equal(actual3, expected3);
});
//Test 3
test('This test should multiply by 12 then divide by 2', (expect) => {
    const expected1 = '24';
    const actual1 = multiplyBy12ThenHalve('4');
    expect.equal(actual1, expected1);

    const expected2 = '12';
    const actual2 = multiplyBy12ThenHalve('2');
    expect.equal(actual2, expected2);

    const expected3 = '0';
    const actual3 = multiplyBy12ThenHalve('0');
    expect.equal(actual3, expected3);
});

//Test 4
test('This function should take in three numbers, divide the first by the second, then multiply the result by the third', (expect) => {
    const expected1 = 10;
    const actual1 = divideThenMultiply(8, 4, 5);
    expect.equal(actual1, expected1);

    const expected2 = 2;
    const actual2 = divideThenMultiply(10, 10, 2);
    expect.equal(actual2, expected2);

    const expected3 = 4;
    const actual3 = divideThenMultiply(10, 5, 2);
    expect.equal(actual3, expected3);
});
