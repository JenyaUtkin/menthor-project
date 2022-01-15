//const inputSearch = document.querySelector('#search')
const myForm = document.forms.searchTag;
const searchList = document.querySelector('#search-list');
const btnTags = document.querySelector('.btn-tags');
//const btn = document.querySelector('.btn')

const btns = document.querySelectorAll('.btn')

btns.forEach(el => {

    el.addEventListener('click', async (event) => {
      event.preventDefault()
      const formData = event.target.value

        const res = await fetch('/search', {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({formData})
  })
  if(res.ok) {
    const dataFromBack = await res.json()
    //console.log(dataFromBack)
    for (let i = 0; i < dataFromBack.length; i++) {
    

      searchList.insertAdjacentHTML('afterbegin',`

        <li>
        <div class="col s12 m7">
        <div class="card">
          <div class="card-image">
            <img src="${(dataFromBack[i]).img}">
            <span class="card-title">${(dataFromBack[i]).name}</span>
          </div>
          <div class="card-content">
            <p>${(dataFromBack[i]).body}</p>
          </div>
          <div class="card-action">
            <a href="#">Подробней</a>
          </div>
        </div>
      </div>
        </li>
    `)
    }
  }
    });

});

  
document.querySelector('#search').oninput = function() {
    let searchList = document.querySelectorAll('#search-list li');
    let val = this.value.trim().toLowerCase()
    if(val !== '') {
        searchList.forEach((elem) => {
            if(elem.innerText.toLowerCase().search(val) === -1) {
                elem.classList.add('hide')
              } else{
                  elem.classList.remove('hide')
                }
              })
          }else {
            searchList.forEach((elem) => {
              elem.classList.remove('hide')
          })
        }
      }

