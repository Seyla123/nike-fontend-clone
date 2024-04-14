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


//test
fetch("../components/layouts/test.html")
  .then((res)=> res.text())
  .then((data) => {
    document.querySelector(".test-layout").innerHTML = data;
    document.dispatchEvent(new Event('TestComponentLoaded'));
})
.catch((error) => console.error("Erro Fetching included file:", error));


// Header
const header = document.querySelector(".header-layout");
fetch("../components/layouts/header.html")
  .then((res) => res.text())
  .then((data) => {
    header.innerHTML = data;
    
  })
  .catch((error) => console.error("Error fetching included file:", error));
////////

//Navbar
const nav = document.querySelector(".navbar-layout");
fetch("../components/layouts/navbar.html")
  .then((res) => res.text())
  .then((data) => {
    nav.innerHTML = data;
    // dropdown-1
    var btn2 = document.querySelector(".new-featured-menu");
    var dropdowm_1 = document.getElementById("dropdown-1");
    let below_dropdown_1 = document.getElementById("below-dropdown-1");
    let navbar = document.getElementById("navbar");
    btn2.addEventListener("mouseover", function () {
      dropdowm_1.classList.add('h-[400px]');
      below_dropdown_1.classList.add('opacity-100');
    });
    dropdowm_1.addEventListener("mouseover", function () {
      dropdowm_1.classList.add('h-[400px]');
      below_dropdown_1.classList.add('opacity-100');
    });
    btn2.addEventListener("mouseout", function () {
      dropdowm_1.classList.remove('h-[400px]');
      below_dropdown_1.classList.remove('opacity-100');
    });
    dropdowm_1.addEventListener("mouseout", function () {
      dropdowm_1.classList.remove('h-[400px]');
      below_dropdown_1.classList.remove('opacity-100');
    });

    // for (var i = 0; i < btn2.length; i++) {
    //   if (btn2[i]) {
    //     btn2[i].addEventListener("mouseover", function () {
    //       dropdowm_1.style.display = "flex";
    //       addBlur();
    //     });
    //     dropdowm_1.addEventListener("mouseover", function () {
    //       dropdowm_1.style.display = "flex";
    //       addBlur();
    //     });
    //     dropdowm_1.addEventListener("mouseout", function () {
    //       dropdowm_1.style.display = "none";
    //       removeBlur();
    //     });
    //   } else {
    //     console.error("Button with ID 'btn2' not found.");
    //   }
    // }

    ///////////////////////////
    //sidebar
    var sidebar_section = document.querySelector("#sidebar");
    var min_menu_btn = document.querySelector("#min-menu-btn");
    let all_except_sidebar = document.querySelector("#all-except-sidebar");


    min_menu_btn.addEventListener("click", function () {
        all_except_sidebar.style.position = "fixed";
        sidebar_section.style.right = "0%";
      });

      document.dispatchEvent(new Event('headerComponentLoaded'));
  })
  .catch((error) => console.error("Error fetching included file:", error));
//Hero Section

const hero_section = document.querySelector(".hero-section-layout");
fetch("../components/layouts/hero-section.html")
  .then((res) => res.text())
  .then((data) => {
    hero_section.innerHTML = data;
  })
  .catch((error) => console.error("Error fetching included file:", error));
//////////

//trending Section
const trending_section = document.querySelector(".trending-section-layout");
fetch("../components/layouts/trending-section.html")
  .then((res) => res.text())
  .then((data) => {
    trending_section.innerHTML = data;
    // action click on back btn
    const trending_back_btn = document.querySelector("#trending-back-btn");
    const trending_next_btn = document.querySelector("#trending-next-btn");
    const trending_container = document.querySelector("#trending-scroll-container");

    // call function back_ and next_ ,for btn back and next
    back_(trending_container,trending_back_btn);
    next_(trending_container,trending_next_btn);
    
  })
  .catch((error) => console.error("Error fetching included file:", error));

