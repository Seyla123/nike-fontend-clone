import './sideBar.js';
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
const createNavbar = () => {
    return `
    <div class="w-full top-0 bg-white z-[51] " id="navbar">
  <div
    class="flex justify-between lg:grid grid-cols-3 max-w-[1800px] mx-auto px-2"
  >
    <a href="../../pages/home/index.html" class="flex items-center min-w-16 max-w-16 justify-center">
      <img
        class="w-full h-auto"
        src="https://i.pinimg.com/originals/20/60/2d/20602d43cc993811e5a6bd1886af4f33.png"
        alt=""
      />
    </a>

    <div class="hidden lg:flex items-center justify-center">
      <ul class="flex flex-wrap">
        <a id="" class="new-featured-menu px-2 py-4 hover:opacity-50" href="../../pages/product/index.html"
          ><li class="new-featured-menu">New & Featured</li></a
        >
        <a
          id="men-menu-btn"
          class="new-featured-menu px-2 py-4 hover:opacity-50"
          href="../../pages/men/index.html"
          ><li class="">Men</li></a
        >
        <a
          id="women-menu-btn"
          class="new-featured-menu px-2 py-4 hover:opacity-50"
          href="../../pages/women/index.html"
          ><li class="">Women</li></a
        >
        <a id="kid-menu-btn" class="new-featured-menu px-2 py-4 hover:opacity-50" href="../../pages/kid/index.html"
          ><li class="">Kids</li></a
        >
        <button
          id="acc-menu-btn"
          class="new-featured-menu px-2 py-4 hover:opacity-50 accessories"
          
          ><li class="">Accessories</li></button
        >
        <button
          id="sale-menu-btn"
          class=" new-featured-menu px-2 py-4 hover:opacity-50"
          href=""
          ><li class="">Sales</li></button
        >
      </ul>
    </div>
    <!-- for phone screen -->
    <div class="flex flex-row lg:hidden ">
      <a
        href=""
        class="flex justify-center items-center h-[40px] w-[40px] rounded-full hover:bg-[#d8d8d8]"
      >
      <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path></svg>
      </a>
      <a
        href=""
        class="flex justify-center items-center h-[40px] w-[40px] rounded-full hover:bg-[#d8d8d8]"
      >
      <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg>
      </a>
      <a
        href=""
        class="flex justify-center items-center h-[40px] w-[40px] rounded-full hover:bg-[#d8d8d8]"
      >
      <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none" data-var="glyph" style="display: inline-block;"><path fill="currentColor" d="M12 3a4.5 4.5 0 00-4.5 4.5H9a3 3 0 013-3V3zM7.5 7.5A4.5 4.5 0 0012 12v-1.5a3 3 0 01-3-3H7.5zM12 12a4.5 4.5 0 004.5-4.5H15a3 3 0 01-3 3V12zm4.5-4.5A4.5 4.5 0 0012 3v1.5a3 3 0 013 3h1.5zM4.5 21v-3H3v3h1.5zm0-3a3 3 0 013-3v-1.5A4.5 4.5 0 003 18h1.5zm3-3h9v-1.5h-9V15zm9 0a3 3 0 013 3H21a4.5 4.5 0 00-4.5-4.5V15zm3 3v3H21v-3h-1.5z"></path></svg>
      </a>
      <button
        id="min-menu-btn"
        href=""
        class="flex justify-center items-center h-[40px] w-[40px] rounded-full hover:bg-[#d8d8d8]"
      >
      <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M21 5.25H3M21 12H3m18 6.75H3"></path></svg>
      </button>
    </div>
    <!--  -->
    <div class="hidden lg:flex flex-row justify-end items-center">
      <div class="flex flex-row items-center">
        <a
          onClick=""
          class="menu-hover absolute flex justify-center items-center h-[40px] w-[40px] rounded-full hover:bg-[#d8d8d8]"
        >
        <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path></svg>
        </a>
        <input
          class="bg-[#eeeeee] min-h-[40px] min-w-[180px] rounded-[60px] text-gray-400 text-center hover:bg-[#d8d8d8] outline-none"
          value="Search"
          type="text"
        />
      </div>
      <a
        href=""
        class="flex justify-center items-center h-[40px] w-[40px] rounded-full hover:bg-[#d8d8d8]"
      >
      <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path></svg>
      </a>
      <a
        id="max-cart-btn"
        href=""
        class="flex justify-center items-center h-[40px] w-[40px] rounded-full hover:bg-[#d8d8d8]"
      >
      <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg>
      </a>
    </div>
  </div>
  
  <div
  id="dropdown-1"
  class="hidden  md:flex absolute z-50 duration-300 h-0 w-full flex-col bg-white text-gray-800 group-hover:visible"
>
  <div
    id="below-dropdown-1"
    class="opacity-0 pointer-events-none p-6 w-full flex gap-20 justify-center"
  >
    <div>
      <h3 class="font-semibold">New Styles Added</h3>
      <ul class="pt-4 text-gray-600">
        <li class="pt-2  cursor-pointer hover:text-black">
          Sale: Up to 50% Off
        </li>
      </ul>
    </div>
    <div>
      <h3 class="font-semibold">New & Featured</h3>
      <ul class="pt-4 text-gray-600">
        <li class="pt-2 cursor-pointer hover:text-black">New Arrivals</li>
        <li class="pt-2 cursor-pointer hover:text-black">Best Sellers</li>
        <li class="pt-2 cursor-pointer hover:text-black">Member Product</li>
        <li class="pt-2 cursor-pointer hover:text-black">
          New & Upcomming Drops
        </li>
        <li class="pt-2 cursor-pointer hover:text-black">
          SNKRS Lanuch Calendar
        </li>
        <li class="pt-2 cursor-pointer hover:text-black">New in ACG</li>
        <li class="pt-2 cursor-pointer hover:text-black">Retro Running</li>
        <li class="pt-2 cursor-pointer hover:text-black">See Price in Bag</li>
      </ul>
    </div>
    <div>
      <h3 class="font-semibold">Shop Classic</h3>
      <ul class="pt-4 text-gray-600">
        <li class="pt-2 cursor-pointer hover:text-black">Air Jordan 1</li>
        <li class="pt-2 cursor-pointer hover:text-black">Air Force</li>
        <li class="pt-2 cursor-pointer hover:text-black">Dunk</li>
        <li class="pt-2 cursor-pointer hover:text-black">Air Max</li>
        <li class="pt-2 cursor-pointer hover:text-black">Blazer</li>
      </ul>
    </div>
    <div>
      <div>
        <h3 class="font-semibold">New For Men</h3>
        <ul class="pt-4 text-gray-600">
          <li class="pt-2 cursor-pointer hover:text-black">Shoes</li>
          <li class="pt-2 cursor-pointer hover:text-black">Clothing</li>
        </ul>
      </div>
      <div class="pt-4">
        <h3 class="font-semibold">New For Women</h3>
        <ul class="pt-4 text-gray-600">
          <li class="pt-2 cursor-pointer hover:text-black">Shoes</li>
          <li class="pt-2 cursor-pointer hover:text-black">Clothing</li>
        </ul>
      </div>
      <div class="pt-4">
        <h3 class="font-semibold">New Markdowns</h3>
        <ul class="pt-4 text-gray-600">
          <li class="pt-2 cursor-pointer hover:text-black">Shoes</li>
          <li class="pt-2 cursor-pointer hover:text-black">Clothing</li>
        </ul>
      </div>
    </div>
    <div>
      <h3 class="font-semibold">Jordan</h3>
      <ul class="pt-4 text-gray-600">
        <li class="pt-2 cursor-pointer hover:text-black">Shop All</li>
        <li class="pt-2 cursor-pointer hover:text-black">Latest in Jordan</li>
        <li class="pt-2 cursor-pointer hover:text-black">Men</li>
        <li class="pt-2 cursor-pointer hover:text-black">Women</li>
        <li class="pt-2 cursor-pointer hover:text-black">Kids</li>
        <li class="pt-2 cursor-pointer hover:text-black">Basketball</li>
      </ul>
    </div>
  </div>
</div>
<div
    id="kid-container"
    class="hidden  md:flex z-50 h-[0px] absolute duration-300 w-full flex-col bg-white text-gray-800 group-hover:visible"
  >
    <div class="opacity-0 pointer-events-none p-6 w-full flex gap-20 justify-center">
      <div>
        <h3 class="font-semibold">New Styles Added</h3>
        <ul class="pt-4 text-gray-600">
          <li class="pt-2 cursor-pointer hover:text-black">
            Sale: Up to 50% Off
          </li>
        </ul>
      </div>
      <div>
        <h3 class="font-semibold">New & Featured</h3>
        <ul class="pt-4 text-gray-600">
          <li class="pt-2 cursor-pointer hover:text-black">New Arrivals</li>
          <li class="pt-2 cursor-pointer hover:text-black">Best Sellers</li>
          <li class="pt-2 cursor-pointer hover:text-black">
            Teen Girl Essentials"
          </li>
          <li class="pt-2 cursor-pointer hover:text-black">
            Skate X Lifestyle
          </li>
          <li class="pt-2 cursor-pointer hover:text-black">
            SNKRS Lanuch Calendar
          </li>
          <li class="pt-2 cursor-pointer hover:text-black">Summer Pastels</li>
          <li class="pt-2 cursor-pointer hover:text-black">
            Add to Bag to See Price
          </li>
        </ul>
      </div>
      <div>
        <div>
          <h3 class="font-semibold">Shoes by Size</h3>
          <ul class="pt-4 text-gray-600">
            <li class="pt-2 cursor-pointer hover:text-black">
              Big Kids (1Y - 7Y)
            </li>
            <li class="pt-2 cursor-pointer hover:text-black">
              Little Kids (8C - 3Y)
            </li>
            <li class="pt-2 cursor-pointer hover:text-black">
              Baby & Toddler (1C - 10C)
            </li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold pt-4">All Shoes</h3>
          <ul class="pt-4 text-gray-600">
            <li class="pt-2 cursor-pointer hover:text-black">
              Lifestyle
            </li>
            <li class="pt-2 cursor-pointer hover:text-black">
              Jordan
            </li>
            <li class="pt-2 cursor-pointer hover:text-black">
              Dunk
            </li>
            <li class="pt-2 cursor-pointer hover:text-black">
              Air Max
            </li>
            <li class="pt-2 cursor-pointer hover:text-black">
              Air Force 1
            </li>
            <li class="pt-2 cursor-pointer hover:text-black">
              Basketball
            </li>
            <li class="pt-2 cursor-pointer hover:text-black">
              Running
            </li>
            <li class="pt-2 cursor-pointer hover:text-black">
              Sandals & Slides
            </li>

          </ul>
        </div>
      </div>
      <div>
        <div>
          <h3 class="font-semibold">Clothing by Size</h3>
          <ul class="pt-4 text-gray-600">
            <li class="pt-2 cursor-pointer hover:text-black">Big Kids (XS - XL)</li>
            <li class="pt-2 cursor-pointer hover:text-black">Little Kids (4 - 7)</li>
            <li class="pt-2 cursor-pointer hover:text-black">Baby & Toddler (0M - 4T)</li>
            <li class="pt-2 cursor-pointer hover:text-black">Extended Sizing</li>
          </ul>
        </div>
        <div class="pt-4">
          <h3 class="font-semibold">All Clothing</h3>
          <ul class="pt-4 text-gray-600">
            <li class="pt-2 cursor-pointer hover:text-black">Jordan</li>
            <li class="pt-2 cursor-pointer hover:text-black">Matching Sets</li>
            <li class="pt-2 cursor-pointer hover:text-black">Tops & T-Shirts</li>
            <li class="pt-2 cursor-pointer hover:text-black">Shorts</li>
            <li class="pt-2 cursor-pointer hover:text-black">Hoodies & Sweatshirts</li>
            <li class="pt-2 cursor-pointer hover:text-black">Jackets & Vests</li>
            <li class="pt-2 cursor-pointer hover:text-black">Pants & Tights</li>
            <li class="pt-2 cursor-pointer hover:text-black">Bras</li>
            <li class="pt-2 cursor-pointer hover:text-black">Socks</li>
          </ul>
        </div>
      </div>
      <div>
        <h3 class="font-semibold">Shop by Sport</h3>
        <ul class="pt-4 text-gray-600">
          <li class="pt-2 cursor-pointer hover:text-black">Basketball</li>
          <li class="pt-2 cursor-pointer hover:text-black">Golf</li>
          <li class="pt-2 cursor-pointer hover:text-black">Soccer</li>
          <li class="pt-2 cursor-pointer hover:text-black">Running</li>
          <li class="pt-2 cursor-pointer hover:text-black">Baseball</li>
          <li class="pt-2 cursor-pointer hover:text-black">Football</li>
          <li class="pt-2 cursor-pointer hover:text-black">Softball</li>
          <li class="pt-2 cursor-pointer hover:text-black">Tennis</li>
          <li class="pt-2 cursor-pointer hover:text-black">Dance</li>
          <li class="pt-2 cursor-pointer hover:text-black">Swimming</li>
          <li class="pt-2 cursor-pointer hover:text-black">Skateboarding</li>
        </ul>
      </div>
    </div>
  </div>
  <men-container
    id="men-container"
    class="hidden  md:flex absolute z-50 duration-300 h-[0px] w-full flex-col bg-white text-gray-800 group-hover:visible"
  ></men-container>
  <women-container
    id="women-container"
    class="hidden  md:flex absolute z-50 duration-300 h-[0px] w-full flex-col bg-white text-gray-800 group-hover:visible"
  ></women-container>
  <acc-container
    id="acc-container"
    class="hidden  md:flex absolute z-50 duration-300 h-[0px] w-full flex-col bg-white text-gray-800 group-hover:visible"
  ></acc-container>
  <sale-container
    id="sale-container"
    class="hidden  md:flex absolute z-50 duration-300 h-[0px] w-full flex-col bg-white text-gray-800 group-hover:visible"
  ></sale-container>
</div>
<div id="blurBg" class="z-40 duration-700 pointer-events-none fixed w-full h-full">

</div>

    `
}


