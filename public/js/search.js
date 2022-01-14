

  
document.querySelector('#search').oninput = function() {
    let searchList = document.querySelectorAll('.search-list li');
    let val = this.value.trim().toLowerCase()
    if(val !== '') {
      console.log('1')
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

