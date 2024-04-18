// function btn back and next
function next_ (element,btn){
    btn.addEventListener("click",function(){
      element.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    });
  }
  function back_ (element,btn){
    btn.addEventListener("click",function(){
      element.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    });
  }

  //kid section video
// big-hero-section 
const bigHeroSection = document.querySelector(".big-hero-section-layout");
fetch("../components/layouts/kid/big-hero-section.html")
  .then((res) => res.text())
  .then((data) => {
    bigHeroSection.innerHTML = data;
  })
  .catch((error) => console.error("Error fetching included file:", error));

  // big-hero-section 
const shopForallSection = document.querySelector(".shop-for-all");
fetch("../components/layouts/kid/shop-for-all.html")
  .then((res) => res.text())
  .then((data) => {
    shopForallSection.innerHTML = data;
  })
  .catch((error) => console.error("Error fetching included file:", error));

