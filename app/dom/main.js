console.log(document);

var body = document.querySelector('body');
var section = document.querySelector('section');
var para = document.querySelector('p');

var paragraph = document.createElement('p');
var article = document.createElement('article');

console.log(paragraph);
console.log(article);
console.log(body);
console.log(section);
console.log(para);

paragraph.textContent = "Text Content Paragraph";
section.appendChild(paragraph);
