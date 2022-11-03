// IMPORT MODULES under test here:
import { addExclamationPoints, multiplyBySeven, myFunction } from '../functions.js';

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
