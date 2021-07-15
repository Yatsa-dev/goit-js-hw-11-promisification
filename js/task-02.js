const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsContainer = document.querySelector('#ingredients');

const ingredientEl = ingredients.map
    (ingredient => {
        const item = document.createElement('li')
        item.textContent= ingredient;
        return item
    }
)
    ingredientsContainer.append(...ingredientEl)
console.log(ingredientEl);

