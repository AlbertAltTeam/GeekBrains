
import { dataInfo } from './data.js';

const data = JSON.parse(dataInfo);

console.log(data);

const content = document.querySelector('.content');

// data.forEach(({id, name, age, url}) => {
//     const div = document.createElement('div');
//     div.classList.add('card');

//     const img = document.createElement('img');
//     img.classList.add('card-img-top');
//     img.src = url;

//     const cardBody = document.createElement('div');
//     cardBody.classList.add('card-body');

//     const title = document.createElement('h5');
//     title.classList.add('card-title');
//     title.textContent = name;

//     const subtitle = document.createElement('h6');
//     subtitle.classList('card-title', 'mb-2', 'text-muted');
//     subtitle.textContent = age;

//     const idPara = document.createElement('p');
//     idPara.classList.add('card-text');
//     idPara.textContent = `ID ${id}`

//     cardBody.appendChild(title);
//     cardBody.appendChild(subtitle);
//     cardBody.appendChild(idPara);

//     div.appendChild(img);
//     div.appendChild(cardBody);

//     content.appendChild(div);

// })


data.forEach(({ id, name, age, url }) => {
  const div = document.createElement("div");
  div.classList.add("card");

  const img = document.createElement("img");
  img.classList.add("card-img-top");
  img.src = url;

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.textContent = name;

  const subtitle = document.createElement("h6");
  subtitle.classList.add("card-title", "mb-2", "text-muted");
  subtitle.textContent = age;

  const idPara = document.createElement("p");
  idPara.classList.add("card-text");
  idPara.textContent = `ID ${id}`;

  cardBody.appendChild(title);
  cardBody.appendChild(subtitle);
  cardBody.appendChild(idPara);

  div.appendChild(img);
  div.appendChild(cardBody);

  content.appendChild(div);
});
