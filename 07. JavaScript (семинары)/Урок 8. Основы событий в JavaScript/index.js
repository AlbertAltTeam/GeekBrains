// const block = document.querySelector('.block');

// const itemDiv = document.createElement('div');
// itemDiv.classList.add('item');
// itemDiv.textContent = 'Элемент внутри';

// itemDiv.style.color = 'blue';
// itemDiv.style.border = '1px solid black';
// itemDiv.style.backgroundColor = '#f8f8f8';
// itemDiv.style.padding = '16px';

// block.appendChild(itemDiv);

// block.setAttribute('class', 'item_1');


// const textElem = document.querySelector('.text');

// const headingElem = textElem.previousElementSibling;
// console.log(headingElem);

// const contentElem = textElem.parentNode;
// console.log(contentElem);

// const imgElem = document.querySelector('img');
// console.log(imgElem);

// const elemElem = contentElem.parentNode;
// console.log(elemElem);

// const h2Element = document.querySelector('h2.subtitle');

// let parentElement = h2Element.parentNode;
// console.log(parentElement);

// while (parentElement) {
//     console.log(parentElement);
//     parentElement = parentElement.parentNode;
    
// }

// const form = document.querySelector('form');
// const input = document.querySelector('input');
// const btn = document.querySelector('.btn');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     if(input.value.trim() === '') {
//         const errorMassage = document.createElement('h2');
//         errorMassage.textContent = 'Вы не заполнили поле ввода';
//         errorMassage.style.border = '2px solid red';
//         form.insertBefore(errorMassage, btn);
//     }
// })



// document.getElementById('myButton').onclick = function() {
//     console.log('событие onclick');
// }

// document.getElementById('myButton').addEventListener('click', function() {
//     console.log('событие addEventListener');
// })

// window.onload = function() {
//     console.log('страница загрузилась');
// }

// document.getElementById('button1').onclick = function() {
//     console.log('Нажата кнопка 1');
// }
// document.getElementById('button2').onclick = function() {
//     console.log('Нажата кнопка 2');
// }
// document.getElementById('button3').onclick = function() {
//     console.log('Нажата кнопка 3');
// }

// let clickCount = 0
// document.getElementById('button4').onclick = function() {
//     clickCount++
//     console.log(`Кнопка 4 нажата ${clickCount} раз`);
// }

// document.getElementById('button5').addEventListener('click', function() {
//     this.innerText = 'Вы нажали на кнопку';
// })

// document.getElementById('add').addEventListener('click', () => {
//     const heading = document.createElement('h1');
//     heading.innerText = 'Новый заголовок';
//     const button = document.getElementById('add');
//     button.parentNode.insertBefore(heading, button.nextSibling)
// })

// document.getElementById('remove').addEventListener('click', () => {
//     const heading = document.querySelector('h1');
//     if(heading) {
//         heading.parentNode.removeChild(heading);
//     }
// })

// const hoverButton = document.getElementById('hover');
// hoverButton.addEventListener('mouseover', () => {
//     console.log('Вы на вели на данную кнопку');
// })
// hoverButton.addEventListener('mouseout', () => {
//     console.log('Вы убрали курсор');
// })


// const list = document.getElementById('myList');
// const addButton = document.getElementById('add');
// const removeButton = document.getElementById('remove');
// const addClassButton = document.getElementById('addClass');

// addButton.addEventListener('click', () => {
//     const newItem = document.createElement('li');
//     newItem.innerText = 'Новый элемент';
//     list.appendChild(newItem);
// });

// removeButton.addEventListener('click', () => {
//     const firstItem = list.querySelector('li:first-child');
//     if(firstItem) {
//         list.removeChild(firstItem);
//     }
// });

// addClassButton.addEventListener('click', () => {
//     addClassButton.classList.add('click');
// });