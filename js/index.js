//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
const e = document.createElement('div')
e.innerHTML='hllo there'
e.style.color='#6666'
document.body.appendChild(e);
let ul=document.createElement('ul');
let li=document.createElement('li');
li.innerHTML='you';
ul.appendChild(li);
e.appendChild(ul)
