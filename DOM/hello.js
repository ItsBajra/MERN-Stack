let titleElement = document.getElementById('heading');
console.log(titleElement.textContent);
let content1 = titleElement.textContent;

let titleClass = document.getElementsByClassName('content');
console.log(titleClass[0]);

const contentElements = document.getElementsByClassName('content');
console.log(contentElements[0].textContent);

const listItemElements = document.getElementsByTagName('li');
console.log(listItemElements.length);

titleElement.textContent = 'Hello, OpenAI';
console.log(titleElement);

content1 = 'Hello ChatGPT';
console.log(content1)

// This selects all the element
const paragraphElement = document.querySelectorAll('.content');
for (element of paragraphElement) {
    element.innerHTML = 'This is a <strong>modified</strong> paragraph.'
};

// This selects one
// const paragraphElement = document.querySelector('.content');
// paragraphElement.innerHTML = 'This is a <strong>modified</strong> paragraph.'

var inputElement = document.getElementById('myInput');
console.log(inputElement.type);
console.log(inputElement.value);

let button = document.getElementById('btn');
button.addEventListener('click', function(){
    inputElement.value = 'Hello World!';
})

var element = document.getElementById('myInput');
if (element.hasAttribute('value')) {
    // Attribute exists
    console.log('Exists')
}
else {
    console.log("Doesn't Exists")
    // Attribute doesnot exist
}