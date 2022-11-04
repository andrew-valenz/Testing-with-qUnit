// IMPORT MODULES under test here:
import {
    addExclamationPoints,
    divideThenMultiply,
    getLastItem,
    getSecondItem,
    makeLuckyGreeting,
    multiplyBy12ThenHalve,
    multiplyBySeven,
    myFunction,
    renderDogDiv,
    renderDogLI,
    returnAsAnArray,
    returnAsAString,
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

test('this function should return numbers in an array', (expect) => {
    const expected1 = [8, 4, 5];
    const actual1 = returnAsAnArray(8, 4, 5);
    expect.deepEqual(actual1, expected1);

    const expected2 = [9, 6, 3];
    const actual2 = returnAsAnArray(9, 6, 3);
    expect.deepEqual(actual2, expected2);

    const expected3 = [12, 6, 14];
    const actual3 = returnAsAnArray(12, 6, 14);
    expect.deepEqual(actual3, expected3);
});

test('This function should take in three numbers and return those numbers mushed together as a string', (expect) => {
    const expected1 = '845';
    const actual1 = returnAsAString(8, 4, 5);
    expect.equal(actual1, expected1);

    const expected2 = '456';
    const actual2 = returnAsAString(4, 5, 6);
    expect.equal(actual2, expected2);

    const expected3 = '987';
    const actual3 = returnAsAString(9, 8, 7);
    expect.equal(actual3, expected3);
});

test('This function should take in two numbers and return a greeting announcing that the sum of those numbers is todays lucky number', (expect) => {
    const expected1 = 12;
    const actual1 = makeLuckyGreeting(8, 4);

    expect.equal(actual1, expected1);

    const expected2 = 5;
    const actual2 = makeLuckyGreeting(2, 3);

    expect.equal(actual2, expected2);

    const expected3 = 9;
    const actual3 = makeLuckyGreeting(4, 5);

    expect.equal(actual3, expected3);
});

test('This function should take an array and return the second item in the array', (expect) => {
    const expected1 = 'apple';
    const actual1 = getSecondItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.equal(actual1, expected1);

    const expected2 = 'socks';
    const actual2 = getSecondItem(['shoes', 'socks', 'shirt', 'pant']);

    expect.equal(actual2, expected2);

    const expected3 = 'forks';
    const actual3 = getSecondItem(['knives', 'forks', 'spoons', 'spatulas']);

    expect.equal(actual3, expected3);
});

test('This function should take an array and return the LAST item in the array, no matter the arrays length', (expect) => {
    const expected1 = 'plum';
    const actual1 = getLastItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.equal(actual1, expected1);

    const expected2 = 'pencil';
    const actual2 = getLastItem(['paper', 'scissors', 'pen', 'pencil']);

    expect.equal(actual2, expected2);

    const expected3 = 'cube';
    const actual3 = getLastItem(['triangle', 'circle', 'square', 'cube']);

    expect.equal(actual3, expected3);
});

test('This function should take a dog object and return an <li> with the name of the dog', (expect) => {
    const expected1 = '<li>Benny</li>';
    const actual1 = renderDogLI({ name: 'Benny', age: 6 });

    expect.equal(actual1, expected1);

    const expected2 = '<li>Lex</li>';
    const actual2 = renderDogLI({ name: 'Lex', age: 6 });

    expect.equal(actual2, expected2);

    const expected3 = '<li>Bear</li>';
    const actual3 = renderDogLI({ name: 'Bear', age: 6 });

    expect.equal(actual3, expected3);
});

test('this function should take a dog object and return a div with the dogs information', (expect) => {
    const expected1 = '<div><h1>Benny</h1><p>Benny is 6 years old</p></div>';
    const actual1 = renderDogDiv({ name: 'Benny', age: 6 });

    expect.equal(actual1, expected1);

    const expected2 = '<div><h1>Smoosh</h1><p>Smoosh is 2 years old</p></div>';
    const actual2 = renderDogDiv({ name: 'Smoosh', age: 2 });

    expect.equal(actual2, expected2);

    const expected3 = '<div><h1>Leia</h1><p>Leia is 3 years old</p></div>';
    const actual3 = renderDogDiv({ name: 'Leia', age: 3 });

    expect.equal(actual3, expected3);
});
