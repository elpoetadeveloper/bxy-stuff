const btnPage = document.querySelector('#btn-page');
const main = document.querySelector('#main-template');
const template = '<h2>New Content</h2>';
btnPage.addEventListener('click', e => {
  main.innerHTML = template;
});