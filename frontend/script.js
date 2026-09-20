
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

btn.onclick = function () {
    const search = searchInput.value;

    const parts = document.querySelectorAll(".reference-part");

    parts.forEach((part) => {
        const book = part.querySelector(".reference-name");

        if (book.textContent.includes(search)) {
            part.classList.remove("hidden")
        } else {
            part.classList.add("hidden")
        }
    });
};

const author = document.getElementById("Sort")
author.addEventListener('change', (e) => {
  const parts = document.querySelectorAll(".reference-part");
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

});