class Navbar extends HTMLElement{

    constructor() {
        super()
    }

    connectedCallback(){
        // Set the inner HTML of the custom element
        this.innerHTML = createNavbar()
        this.addEventListener();
    }
    addEventListener(){
      // Setup for the new featured menu dropdown dropdown1 belowDropdown1
      var btn2 = document.querySelector(".new-featured-menu");
      var dropdown1 = document.getElementById("dropdown-1");
      let belowDropdown1 = document.getElementById("below-dropdown-1");
      const navbarTop = document.querySelector("#navbar")
      const blurBg = document.querySelector("#blurBg");
      
      // Event listeners for mouseover on the new featured menu button
      btn2.addEventListener("mouseover", function () {
        belowDropdown1.classList.remove("pointer-events-none");
        dropdown1.classList.add("h-[400px]");
        belowDropdown1.classList.add("delay-300");
        belowDropdown1.classList.add("opacity-100");
        navbarTop.classList.add("sticky")
        blurBg.classList.add("backdrop-blur-sm", "bg-white/10")
      });

      // Event listeners for mouseover on the dropdown itself
      dropdown1.addEventListener("mouseover", function () {
        belowDropdown1.classList.remove("pointer-events-none");
        belowDropdown1.classList.remove("delay-300");
        dropdown1.classList.add("h-[400px]");
        belowDropdown1.classList.add("opacity-100");
        navbarTop.classList.add("sticky");
        blurBg.classList.add("backdrop-blur-sm", "bg-white/10")
      });

      // Event listeners for mouseout on the new featured menu button
      btn2.addEventListener("mouseout", function () {
        dropdown1.classList.remove("h-[400px]");
        belowDropdown1.classList.remove("delay-300");
        belowDropdown1.classList.remove("opacity-100");
        belowDropdown1.classList.add("pointer-events-none");
        navbarTop.classList.remove("sticky")
        blurBg.classList.remove("backdrop-blur-sm", "bg-white/10")
      });

      // Event listeners for mouseout on the dropdown itself
      dropdown1.addEventListener("mouseout", function () {
        dropdown1.classList.remove("h-[400px]");
        belowDropdown1.classList.remove("delay-300");
        belowDropdown1.classList.remove("opacity-100");
        belowDropdown1.classList.add("pointer-events-none");
        navbarTop.classList.remove("sticky")
        blurBg.classList.remove("backdrop-blur-sm", "bg-white/10")
      });

      // Container elements for different sections
      const menContainer = document.getElementById("men-container");
      const womenContainer = document.getElementById("women-container");
      const accContainer = document.getElementById("acc-container");
      const saleContainer = document.getElementById("sale-container");
      const kidContainer = document.getElementById("kid-container");

      // Function to create HTML for each section
      function createSectionHTML(sectionTitle, sectionContent) {
        let html = `<div><h3 class="font-semibold">${sectionTitle}</h3><ul class="pt-4 text-gray-600">`;

        if (Array.isArray(sectionContent)) {
          sectionContent.forEach(item => {
            html += `<li class="pt-2 cursor-pointer hover:text-black">${item}</li>`;
          });
        } else {
          Object.entries(sectionContent).forEach(([subSectionTitle, subSectionContent]) => {
            html += `<h3 class="font-semibold">${subSectionTitle}</h3><ul class="pt-4 text-gray-600">`;
            subSectionContent.forEach(item => {
              html += `<li class="pt-2 cursor-pointer hover:text-black">${item}</li>`;
            });
            html += `</ul>`;
          });
        }
        html += `</ul></div>`;
        return html;
      }

      // Function to update HTML content of containers
      function updateContainerHTML(container, dropdownData) {
        let html = `<div class="opacity-0 pointer-events-none p-6 w-full flex gap-20 justify-center">`;
        Object.entries(dropdownData).forEach(([sectionTitle, sectionContent]) => {
          html += createSectionHTML(sectionTitle, sectionContent);
        });
        html += `</div>`;
        container.innerHTML = html;
      }

      // Update HTML content for each section
      updateContainerHTML(menContainer, menDropdown);
      updateContainerHTML(womenContainer, womenDropdown);
      updateContainerHTML(accContainer, accDropdown);
      updateContainerHTML(saleContainer, saleDropdown);

      // Setup dropdown interactions for each menu button
      const btnDropdown = document.getElementById("men-menu-btn");
      const meBelowdropdown = document.querySelector("#men-container div");
      btnDropdown.addEventListener("mouseover", () => {
        dropdown(btnDropdown, meBelowdropdown, menContainer, "h-[450px]");
      });

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

      // General dropdown function to handle mouseover and mouseout events
      function dropdown(btnDropdown, meBelowdropdown, menContainer, h) {
        btnDropdown.addEventListener("mouseover", function () {
          meBelowdropdown.classList.remove("pointer-events-none");
          menContainer.classList.add(h);
          meBelowdropdown.classList.add("delay-300");
          meBelowdropdown.classList.add("opacity-100");
          navbarTop.classList.add("sticky")
          blurBg.classList.add("backdrop-blur-sm", "bg-white/10")
        });
        menContainer.addEventListener("mouseover", function () {
          meBelowdropdown.classList.remove("pointer-events-none");
          menContainer.classList.add(h);
          meBelowdropdown.classList.add("delay-300");
          meBelowdropdown.classList.add("opacity-100");
          navbarTop.classList.add("sticky")
          blurBg.classList.add("backdrop-blur-sm", "bg-white/10")
        });
        btnDropdown.addEventListener("mouseout", function () {
          menContainer.classList.remove(h);
          meBelowdropdown.classList.remove("delay-300");
          meBelowdropdown.classList.remove("opacity-100");
          meBelowdropdown.classList.add("pointer-events-none");
          navbarTop.classList.remove("sticky")
          blurBg.classList.remove("backdrop-blur-sm", "bg-white/10")
        });
        menContainer.addEventListener("mouseout", function () {
          menContainer.classList.remove(h);
          meBelowdropdown.classList.remove("delay-300");
          meBelowdropdown.classList.remove("opacity-100");
          meBelowdropdown.classList.add("pointer-events-none");
          navbarTop.classList.remove("sticky")
          blurBg.classList.remove("backdrop-blur-sm", "bg-white/10")
        });
      }

      // Sidebar interactions
      var sidebar_section = document.querySelector("#sidebar");
      var min_menu_btn = document.querySelector("#min-menu-btn");
      let all_except_sidebar = document.querySelector("#all-except-sidebar");
      const closeBtn = document.querySelector("#close-btn");

      // Event listener for opening the sidebar
      min_menu_btn.addEventListener("click", function () {
        document.body.classList.add("overflow-hidden")
        all_except_sidebar.classList.add("blur-sm");
        sidebar_section.style.right = "0%";
      });
      // Event listener for closing the sidebar
      closeBtn.addEventListener("click", function () {
        document.body.classList.remove("overflow-hidden")
        all_except_sidebar.classList.remove("blur-sm");
        sidebar_section.style.right = "-100%";
      });
    }
}

// Define the custom element
customElements.define("navbar-component", Navbar);




