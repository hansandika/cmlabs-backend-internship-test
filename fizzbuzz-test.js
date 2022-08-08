/**
 * @param {number} [start]
 * @param {number} [end]
 */
function fizzBuzz(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('FizzBuzz');
    } else if (i % 3 == 0) {
      console.log('Fizz');
    } else if (i % 5 == 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(1, 100);
