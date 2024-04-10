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
  // function block
  // Promotion 
  const promotion = document.querySelector(".promotion-layout");
  fetch("../components/layouts/women/promotion.html")
    .then((res) => res.text())
    .then((data) => {
      promotion.innerHTML = data;
    })
    .catch((error) => console.error("Error fetching included file:", error));
    // Menu navbar 
  const women_menu = document.querySelector(".women-menu-layout");
  fetch("../components/layouts/women/women-menu.html")
    .then((res) => res.text())
    .then((data) => {
      women_menu.innerHTML = data;
    })
    .catch((error) => console.error("Error fetching included file:", error));
    
  
   // big-hero-section 
  const bigHeroSection = document.querySelector(".big-hero-section-layout");
  fetch("../components/layouts/women/big-hero-section.html")
    .then((res) => res.text())
    .then((data) => {
      bigHeroSection.innerHTML = data;
    })
    .catch((error) => console.error("Error fetching included file:", error));
    // shop-section 
  const shop_section = document.querySelector(".shop-section-layout");
  fetch("../components/layouts/women/shop-section.html")
    .then((res) => res.text())
    .then((data) => {
      shop_section.innerHTML = data;
    })
    .catch((error) => console.error("Error fetching included file:", error));
      // classic-section 
  const classic_section = document.querySelector(".classic-section-layout");
  fetch("../components/layouts/women/classic-section.html")
    .then((res) => res.text())
    .then((data) => {
      classic_section.innerHTML = data;
      const classic_back_btn = document.querySelector("#classic-back-btn");
      const classic_next_btn = document.querySelector("#classic-next-btn");
      const classic_container = document.querySelector("#classic-scroll-container");
  
      // call function back_ and next_ ,for btn back and next
      back_(classic_container,classic_back_btn);
      next_(classic_container,classic_next_btn);
    })
    .catch((error) => console.error("Error fetching included file:", error));
      // shop-section 
  const trending = document.querySelector(".trending-section-layout");
  fetch("../components/layouts/women/brook-section.html")
    .then((res) => res.text())
    .then((data) => {
      trending.innerHTML = data;
    })
    .catch((error) => console.error("Error fetching included file:", error));
      // shop-section 
  const popular_section = document.querySelector(".popular-section-layout");
  fetch("../components/layouts/men/popular-section.html")
    .then((res) => res.text())
    .then((data) => {
      popular_section.innerHTML = data;
    })
    .catch((error) => console.error("Error fetching included file:", error));