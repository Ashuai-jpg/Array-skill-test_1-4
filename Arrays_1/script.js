// Add your code here
const myArray = ['shuai', 'de', 'hen'];
myArray.splice(0, 2, 'zhuang', 'e');
myArray.unshift('zheshiji?');
// Don't edit the code below here!

section = document.querySelector('section');

let para1 = document.createElement('p');
para1.textContent = `Array: ${myArray}`;

section.appendChild(para1);