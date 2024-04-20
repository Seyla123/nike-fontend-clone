// function btn back and next
function next_(element, btn) {
  btn.addEventListener("click", function () {
    element.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  });
}
function back_(element, btn) {
  btn.addEventListener("click", function () {
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

//popular-section
const popularSection = document.querySelector(".popular-section");
fetch("../components/layouts/kid/popular-section.html")
  .then((res) => res.text())
  .then((data) => {
    popularSection.innerHTML = data;
  })
  .catch((error) => console.error("Error fetching included file:", error));

// trending-section
const trendingrSection = document.querySelector(".trending-section");
fetch("../components/layouts/kid/trending-section.html")
  .then((res) => res.text())
  .then((data) => {
    trendingrSection.innerHTML = data;
  })
  .catch((error) => console.error("Error fetching included file:", error));

  // kid-menu
const kidMenu = document.querySelector(".kid-menu-section");
fetch("../components/layouts/kid/kid-menu.html")
  .then((res) => res.text())
  .then((data) => {
    kidMenu.innerHTML = data;
  })
  .catch((error) => console.error("Error fetching included file:", error));
//promotion.html
const promotion = document.querySelector(".promotion-section");
fetch("../components/layouts/kid/promotion.html")
  .then((res) => res.text())
  .then((data) => {
    promotion.innerHTML = data;
  })
  .catch((error) => console.error("Error fetching included file:", error));

  //more-to-explore.html
  const moreToExplore = document.querySelector(".more-to-explore-section");
fetch("../components/layouts/kid/more-to-explore.html")
  .then((res) => res.text())
  .then((data) => {
    moreToExplore.innerHTML = data;
  })
  .catch((error) => console.error("Error fetching included file:", error));
  //classic-section.html
  const classicSection = document.querySelector(".classic-section-section");
  fetch("../components/layouts/kid/classic-section.html")
    .then((res) => res.text())
    .then((data) => {
      classicSection.innerHTML = data;
      const classic_back_btn = document.querySelector("#classic-back-btn");
      const classic_next_btn = document.querySelector("#classic-next-btn");
      const classic_container = document.querySelector("#classic-scroll-container");
  
      // call function back_ and next_ ,for btn back and next
      back_(classic_container,classic_back_btn);
      next_(classic_container,classic_next_btn);
    })
    .catch((error) => console.error("Error fetching included file:", error));

    //menu-section.html
    const MenuSection = document.querySelector(".menu-section-section");
    fetch("../components/layouts/kid/menu-section.html")
      .then((res) => res.text())
      .then((data) => {
        MenuSection.innerHTML = data;
        let menu_below_hover = document.querySelector("#menu-below-hover");
        const menu_below_btn = document.querySelectorAll(".menu-below-btn");
    
        for (var i = 0; i < menu_below_btn.length; i++) {
          menu_below_btn[i].addEventListener("mouseover", function () {
            menu_below_hover.style.height = "500px";
          });
          menu_below_btn[i].addEventListener("mouseout", function () {
            menu_below_hover.style.height = "14.5vh";
          });
        }
      })
      .catch((error) => console.error("Error fetching included file:", error));
