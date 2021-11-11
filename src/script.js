'use strict';

const addProducts = document.querySelector('.add-product');
const inputValue = document.getElementById('user-input');
let productsContainer = document.querySelector('.hero-content');
const numberOfProducts = document.querySelector('.products-number');
const deleteProducts = document.querySelector('.hero-info__delete');
let productCounter = 0;

/* numberOfProducts.textContent = '0';

addProducts.addEventListener('click', () => {
  if (inputValue.value !== '') {
    productCounter++;
    const newElement = document.createElement('p');
    newElement.classList.add('product');
    newElement.innerText = inputValue.value;
    productsContainer.append(newElement);
    numberOfProducts.textContent = productCounter;
  }
});

deleteProducts.addEventListener('click', () => {
  productsContainer.innerHTML = '';
  productCounter = 0;
  numberOfProducts.textContent = productCounter;
});
 */

addProducts.addEventListener('click', () => {
  let arrayOfProducts = [];
  if (inputValue.value !== '') {
    productCounter++;
    arrayOfProducts.push(inputValue.value);
    displayData(arrayOfProducts);
    numberOfProducts.textContent = productCounter;
  }

  deleteProducts.addEventListener('click', () => {
    productsContainer.innerHTML = '';
    productCounter = 0;
    numberOfProducts.textContent = productCounter;
  });
});

const displayData = function (arrayOfProducts) {
  arrayOfProducts.map((value) => {
    const item = `<p  class="product">${value}</p>`;
    productsContainer.insertAdjacentHTML('beforeend', item);
  });
};
