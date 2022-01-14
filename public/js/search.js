
const btnSearch = document.querySelector('.btnSearch');

const searchContainer =document.querySelector('.search-container');

const inputSearch = document.querySelector('#search').oninput



inputSearch = function() {
  let searchList = document.querySelectorAll('.search-list li');
  let val = this.value.trim()
  if(val !== '') {
    searchList.forEach((elem) => {
      if(elem.innerText.search(val) === -1) {
        elem.classList.add('hide')
      } else{
        elem.classList.remove('hide')
      }
    })
  }

}

console.log(searchList);

// searchContainer.addEventListener('click', (event) => {

//   event.preventDefault()

// })
