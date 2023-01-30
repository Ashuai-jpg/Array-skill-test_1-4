let myChamp = ["Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri"];

// Add your code here
myChamp.pop();
myChamp.push('Birdie', 'Necalli ');
let index = 0;
for (const arr of myChamp) {
    // if (myChamp.indexOf(arr) !== -1) {
    //         myChamp[myChamp.indexOf(arr)] =`${arr} (${myChamp.indexOf(arr)})`
    // }
    myChamp[myChamp.indexOf(arr)] = `${arr} (${myChamp.indexOf(arr)})`
}
const myString = myChamp.join('-');
// const myString = myChamp.toStringmyChamp

// Don't edit the code below here!

const section = document.querySelector('section');

let para1 = document.createElement('p');
para1.textContent = myString;

section.appendChild(para1);