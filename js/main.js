const mainColor = document.querySelectorAll('.main__color-btn');
const headColor = document.querySelectorAll('.head-item');

mainColor.forEach(function(element) {
  element.addEventListener('click', open)
})
function open(event) {
  const target = event.currentTarget;
  const button = target.dataset.button;
  const headActive = document.querySelectorAll(`.${button}`);

  mainColor.forEach(function(item) {
    item.classList.remove('main__color-btn--active')
  })
  target.classList.add('main__color-btn--active')
  headColor.forEach(function(item) {
    item.classList.remove('head-item--active')
  });
  headActive.forEach(function(item) {
    item.classList.add('head-item--active')
  })
}
