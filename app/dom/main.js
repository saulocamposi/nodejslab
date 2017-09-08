function setStack(elements){

}

function createElement(element, addElementStack, document, setStack){
  var elem = document.createElement(element);
  addElementStack(elem, setStack);
  return elem;
}

function addElementStack(element, setStack){
  var elements = [];
  elements.push(element);
  console.log( "Element were added" + element );
  setStack(elements);
}

function logElement(stackElements){
  stackElements.forEach(function(element){
    console.log(element);
  });
}




console.log(document);


var body = document.querySelector('body');
var section = document.querySelector('section');
var para = document.querySelector('p');

//var paragraph = document.createElement('p');
//var article = document.createElement('article');
//var button = document.createElement('button');

var paragraph = createElement('p', addElementStack, document, setStack );



var article = document.createElement('article');
var button = document.createElement('button');



button.setAttribute('id', 'eventClick');
button.innerHTML = 'Click On me';

document.body.appendChild(button);

console.log(button);
console.log(paragraph);
console.log(article);
console.log(body);
console.log(section);
console.log(para);

paragraph.textContent = "Text Content Paragraph";
section.appendChild(paragraph);
