const allCategoriesRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${allCategoriesRef.length}`);

allCategoriesRef.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
