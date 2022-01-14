// const {formochka} = document.forms;
// formochka.addEventListener('submit', async (e)=>{
//     e.preventDefault()
//     if
//     const updatePost = {singer:formochka.singer.value, songTitle:formochka.songTitle.value}
//     console.log(formochka.singer.value);
//     const res = await fetch(`/profile/${formochka.dataset.userid}`,
//     {
//         method:'PUT', 
//         headers:{
//             'Content-type':'application/json'
//         },
//         body:JSON.stringify(updatePost)
//     });
//     if(res.status === 200) {
//      window.location.assign('/')
//     }else{
//         alert('mmmmllllaaaaaaaaaaaaaaaaaa')
//     }
// })