// let re;
// re = /hello/i;
// re = /hello/g;
// console.log(re);
// console.log(re.source);
// let result = re.exec('hello world');
// let result = re.test('Hello')
// const str = 'hello there';
// const result = str.match(re);
// console.log(result);

let re;
re = /hello/i;

re = /^h/i;  //Must start with
re = /world$/i;   //Must end with
re = /^hello$/i;  // Must begin and end with
re = /^h.llo$/i;  // . Matches any character
re = /h*llo/i;  // * Matches any character from 0 to any times
re = /gre?a?y/i; // optional characters (can be or not)
re = /gre?a?y\?/i; // Escape extra characters

// Brackers [] - Charecter sets
re = /gr[ae]y/i; 

const str = 'Gray?';
const result = re.exec(str);
console.log(result);


function reTest(re, test) {
  if(re.test(test)) {
    console.log(`${str} matches ${re.source}`)
  } else {
    console.log(`${str} does NOT matches ${re.source}`)
  }
}

reTest(re, str);