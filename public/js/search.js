const inputSearch = document.querySelector('#search')
const myForm = document.forms.searcher3000;
const searchList = document.querySelector('.search-list');

myForm.addEventListener('submit', async (event) => {
  event.preventDefault()
  const formData = event.target.search.value
  const res = await fetch('/search', {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({formData})
  })
  if(res.ok) {
    const dataFromBack = await res.json()
    console.log(dataFromBack)
    for (let i = 0; i < dataFromBack.length; i++) {
    
  
      searchList.insertAdjacentHTML('afterbegin',`

      <div class="mdl-cell demo-card-square mdl-card mdl-shadow--2dp ">
      <img src="${(dataFromBack[i]).img}">
          <div class="mdl-card__title mdl-card--expand">
        <h2 class="mdl-card__title-text">${(dataFromBack[i]).name}</h2>
        </div>
        <div class="mdl-card__supporting-text">
        ${(dataFromBack[i]).body}
        </div>
        <div class="mdl-card__actions mdl-card--border">
      <a href="user/profile/${(dataFromBack[i]).id}" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
        Подробнее
      </a>
      </div>
      </div>`)
    }
  }
})

// c
// searchList.insertAdjacentHTML('afterend', `
// <div class="mdl-cell demo-card-square mdl-card mdl-shadow--2dp">
// <img src="${this}">
//     <div class="mdl-card__title mdl-card--expand">
//   <h2 class="mdl-card__title-text">{{this.name}}</h2>
//   </div>
//   <div class="mdl-card__supporting-text">
//     {{this.body}}
//   </div>
//   <div class="mdl-card__actions mdl-card--border">
// <a href="user/profile/{{this.id}}" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
//   Подробнее
// </a>
// </div>
// </div>
// `)

  
// document.querySelector('#search').oninput = function() {
//     let searchList = document.querySelectorAll('.search-list');
//     let val = this.value.trim().toLowerCase()
//     if(val !== '') {
//       console.log('1')
//         searchList.forEach((elem) => {
//             if(elem.innerText.toLowerCase().search(val) === -1) {
//                 elem.classList.add('hide')
//               } else{
//                   elem.classList.remove('hide')
//                 }
//               })
//           }else {
//             searchList.forEach((elem) => {
//               elem.classList.remove('hide')
//           })
//         }
//       }

