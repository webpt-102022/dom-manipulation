const newArticle = document.createElement('article');
newArticle.className = 'card';

const heading = document.createElement('h4');
heading.innerText = 'Whatever';

const paragraph = document.createElement('p');
paragraph.innerText = 'This is a paragraph';

newArticle.appendChild(heading);
newArticle.appendChild(paragraph);

const listOfMains = document.getElementsByTagName('main');
const main = listOfMains[0];

main.prepend(newArticle);

const btn = document.getElementById('cta-btn');
const articles = document.getElementsByClassName('card');
const secondArticle = articles[1];
secondArticle.removeChild(btn);

