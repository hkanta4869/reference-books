
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
  }
  if(selectValue === "2"){
    parts.forEach((part)=>{
      if(part.dataset.author === "Zkai"){
        part.classList.remove("hidden")
      }else{
        part.classList.add("hidden")
      }
    })
  }
   authorreset();
   hamreset();
});

 function authorreset(){
   const authorReset = document.getElementById("Sort");
   authorReset.value='';
 }

//参考書ジャンルフィルター
const book_kinds=  document.getElementById("book-kinds")
book_kinds.addEventListener('change',(e)=>{
  const selectkinds = e.target.value;
  if(selectkinds === "1"){
    parts.forEach((part) =>{
      if(part.dataset.kinds === "words"){
        part.classList.remove("hidden")
      }else{
        part.classList.add("hidden")
      }
    })
  }
  if(selectkinds === "2"){
    parts.forEach((part) =>{
      if(part.dataset.kinds === "grammar"){
        part.classList.remove("hidden")
      }else{
        part.classList.add("hidden")
      }
    })
  }

  hamreset();
});

//難易度フィルター
            //data-sortlevel=0
            //data-sortlevel=1
            //data-sortlevel=2
            //data-sortlevel=3
            //data-sortlevel=4
            //data-sortlevel=5
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
resetbutton.addEventListener('click',()=>{
   parts.forEach((part)=>{
    part.classList.remove("hidden")
   })
  sortreset();
  authorreset();
  hamreset();
})

//絞り込み検索


//各reference-partを配列に格納
const partLists = Array.from(parts)
console.log(partLists)
//難易度ソート
const levelSortbutton =document.getElementById("level-sort")
const reference = document.querySelector(".reference")
levelSortbutton.addEventListener('click',()=>{
  const sortedparts = [...partLists].sort(compare);
  sortedparts.forEach((part) =>{
    reference.appendChild(part);
    hamreset();

  })
})

//ソート用関数
function compare (a,b){

 const compareA = a.dataset.sortlevel;
 const compareB = b.dataset.sortlevel;
 if(compareA < compareB){
  return -1;
 }
 if(compareA > compareB){
  return 1;
 }
 return 0;
}

//ソートリセット
function sortreset (){
  partLists.forEach((part) =>{
  reference.appendChild(part);
 })
 }

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