

const COLORS = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "brown", "cyan", "magenta"]


function randomColor() {
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
}
const createButton = document.getElementById('create'); 
const container = document.querySelector('.container'); 

createButton.addEventListener('click', () => {
  
  const card = document.createElement('div');
  card.classList.add('card'); 
  card.style.backgroundColor = randomColor(); 
  const description = document.createElement('p');
  description.textContent = 'Hello'; 
  card.appendChild(description); 

  const cardFooter = document.createElement('div');
  cardFooter.classList.add('card-footer'); 

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove Card';
  cardFooter.appendChild(removeButton); 

  card.appendChild(cardFooter); 

  
  container.appendChild(card);

    
    removeButton.addEventListener('click', () => {
        container.removeChild(card); 
    });

});