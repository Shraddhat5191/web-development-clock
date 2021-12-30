// function disableBtn() {
//   document.getElementById("myBtn");
// }
// con=0
// var div=document.getElementById("postDiv")


// axios.get("https://jsonplaceholder.typicode.com/photos")
// .then(function (resp) {


// function disableBtn(page=1){
//   for(let index=(page-1)*10;index<page*10;index++){
//     div.innerHTML+=`
//     <div class="col-4 m-1 bordar bordar-dark card mx-auto">
        
            
//             <div class="card-body">
//                 <h5 class="card-title">${resp.data[con].id}</h5>
//                 <p class=card-text">${resp.data[con].title}</p> 
//             </div>
//             <img class="card-img-top" src="${resp.data[con].thumbnailUrl}">
//             </div>    
//     `
//     con=con+1
// }
// }

// })
// .catch(function (error) {
//   console.log(error);
// })


var btn=document.getElementById("btn").addEventListener("click",button);
con=0
var div=document.getElementById("postDiv")
  function button(page){
    axios.get("https://jsonplaceholder.typicode.com/photos")
  .then(function (resp) {
        console.log(page,"page hai");
        div.innerHTML=""
        for(let index=(page-1)*10;index<page*10;index++){
        div.innerHTML+=`
        <div class="col-4 m-1 bordar bordar-dark card mx-auto">
                <div class="card-body">
                    <h5 class="card-title">${resp.data[con].id}</h5>
                    <p class=card-text">${resp.data[con].title}</p> 
                </div>
                <img class="card-img-top" src="${resp.data[con].thumbnailUrl}">
        </div>    
        `
        con=con+1
    }
  
  })
  .catch(function (error) {
    console.log(error);
  })
}


