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
/// function
function clickDropdownMiniMenu(menu,dropdown,height){
  let isActive = false;
  menu.addEventListener('click', (event)=>{
    isActive = !isActive;
    if(isActive){
      dropdown.classList.add(height)
    }
    else{
      dropdown.classList.remove(height)
    }
  })
}

// Header
const header = document.querySelector(".header-layout");
fetch("../components/layouts/header.html")
  .then((res) => res.text())
  .then((data) => {
    header.innerHTML = data;


    const helpBtn = document.querySelector("#helpBtn");
    const helpDropdown = document.querySelector("#helpDropdown");
    helpBtn.addEventListener("mouseover", function () {
      helpDropdown.classList.remove("opacity-0","pointer-events-none")
      helpDropdown.classList.add("top-10")
    })
    helpDropdown.addEventListener("mouseover", function () {
      helpDropdown.classList.remove("opacity-0","pointer-events-none")
      helpDropdown.classList.add("top-10")
    })
    helpBtn.addEventListener("mouseout", function () {
      helpDropdown.classList.add("opacity-0")
      helpDropdown.classList.remove("top-10","pointer-events-none")
    })
    helpDropdown.addEventListener("mouseout", function () {
      helpDropdown.classList.add("opacity-0",)
      helpDropdown.classList.add("top-10","pointer-events-none")
    })



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
    const navbarTop = document.querySelector("#navbar")
    
    btn2.addEventListener("mouseover", function () {
      below_dropdown_1.classList.remove("pointer-events-none");
      dropdowm_1.classList.add("h-[400px]");
      below_dropdown_1.classList.add("delay-300");
      below_dropdown_1.classList.add("opacity-100");
      navbarTop.classList.add("sticky")
    });
    dropdowm_1.addEventListener("mouseover", function () {
      below_dropdown_1.classList.remove("pointer-events-none");
      below_dropdown_1.classList.remove("delay-300");
      dropdowm_1.classList.add("h-[400px]");
      below_dropdown_1.classList.add("opacity-100");
      navbarTop.classList.add("sticky");
    });
    btn2.addEventListener("mouseout", function () {
      dropdowm_1.classList.remove("h-[400px]");
      below_dropdown_1.classList.remove("delay-300");
      below_dropdown_1.classList.remove("opacity-100");
      below_dropdown_1.classList.add("pointer-events-none");
      navbarTop.classList.remove("sticky")

    });
    dropdowm_1.addEventListener("mouseout", function () {
      dropdowm_1.classList.remove("h-[400px]");
      below_dropdown_1.classList.remove("delay-300");
      below_dropdown_1.classList.remove("opacity-100");
      below_dropdown_1.classList.add("pointer-events-none");
      navbarTop.classList.remove("sticky")

    });



    const menDropdown = {
      "New Styles Added": ["Sale Up to 50% Off"],
      "New & Featured": [
        "New Arrivals",
        "Best Sellers",
        "Customize with Nike by You",
        "New in Jordan",
        "Golf x Lifestyle",
        "Add to Bag to See Price",
      ],
      "All Shoes": [
        "Lifestyle",
        "Jordan",
        "Dunk",
        "Air Max",
        "Air Force 1",
        "Training & Gym",
        "Basketball",
        "Running",
        "Nike SB",
        "Sandals & Slides",
        "Shoes $100 & Under",
      ],
      "All Clothing": [
        "Jordan",
        "Matching Sets",
        "Big & Tall",
        "Hoodies & Sweatshirts",
        "Pants & Tights",
        "Jackets & Vests",
        "Tops & T-Shirts",
        "Shorts",
        "Underwear",
        "Socks",
      ],
      "Shop by Sport": [
        "Basketball",
        "Golf",
        "Soccer",
        "Running",
        "Tennis",
        "Baseball",
        "Football",
        "Training & Gym",
        "Trail Running",
        "Swimming",
        "Pickleball",
      ],
    };
    const womenDropdown = {
      "New Styles Added gg": ["Sale: Up to 50% Off"],
      "New & Featured": [
        "New Arrivals",
        "Best Sellers",
        "Customize with Nike by You",
        "The Color Shop",
        "Marathon Capsule",
        "Add to Bag to See Price",
      ],
      "All Shoes": [
        "Lifestyle",
        "Jordan",
        "Dunk",
        "Air Max",
        "Air Force 1",
        "Training & Gym",
        "Basketball",
        "Running",
        "Nike SB",
        "Sandals & Slides",
        "Shoes $100 & Under",
      ],
      "All Clothing": [
        "Jordan",
        "Matching Sets",
        "Plus Size",
        "Hoodies & Sweatshirts",
        "Pants",
        "Leggings",
        "Bras",
        "Jackets & Vests",
        "Tops & T-Shirts",
        "Shorts",
        "Socks",
      ],
      "Shop by Sport": [
        "Basketball",
        "Golf",
        "Soccer",
        "Running",
        "Tennis",
        "Fitness",
        "Yoga",
        "Track & Field",
        "Softball",
        "Swimming",
        "Pickleball",
      ],
    };
    const accDropdown = {
      "New Styles Added": ["Sale: Up to 50% Off"],
      Featured: ["New in Golf Gear", "Add to Bag to See Price"],
      "All Accessories": [
        "Socks",
        "Bags & Backpacks",
        "Hats & Headwear",
        "Sunglasses & Eyewear",
        "Water Bottles & Hydration",
        "Gloves",
        "Jordan",
        "Belts",
      ],
      "Shop by Sport": [
        "Basketball",
        "Golf",
        "Soccer",
        "Running",
        "Tennis",
        "Baseball",
        "Football",
        "Training & Gym",
      ],
    };
    const saleDropdown = {
      "New Styles Added": ["Sale: Up to 50% Off"],
      "All Sale": ["Sale Shoes", "Sale Clothing", "Sale Accessories"],
      Men: ["Shoes", "Clothing", "Accessories", "Shop All"],
      Women: ["Shoes", "Clothing", "Accessories", "Shop All"],
      Kids: ["Shoes", "Clothing", "Accessories", "Shop All"],
    };
    const nikeDropdown = {
      "New Styles Added": ["Sale: Up to 50% Off"],
      "New & Featured": [
        "New Arrivals",
        "Best Sellers",
        "Teen Girl Essentials",
        "Skate X Lifestyle",
        "Summer Pastels",
        "Add to Bag to See Price",
      ],
      "Shoes by Size": [
        "Big Kids (1Y - 7Y)",
        "Little Kids (8C - 3Y)",
        "Baby & Toddler (1C - 10C)",
      ],
      "All Shoes": [
        "Lifestyle",
        "Jordan",
        "Dunk",
        "Air Max",
        "Air Force 1",
        "Basketball",
        "Running",
        "Sandals & Slides",
      ],
      "Clothing by Size": [
        "Big Kids (XS - XL)",
        "Little Kids (4 - 7)",
        "Baby & Toddler (0M - 4T)",
        "Extended Sizing",
      ],
      "All Clothing": [
        "Jordan",
        "Matching Sets",
        "Tops & T-Shirts",
        "Shorts",
        "Hoodies & Sweatshirts",
        "Jackets & Vests",
        "Pants & Tights",
        "Bras",
        "Socks",
      ],
      "Shop by Sport": [
        "Basketball",
        "Golf",
        "Soccer",
        "Running",
        "Baseball",
        "Football",
        "Softball",
        "Tennis",
        "Dance",
        "Swimming",
        "Skateboarding",
      ],
    };


    // Container element
    const menContainer = document.getElementById("men-container");
    const womenContainer = document.getElementById("women-container");
    const accContainer = document.getElementById("acc-container");
    const saleContainer = document.getElementById("sale-container");
    const kidContainer = document.getElementById("kid-container");

    // Function to create HTML markup for a section
    function createSectionHTML(sectionTitle, sectionContent) {
      let html = `<div >`;
      html += `<h3 class="font-semibold">${sectionTitle}</h3>`;
      html += `<ul class="pt-4 text-gray-600">`;

      // Check if section content is an array or an object
      if (Array.isArray(sectionContent)) {
        sectionContent.forEach((item) => {
          html += `<li class="pt-2 cursor-pointer hover:text-black ">${item}</li>`;
        });
      } else {
        for (const [subSectionTitle, subSectionContent] of Object.entries(
          sectionContent
        )) {
          html += `<h3 class="font-semibold">${subSectionTitle}</h3>`;
          html += `<ul class="pt-4 text-gray-600">`;
          subSectionContent.forEach((item) => {
            html += `<li class="pt-2 cursor-pointer hover:text-black">${item} hi</li>`;
          });
          html += `</ul>`;
        }
      }
      html += `</ul></div>`;
      return html;
    }

    // Generate HTML markup for each section
    let html = `
  <div class=" opacity-0 pointer-events-none p-6 w-full  flex gap-20 justify-center">
  `;
    for (const [sectionTitle, sectionContent] of Object.entries(menDropdown)) {
      html += createSectionHTML(sectionTitle, sectionContent);
    }
    html += `</div>`;
    // Set the innerHTML of the container
    menContainer.innerHTML = html;

    // Generate HTML markup for each section
    html = `
    <div class=" opacity-0 pointer-events-none p-6 w-full  flex gap-20 justify-center">
    `;
    for (const [sectionTitle, sectionContent] of Object.entries(
      womenDropdown
    )) {
      html += createSectionHTML(sectionTitle, sectionContent);
    }
    html += `</div>`;
    // Set the innerHTML of the container
    womenContainer.innerHTML = html;

    html = `
    <div class=" opacity-0 pointer-events-none p-6 w-full  flex gap-20 justify-center">
    `;
    for (const [sectionTitle, sectionContent] of Object.entries(accDropdown)) {
      html += createSectionHTML(sectionTitle, sectionContent);
    }
    html += `</div>`;
    // Set the innerHTML of the container
    accContainer.innerHTML = html;

    html = `
    <div class=" opacity-0 pointer-events-none p-6 w-full  flex gap-20 justify-center">
    `;
    for (const [sectionTitle, sectionContent] of Object.entries(saleDropdown)) {
      html += createSectionHTML(sectionTitle, sectionContent);
    }
    html += `</div>`;
    // Set the innerHTML of the container
    saleContainer.innerHTML = html;

    // men menu navbar dropdown
    const btnDropdown = document.getElementById("men-menu-btn");
    const meBelowdropdown = document.querySelector("#men-container div");
    btnDropdown.addEventListener("mouseover", () => {
      dropdown(btnDropdown, meBelowdropdown, menContainer, "h-[450px]");
    });
    // men menu navbar dropdown
    const womenBtnDropdown = document.getElementById("women-menu-btn");
    const womenBelowdropdown = document.querySelector("#women-container div");
    womenBtnDropdown.addEventListener("mouseover", () => {
      dropdown(
        womenBtnDropdown,
        womenBelowdropdown,
        womenContainer,
        "h-[450px]"
      );
    });

    const accBtnDropdown = document.getElementById("acc-menu-btn");
    const accBelowdropdown = document.querySelector("#acc-container div");
    accBtnDropdown.addEventListener("mouseover", () => {
      dropdown(accBtnDropdown, accBelowdropdown, accContainer, "h-[350px]");
    });

    const saleBtnDropdown = document.getElementById("sale-menu-btn");
    const saleBelowdropdown = document.querySelector("#sale-container div");
    saleBtnDropdown.addEventListener("mouseover", () => {
      dropdown(saleBtnDropdown, saleBelowdropdown, saleContainer, "h-[240px]");
    });

    const kidBtnDropdown = document.getElementById("kid-menu-btn");
    const kidBelowdropdown = document.querySelector("#kid-container div");
    kidBtnDropdown.addEventListener("mouseover", () => {
      dropdown(kidBtnDropdown, kidBelowdropdown, kidContainer, "h-[560px]");
    });

    //////////
    function dropdown(btnDropdown, meBelowdropdown, menContainer, h) {
      btnDropdown.addEventListener("mouseover", function () {
        meBelowdropdown.classList.remove("pointer-events-none");
        menContainer.classList.add(h);
        meBelowdropdown.classList.add("delay-300");
        meBelowdropdown.classList.add("opacity-100");
        navbarTop.classList.add("sticky")
      });
      menContainer.addEventListener("mouseover", function () {
        meBelowdropdown.classList.remove("pointer-events-none");
        menContainer.classList.add(h);
        meBelowdropdown.classList.add("delay-300");
        meBelowdropdown.classList.add("opacity-100");
        navbarTop.classList.add("sticky")
      });
      btnDropdown.addEventListener("mouseout", function () {
        menContainer.classList.remove(h);
        meBelowdropdown.classList.remove("delay-300");
        meBelowdropdown.classList.remove("opacity-100");
        meBelowdropdown.classList.add("pointer-events-none");
        navbarTop.classList.remove("sticky")
      });
      menContainer.addEventListener("mouseout", function () {
        menContainer.classList.remove(h);
        meBelowdropdown.classList.remove("delay-300");
        meBelowdropdown.classList.remove("opacity-100");
        meBelowdropdown.classList.add("pointer-events-none");
        navbarTop.classList.remove("sticky")
      });
    }

    ///////////////////////////
    //sidebar
    var sidebar_section = document.querySelector("#sidebar");
    var min_menu_btn = document.querySelector("#min-menu-btn");
    let all_except_sidebar = document.querySelector("#all-except-sidebar");
    const closeBtn = document.querySelector("#close-btn");

    min_menu_btn.addEventListener("click", function () {
      document.body.classList.add("overflow-hidden")
      all_except_sidebar.classList.add("blur-sm");
      sidebar_section.style.right = "0%";
    });
    closeBtn.addEventListener("click", function () {
      document.body.classList.remove("overflow-hidden")
      all_except_sidebar.classList.remove("blur-sm");
      sidebar_section.style.right = "-100%";
    });

    document.dispatchEvent(new Event("headerComponentLoaded"));
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
    const trending_container = document.querySelector(
      "#trending-scroll-container"
    );

    // call function back_ and next_ ,for btn back and next
    back_(trending_container, trending_back_btn);
    next_(trending_container, trending_next_btn);
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
    const classic_container = document.querySelector(
      "#classic-scroll-container"
    );

    // call function back_ and next_ ,for btn back and next
    back_(classic_container, classic_back_btn);
    next_(classic_container, classic_next_btn);
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
    back_(spot_container, spot_back_btn);
    next_(spot_container, spot_next_btn);
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
    const popular_container = document.querySelector(
      "#popular-scroll-container"
    );

    // call function back_ and next_ ,for btn back and next
    back_(popular_container, popular_back_btn);
    next_(popular_container, popular_next_btn);
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
    back_(member_container, member_back_btn);
    next_(member_container, member_next_btn);
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

    for (var i = 0; i < menu_below_btn.length; i++) {
      menu_below_btn[i].addEventListener("mouseover", function () {
        menu_below_hover.style.height = "500px";
      });
      menu_below_btn[i].addEventListener("mouseout", function () {
        menu_below_hover.style.height = "14.5vh";
      });
    }

  //mini Menu Feature
    const minifeaturedMenu = document.querySelector("#featuredMiniMenu");
    const dropdownfeaturedMiniMenu = document.querySelector("#featuredMiniMenu ul")
    clickDropdownMiniMenu(minifeaturedMenu,dropdownfeaturedMiniMenu,"h-[200px]")
//mini Shoe Feature
    const miniShoeMenu = document.querySelector("#ShoeMiniMenu");
    const dropdownShoeMiniMenu = document.querySelector("#ShoeMiniMenu ul")
    clickDropdownMiniMenu(miniShoeMenu,dropdownShoeMiniMenu,"h-[200px]")
  //mini Clothing Feature
  const miniClothingMenu = document.querySelector("#ClothingMiniMenu");
  const dropdownClothingMiniMenu = document.querySelector("#ClothingMiniMenu ul")
  clickDropdownMiniMenu(miniClothingMenu,dropdownClothingMiniMenu,"h-[370px]")
    //mini Clothing Feature
    const miniKidsMiniMenu = document.querySelector("#KidsMiniMenu");
    const dropdownKidsMiniMenu = document.querySelector("#KidsMiniMenu ul")
    clickDropdownMiniMenu(miniKidsMiniMenu,dropdownKidsMiniMenu,"h-[250px]")
//200px 200px 370px 250px
    

  })
  .catch((error) => console.error("Error fetching included file:", error));
//footer.html
const footer = document.querySelector(".footer-layout");
fetch("../components/layouts/footer.html")
  .then((res) => res.text())
  .then((data) => {
    footer.innerHTML = data;
    //200px 150px 120px 
    const miniHelpFooter = document.querySelector("#miniHelpFooter")
    const dropdownMiniHelpFooter = document.querySelector("#dropdownMiniHelpFooter")
    clickDropdownMiniMenu(miniHelpFooter,dropdownMiniHelpFooter,"h-[200px]")

    const miniCompanyFooter = document.querySelector("#miniCompanyFooter")
    const dropdownMiniCompanyFooter = document.querySelector("#dropdownMiniCompanyFooter")
    clickDropdownMiniMenu(miniCompanyFooter,dropdownMiniCompanyFooter,"h-[150px]")

    const miniPromoteFooter = document.querySelector("#miniPromoteFooter")
    const dropdownMiniPromoteFooter = document.querySelector("#dropdownMiniPromoteFooter")
    clickDropdownMiniMenu(miniPromoteFooter,dropdownMiniPromoteFooter,"h-[120px]")
    
  })
  .catch((error) => console.error("Error fetching included file:", error));
