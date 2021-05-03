// IMPORT MODULES under test here:
import { checkForYes } from '../utils.js';

const test = QUnit.test;

test('should take anything that starts with a y and return true', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = checkForYes('yes');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('should take anything that doesnt start with a y and return false', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = checkForYes('naaah');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
