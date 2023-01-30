const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];

// Add your code here
const indexEagle = birds.indexOf("Eagles")
if (indexEagle !== -1) {
    birds.splice(indexEagle, 1);
}

const eBirds = [];
for(const firstLetterE of birds){
   if(firstLetterE.startsWith('E')){
    eBirds.push(firstLetterE);
   }
}

// Don't edit the code below here!

const section = document.querySelector('section');

const para1 = document.createElement('p');
para1.textContent = eBirds;

section.appendChild(para1);