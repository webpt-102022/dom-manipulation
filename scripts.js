
// Select by id
const head = document.getElementById('heading');
head.innerHTML = `<h4>Hello world</h4><p>This is written from JS</p>`
console.log(head)

// Select by class name => returns an HTML collection
const cards = document.getElementsByClassName('card');

for (let i = 0; i < cards.length; i++) { // I can iterate through HTML collection
  console.log(cards[i])
}

// Select by class name => returns an HTML collection
const links = document.getElementsByTagName('a');
console.log(links)

const btn = document.getElementById('cta-btn');

// Select by query selector => returns a Nodelist (same)
// I can search classes ('.class'), ids ('#id') or tags ('article')
const collection = document.querySelector('#cta-btn');
console.log(collection)

// To apply array methods, I must transform into an array:
const arr = Array.from(cards);
arr.forEach(elem => console.log(elem))
// console.log(arr)

const h4s = document.getElementsByTagName('h4');

// I can change their content and style
h4s[1].innerText = 'This does not include html tags'
// h4s[1].style = `color: red; font-size: 20px;`
h4s[1].style.color = 'red';
h4s[1].style.fontSize = '21px';

// I can change their attributes, add them, remove them, etc
h4s[1].id = 'first-h4'
h4s[1].className = 'js-h4'

console.log(h4s[1].getAttribute('id'));

const suggestionBtn = document.getElementById('sug-btn');

// I can add or delete from a class list
suggestionBtn.classList.add('show');
suggestionBtn.classList.remove('class-2');
suggestionBtn.classList.replace('btn', 'button');