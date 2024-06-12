const str = 'script.js';

const globalRegex = new RegExp('^.*\.js$', 'ig');

console.log(globalRegex.test(str));
console.log("type/javascrtipts Done");