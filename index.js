const projects = [
  {    name: 'Tonic',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  image: 'vectors/snap20.png',
  technologies: ['html', 'css', 'javascript'],
    live: '#',
    source: '#',
    company: 'CANOPY'
  },
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'vectors/snap4.png',
    technologies: ['html', 'css', 'javascript'],
    live: '#',
    source: '#',
    company: 'FACEBOOK'
  },
  {
    name: 'Facebook 360',
    description: 'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    image: 'vectors/snap.png',
    technologies: ['html', 'css', 'javascript'],
    live: '#',
    source: '#',
    company: 'FACEBOOK'
    },
{
name: 'Uber Navigation',
description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
image: 'vectors/snap2.png',
technologies: ['html', 'css', 'javascript'],
live: '#',
source: '#',
company: 'UBER'
},
{
name: 'Tonic',
description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
image: 'vectors/snap3.png',
technologies: ['html', 'css', 'javascript'],
live: '#',
source: '#',
company: 'CANOPY'
},
];
const projectsContainer = document.querySelector('.grid-container');
for (const project of projects) {
// Create the card
const card = document.createElement('div');
card.classList.add('card');
// Create the image
const image = document.createElement('img');
image.classList.add('card-img');
image
.src = project.image;
card.appendChild(image);
// Create the left block
const leftBlock = document.createElement('div');
leftBlock.classList.add('left-block');
card.appendChild(leftBlock);
// Create the card body
const cardBody = document.createElement('div');
cardBody.classList.add('card-body');
leftBlock.appendChild(cardBody);
// Create the card title
const cardTitle = document.createElement('h5');
cardTitle.classList.add('card-title');
cardTitle.textContent = project.name;
cardBody.appendChild(cardTitle);
//Create the card description
const cardDescription = document.createElement('p');
cardDescription.classList.add('card-description');
cardDescription.textContent = project.description;
cardBody.appendChild(cardDescription);
// Create the card list
const cardList = document.createElement('ul');
cardList.classList.add('card-list');
cardBody.appendChild(cardList);
// Create the card text
const cardText = document.createElement('li');
cardText.classList.add('card-text');
cardText.textContent = project.technologies.join(', ');
cardList.appendChild(cardText);
// Create the dot
const dot = document.createElement('li');
dot.classList.add('dot');
cardList.appendChild(dot);
// Create the dev
const dev = document.createElement('li');
dev.classList.add('dev');
if (project.name === 'Tonic') {
  dev.textContent = 'Back End Dev';
} else if (project.name === 'Multi-Post Stories' || project.name === 'Facebook 360') {
  dev.textContent = 'Full Stack Dev';
} else if (project.name === 'Uber Navigation') {
  dev.textContent = 'Lead Developer';
}
cardList.appendChild(dev);
// Create the year
const year = document.createElement('li');
year.classList.add('year');
year.textContent = '2015';
cardList.appendChild(year);
// Append the card to the container
projectsContainer.appendChild(card);
}