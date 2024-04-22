const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('#ingredients');

const createMarkup = array => {
  return array.map(item => {
    const ingradientsItemRef = document.createElement('li');
    ingradientsItemRef.textContent = item;
    ingradientsItemRef.classList.add('item');
    return ingradientsItemRef;
  });
};
const markup = createMarkup(ingredients);
listRef.append(...markup);
