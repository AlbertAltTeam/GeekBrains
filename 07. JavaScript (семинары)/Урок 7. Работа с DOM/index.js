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

const form = document.querySelector('form');
const input = document.querySelector('input');
const btn = document.querySelector('.btn');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if(input.value.trim() === '') {
        const errorMassage = document.createElement('h2');
        errorMassage.textContent = 'Вы не заполнили поле ввода';
        errorMassage.style.border = '2px solid red';
        form.insertBefore(errorMassage, btn);
    }
})
