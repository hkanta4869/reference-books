
new Splide('.splide',{
    perPage:1,
    type:'loop',
    autoScroll:{
      speed:3,
    },
    
}).mount(window.splide.Extensions);




//参考書検索機能
const btn = document.getElementById("button");
const searchInput = document.getElementById("search");
 const parts = document.querySelectorAll(".reference-part");

btn.onclick = function () {
    const search = searchInput.value ;

   

    parts.forEach((part) => {
        const book = part.querySelector(".reference-name");

        if (book.textContent.includes(search)) {
            part.classList.remove("hidden")
        } else {
            part.classList.add("hidden")
        }
    });
    hamreset();
};
//著者フィルター
const author = document.getElementById("Sort")
author.addEventListener('change', (e) => {
 
  const selectValue  = e.target.value;
  if(selectValue === "1"){
    parts.forEach((part) => { 
        if (part.dataset.author === "関正生") {
            part.classList.remove("hidden")
        } else {
            part.classList.add("hidden")
        }
      });
      hamreset();
      authorreset();
  }

});

 function authorreset(){
   const authorReset = document.getElementById("Sort");
   authorReset.value='';
 }
//難易度フィルター
const level = document.getElementById("level-filter")
level.addEventListener('change',(e)=>{
  
  const selectValue1 = e.target.value;
  if(selectValue1 === "1"){
    parts.forEach((part) =>{
      if(part.dataset.level === "基礎"){
        part.classList.remove("hidden")
      }
      
      else{
        part.classList.add("hidden")
      }
     
    })
  }
if(selectValue1 === "3"){
  parts.forEach((part) =>{
    if(part.dataset.level ==="発展"){
      part.classList.remove("hidden")
    }
    else{
      part.classList.add("hidden")
    }
  })
}
hamreset();
levelReset();
})

function levelReset(){
  const levelreset = document.getElementById("level-filter")
  levelreset.value = '';
}

//検索結果リセット
const resetbutton = document.getElementById("reset");
resetbutton.addEventListener('click',(e)=>{
   parts.forEach((part)=>{
    part.classList.remove("hidden")
   })
  hamreset();
})




//ハンバーガーメニュー
const ham = document.getElementById("hamburger");
const hambutton = document.getElementById("hamburger-button")

hambutton.addEventListener('click',function(){
  ham.classList.toggle('active');
  hambutton.classList.toggle('active');
})

function hamreset (){
  ham.classList.remove('active')
  hambutton.classList.remove('active')
}