//featured-section.html
const featured_section = document.querySelector(".featured-section-layout");
fetch("../components/layouts/featured-section.html")
  .then((res) => res.text())
  .then((data) => {
    featured_section.innerHTML = data; 
  })
  .catch((error) => console.error("Error fetching included file:", error));

///carousel-classic.html
const carousel_classic = document.querySelector(".carousel-classic-layout");
fetch("../components/layouts/carousel-classic.html")
  .then((res) => res.text())
  .then((data) => {
    carousel_classic.innerHTML = data;
        // action click on back btn
    const classic_back_btn = document.querySelector("#classic-back-btn");
    const classic_next_btn = document.querySelector("#classic-next-btn");
    const classic_container = document.querySelector("#classic-scroll-container");

    // call function back_ and next_ ,for btn back and next
    back_(classic_container,classic_back_btn);
    next_(classic_container,classic_next_btn);
  })
  .catch((error) => console.error("Error fetching included file:", error));

///spot-section.html
const spot_section = document.querySelector(".spot-section-layout");
fetch("../components/layouts/spot-section.html")
  .then((res) => res.text())
  .then((data) => {
    spot_section.innerHTML = data;
    // action click on back btn
    const spot_back_btn = document.querySelector("#spot-back-btn");
    const spot_next_btn = document.querySelector("#spot-next-btn");
    const spot_container = document.querySelector("#spot-scroll-container");

    // call function back_ and next_ ,for btn back and next
    back_(spot_container,spot_back_btn);
    next_(spot_container,spot_next_btn);
    
  })
  .catch((error) => console.error("Error fetching included file:", error));

//carousel-popular.html
const carousel_popular = document.querySelector(".carousel-popular-layout");
fetch("../components/layouts/carousel-popular.html")
  .then((res) => res.text())
  .then((data) => {
    carousel_popular.innerHTML = data;
   // action click on back btn
    const popular_back_btn = document.querySelector("#popular-back-btn");
    const popular_next_btn = document.querySelector("#popular-next-btn");
    const popular_container = document.querySelector("#popular-scroll-container");

    // call function back_ and next_ ,for btn back and next
    back_(popular_container,popular_back_btn);
    next_(popular_container,popular_next_btn);
  })
  .catch((error) => console.error("Error fetching included file:", error));

//member-section.html
const member_section = document.querySelector(".member-section-layout");
fetch("../components/layouts/member-section.html")
  .then((res) => res.text())
  .then((data) => {
    member_section.innerHTML = data;
    // action click on back btn
    const member_back_btn = document.querySelector("#member-back-btn");
    const member_next_btn = document.querySelector("#member-next-btn");
    const member_container = document.querySelector("#member-scroll-container");

    // call function back_ and next_ ,for btn back and next
    back_(member_container,member_back_btn);
    next_(member_container,member_next_btn);
  })
  .catch((error) => console.error("Error fetching included file:", error));

//menu-section.html
const menu_section = document.querySelector(".menu-section-layout");
fetch("../components/layouts/menu-section.html")
  .then((res) => res.text())
  .then((data) => {
    menu_section.innerHTML = data;
    let menu_below_hover = document.querySelector("#menu-below-hover");
    const menu_below_btn = document.querySelectorAll(".menu-below-btn");


    for (var i=0;i<menu_below_btn.length;i++){
      menu_below_btn[i].addEventListener('mouseover',function(){
        menu_below_hover.style.height = '500px';
      });
      menu_below_btn[i].addEventListener('mouseout',function(){
        menu_below_hover.style.height = '14.5vh';
      });
    }
  })
  .catch((error) => console.error("Error fetching included file:", error));
//footer.html
const footer = document.querySelector(".footer-layout");
fetch("../components/layouts/footer.html")
  .then((res) => res.text())
  .then((data) => {
    footer.innerHTML = data;
  })
  .catch((error) => console.error("Error fetching included file:", error));


