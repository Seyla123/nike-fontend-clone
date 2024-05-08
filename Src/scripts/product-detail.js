//dropdown
const button = document.querySelectorAll(".btn");
const dropDown = document.querySelectorAll(".dropdown");
const arrowRotate = document.querySelectorAll(".btn span");
const hOf = ["h-44"]
function sidebarCategoryDropdown(btn,dropdown,arrow,list){
  let isActicve=false
  for(let k = 0;k<button.length;k++){
    btn[k].addEventListener("click", function(){
      if(isActicve==false){
        
        dropdown[k].classList.add("opacity-100",list[k])
        dropdown[k].classList.remove("pointer-events-none")
        arrow[k].classList.add("rotate-180")
        isActicve=true
        console.log(k,isActicve)
      }else{
        dropdown[k].classList.remove("opacity-100",list[k])
        dropdown[k].classList.add("pointer-events-none")
        arrow[k].classList.remove("rotate-180")
        isActicve=false
        console.log(k,isActicve)

  
      }
    })
  }
}
    const btnReview = document.querySelectorAll(".btnReview");
    const spanIcon = document.querySelectorAll(".spanIcon");
    const dropdownReview = document.querySelectorAll(".dropdownReview");
  sidebarCategoryDropdown(btnReview,dropdownReview,spanIcon,["h-[550px]"])
  sidebarCategoryDropdown(button,dropDown,arrowRotate,hOf)

  const shopCarousel = document.querySelector(".shopCarousel-layout");
fetch("../components/layouts/shop/popular-section.html")
  .then((res) => res.text())
  .then((data) => {
    shopCarousel.innerHTML = data;

    const popular_back_btn = document.querySelector("#popular-back-btn");
    const popular_next_btn = document.querySelector("#popular-next-btn");
    const popular_container = document.querySelector(
      "#popular-scroll-container"
    );

    // call function back_ and next_ ,for btn back and next
    back_(popular_container, popular_back_btn);
    next_(popular_container, popular_next_btn);
    
  })
  .catch((error) => console.error("Error fetching included file:", error));

  const picSmall = document.querySelectorAll(".picSmall div img");
  for (let i=0;i<picSmall.length;i++) {

    picSmall[i].addEventListener("mouseover", () => {
        const mainImg = document.querySelector("#mainImg");
        mainImg.setAttribute("src", picSmall[i].src);
      })
  }
  
