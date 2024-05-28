// const menuItems = [
//   {
//       category: "Featured",
//       items: ["Air Force 1", "Jordan 1", "Metcon", "Air Max 270", "Air Max 97", "Blazer", "Pegasus"]
//   },
//   {
//       category: "Shoe",
//       items: ["All Shoes", "Jordan Shoes", "Running Shoes", "Basketball Shoes", "Tennis Shoes", "Tranning Shoes", "Custom Shoes", "Sale Shoes", "Soccer Cleats"]
//   },
//   {
//       category: "Clothing",
//       items: ["All Clothing", "Tops & T-Shirts", "Shorts", "Hoodies & Pullovers", "Joggers & Sweatpants", "Sports Bras", "Pants & Tights", "Socks", "Yoga", "NikeLab", "Plus Size", "Big & Tall", "Sale Clothing"]
//   },
//   {
//       category: "Kids",
//       items: ["Infant & Toddler Shoes", "Kids Shoes", "Kids Basketball Shoes", "Kids Running Shoes", "Kids Jordan Shoes", "Kids Clothing", "Kids Backpacks", "Kids Socks", "Kids Sale"]
//   }
// ];
const createFooter = ()=>{
    return `

    <!-- phone screen -->
<div class="w-full bg-black flex flex-col p-4  md:hidden">
    <div>
        <ul class="text-white ">
            <li class="pb-4">RESOURE </li>
            <li class="pb-4">GET CARDS</li>
            <li class="pb-4">FIND A STORE</li>
            <li class="pb-4">BECOME A MEMBER</li>
            <li class="pb-4">NIKE X NBA</li>
            <li class="pb-4">NIKE JOURAL</li>
            <li class="pb-4">Site Feedback</li>

        </ul>
    </div>
    <div class="text-white pb-4">
        <div id="miniHelpFooter" class="flex justify-between pt-4 pb-4">
            <p>HELP</p>
            <p>+</p>
        </div>
        <ul id="dropdownMiniHelpFooter" class="text-xs text-gray-500 overflow-hidden h-0 duration-300">
            <li class="pt-2 cursor-pointer">Get Help</li>
                        <li class="pt-2 cursor-pointer">Order Status</li>
                        <li class="pt-2 cursor-pointer">Shipping and Delivery</li>
                        <li class="pt-2 cursor-pointer">Return</li>
                        <li class="pt-2 cursor-pointer">Order Cancellation</li>
                        <li class="pt-2 cursor-pointer">Payment Options</li>
                        <li class="pt-2 cursor-pointer">Gift Card Balance</li>
                        <li class="pt-2 cursor-pointer">Contact Us</li>
          </ul>
        <div id="miniCompanyFooter" class="flex justify-between pt-4 pb-4">
            <p>COMPANY</p>
            <p>+</p>
        </div>
        <ul id="dropdownMiniCompanyFooter" class="text-xs text-gray-500 overflow-hidden h-0 duration-300">
            <li class="pt-2 cursor-pointer">About Nike</li>
            <li class="pt-2 cursor-pointer">News</li>
            <li class="pt-2 cursor-pointer">Careers</li>
            <li class="pt-2 cursor-pointer">Investors</li>
            <li class="pt-2 cursor-pointer">Purpose</li>
            <li class="pt-2 cursor-pointer">Sustainability</li>
          </ul>
        <div id="miniPromoteFooter" class="flex justify-between pt-4 pb-4">
            <p>PROMOTIONS AND DISCOUNTS</p>
            <p>+</p>
        </div>
        <ul id="dropdownMiniPromoteFooter" class="text-xs text-gray-500 overflow-hidden h-0 duration-300">
            <li class="pt-2 cursor-pointer">Student</li>
                        <li class="pt-2 cursor-pointer">Military</li>
                        <li class="pt-2 cursor-pointer">Teacher</li>
                        <li class="pt-2 cursor-pointer text-b"><P>First Responders & Medical Professinals</P></li>
                        <li class="pt-2 cursor-pointer">Birtday</li>
          </ul>
    </div>
    <div class=" text-gray-600 pb-4 flex gap-4 flex-wrap">
                    
        <a href="" class="bg-gray-500 flex justify-center items-center h-[30px] w-[30px] rounded-full hover:bg-[#d8d8d8]" >
            <img class="w-4" src="../../Images/twitter.png" alt="">
          </a>
    
    
        <a href="" class="bg-gray-500 flex justify-center items-center h-[30px] w-[30px] rounded-full hover:bg-[#d8d8d8]">
            <img class="w-4" src="../../Images/facebook.png" alt="">
          </a>
    
    
        <a href="" class="bg-gray-500 flex justify-center items-center h-[30px] w-[30px] rounded-full hover:bg-[#d8d8d8]">
        <img class="w-4" src="../../Images/youtube.png" alt="">
      </a>
    
    
        <a href="" class="bg-gray-500 flex justify-center items-center h-[30px] w-[30px] rounded-full hover:bg-[#d8d8d8]">
            <img class="w-4" src="../../Images/instagram.png" alt="">
          </a>
    
    </div>
    <div class="text-gray-500 pb-4">
        <p class="pb-2">United State</p>
        <p>© 2024 Nike, Inc. All Rights Reserved</p>
    </div>
    <div class="text-gray-500 ">
        <p class="pb-2">Guides</p>
        <p class="pb-2">Terms of Sale</p>
        <p class="pb-2">Terms of Use</p>
        <p class="pb-2">Nike Privacy Policy</p>
        <p class="pb-2">Your Privacy Choices</p>
        <p class="pb-2">CA Supply Chains Act</p>
    </div>

</div>
<!--  -->
<div class=" w-full bg-black hidden md:flex flex-col items-center">
    <div class="">
        <div class="flex  p-10 w-full">
            <div class=" flex gap-20 flex-wrap text-sm">
                <div class="">
                    <ul class="text-white text-sm nike-font">
                        <li class="pb-4">RESOURE</li>
                        <li class="pb-4">GET CARDS</li>
                        <li class="pb-4">FIND A STORE</li>
                        <li class="pb-4">BECOME A MEMBER</li>
                        <li class="pb-4">NIKE X NBA</li>
                        <li class="pb-4">NIKE JOURAL</li>
                        <li class="pb-4">Site Feedback</li>
            
                    </ul>
                </div>
                <div>
                    <p class="text-white nike-font">HELP</p>
                    <ul class=" text-[#7E7E7E] text-xs hal-font">
                        <li class="pt-2 cursor-pointer hover:text-white">Get Help</li>
                        <li class="pt-2 cursor-pointer hover:text-white">Order Status</li>
                        <li class="pt-2 cursor-pointer hover:text-white">Shipping and Delivery</li>
                        <li class="pt-2 cursor-pointer hover:text-white">Return</li>
                        <li class="pt-2 cursor-pointer hover:text-white">Order Cancellation</li>
                        <li class="pt-2 cursor-pointer hover:text-white">Payment Options</li>
                        <li class="pt-2 cursor-pointer hover:text-white">Gift Card Balance</li>
                        <li class="pt-2 cursor-pointer hover:text-white">Contact Us</li>
                    </ul>
                </div>
                <div>
                    <p class="text-white nike-font">COMPANY</p>
                    <ul class=" text-[#7E7E7E] text-xs hal-font">
                        <li class="pt-2 cursor-pointer hover:text-white">About Nike</li>
                        <li class="pt-2 cursor-pointer hover:text-white">News</li>
                        <li class="pt-2 cursor-pointer hover:text-white">Careers</li>
                        <li class="pt-2 cursor-pointer hover:text-white">Investors</li>
                        <li class="pt-2 cursor-pointer hover:text-white">Purpose</li>
                        <li class="pt-2 cursor-pointer hover:text-white">Sustainability</li>
                    </ul>
                </div>
                <div>
                    <p class="text-white nike-font">PROMOTIONS & DISCOUNTS</p>
                    <ul class=" text-[#7E7E7E] text-xs hal-font">
                        <li class="pt-2 cursor-pointer hover:text-white">Student</li>
                        <li class="pt-2 cursor-pointer hover:text-white">Military</li>
                        <li class="pt-2 cursor-pointer hover:text-white">Teacher</li>
                        <li class="pt-2 cursor-pointer hover:text-white">First Responders & Medical Professinals</li>
                        <li class="pt-2 cursor-pointer hover:text-white">Birtday</li>
                    </ul>
                </div>
                
                
            </div>
            <div class="">
                <div class=" text-[#7E7E7E] flex gap-4 flex-wrap">
                    
                        <a href="" class="bg-gray-500 flex justify-center items-center h-[30px] w-[30px] rounded-full hover:bg-[#d8d8d8]" >
                            <img class="w-4" src="../../Images/twitter.png" alt="">
                          </a>
                    
                    
                        <a href="" class="bg-gray-500 flex justify-center items-center h-[30px] w-[30px] rounded-full hover:bg-[#d8d8d8]">
                            <img class="w-4" src="../../Images/facebook.png" alt="">
                          </a>
                    
                    
                        <a href="" class="bg-gray-500 flex justify-center items-center h-[30px] w-[30px] rounded-full hover:bg-[#d8d8d8]">
                        <img class="w-4" src="../../Images/youtube.png" alt="">
                      </a>
                    
                    
                        <a href="" class="bg-gray-500 flex justify-center items-center h-[30px] w-[30px] rounded-full hover:bg-[#d8d8d8]">
                            <img class="w-4" src="../../Images/instagram.png" alt="">
                          </a>
                    
                </div>
            </div>
        </div>
        <div class="w-full flex justify-between gap-10 p-4 text-gray-600 flex-wrap">
            <div class=" flex items-end">
                <div class="flex gap-8 flex-wrap items-center justify-center">
                    <span class="flex justify-center items-center gap-2 text-white">
                            <i class="fa-solid fa-location-dot"></i>
  
                        <p class="text-white cursor-pointer text-sm hal-font">United State</p>
                    </span>

                    <p class="text-xs hal-font">© 2024 Nike, Inc. All Rights Reserved</p>
                </div>
    
            </div>
            <div class="flex gap-4 flex-col text-xs">
                <div class="flex gap-4 text-xs hal-fontflex-wrap">
                    <p class="pb-2 cursor-pointer hover:text-white">Guides</p>
                    <p class="pb-2 cursor-pointer hover:text-white">Terms of Sale</p>
                    <p class="pb-2 cursor-pointer hover:text-white">Terms of Use</p>
                    <p class="pb-2 cursor-pointer hover:text-white">Nike Privacy Policy</p>
                    <p class="pb-2 cursor-pointer hover:text-white">Your Privacy Choices</p>
                         
                </div>
                <div class="flex justify-end text-xs hal-font">
                    <p class="pb-2 cursor-pointer hover:text-white">CA Supply Chains Act</p>
                </div>
            </div>
        </div>
    </div>
</div>
    `
}
const createSubMenuButtom = ()=>{
  return `
  <div class="w-full p-8">
  <div class="sm:hidden">
    <div class="pb-4" id="featuredMiniMenu">
      <p class="">Featured</p>
      <ul class="text-sm text-gray-500 overflow-hidden h-0 duration-300">
        <li class="pt-2 menu-below-btn cursor-pointer">Air Force 1</li>
        <li class="pt-2 menu-below-btn cursor-pointer">Jordan 1</li>
        <li class="pt-2 menu-below-btn cursor-pointer">Metcon</li>
        <li class="pt-2 menu-below-btn cursor-pointer">Air Max 270</li>
        <li class="pt-2 menu-below-btn cursor-pointer">Air Max 97</li>
        <li class="pt-2 menu-below-btn cursor-pointer">Blazer</li>
        <li class="pt-2 menu-below-btn cursor-pointer">Pegasus</li>
      </ul>
    </div>
    <div class="pb-4" id="ShoeMiniMenu">
      <p class="">Shoe</p>
      <ul class="text-sm text-gray-500 overflow-hidden h-0 duration-300">
        <li class="pt-2 menu-below-btn cursor-pointer">All Shoes</li>
        <li class="pt-2 menu-below-btn cursor-pointer">Jordan Shoes</li>
        <li class="pt-2 menu-below-btn cursor-pointer">Running Shoes</li>
        <li class="pt-2 menu-below-btn cursor-pointer">Basketball Shoes</li>
        <li class="pt-2 menu-below-btn cursor-pointer">Tennis Shoes</li>
        <li class="pt-2 menu-below-btn cursor-pointer">Tranning Shoes</li>
        <li class="pt-2 menu-below-btn cursor-pointer">Custom Shoes</li>
        <li class="pt-2 menu-below-btn cursor-pointer">Sale Shoes</li>
        <li class="pt-2 menu-below-btn cursor-pointer">Soccer Cleats</li>
      </ul>
    </div>
    <div class="pb-4" id="ClothingMiniMenu">
        <p class="">Clothing</p>
        <ul class="text-sm text-gray-500 overflow-hidden h-0 duration-300">
            <li class="pt-2 menu-below-btn cursor-pointer">All Clothing</li>
            <li class="pt-2 menu-below-btn cursor-pointer">Tops & T-Shirts</li>
            <li class="pt-2 menu-below-btn cursor-pointer">Shorts</li>
            <li class="pt-2 menu-below-btn cursor-pointer">
              Hoodies & Pullovers
            </li>
            <li class="pt-2 menu-below-btn cursor-pointer">
              Joggers & Sweatpants
            </li>
            <li class="pt-2 menu-below-btn cursor-pointer">Sports Bras</li>
            <li class="pt-2 menu-below-btn cursor-pointer">Pants & Tights</li>
            <li class="pt-2 menu-below-btn cursor-pointer">Socks</li>
            <li class="pt-2 menu-below-btn cursor-pointer">Yoga</li>
            <li class="pt-2 menu-below-btn cursor-pointer">NikeLab</li>
            <li class="pt-2 menu-below-btn cursor-pointer">Plus Size</li>
            <li class="pt-2 menu-below-btn cursor-pointer">Big & Tall</li>
            <li class="pt-2 menu-below-btn cursor-pointer">Sale Clothing</li>
        </ul>
      </div>
      <div class="pb-4" id="KidsMiniMenu">
        <p class="">Kids</p>
        <ul class="text-sm text-gray-500 overflow-hidden h-0 duration-300">
            <li class="pt-2 menu-below-btn cursor-pointer">
                Infant & Toddler Shoes
              </li>
              <li class="pt-2 menu-below-btn cursor-pointer">Kids Shoes</li>
              <li class="pt-2 menu-below-btn cursor-pointer">
                Kids Basketball Shoes
              </li>
              <li class="pt-2 menu-below-btn cursor-pointer">Kids Running Shoes</li>
              <li class="pt-2 menu-below-btn cursor-pointer">Kids Jordan Shoes</li>
              <li class="pt-2 menu-below-btn cursor-pointer">Kids Clothing</li>
              <li class="pt-2 menu-below-btn cursor-pointer">Kids Backpacks</li>
              <li class="pt-2 menu-below-btn cursor-pointer">Kids Socks</li>
              <li class="pt-2 menu-below-btn cursor-pointer">Kids Sale</li>
        </ul>
      </div>
  </div>
  <div
    id="menu-below-hover"
    class="w-full hidden sm:flex sm:justify-center h-[14.5vh] duration-300 p-4 overflow-hidden"
  >
    <div class="flex flex-row gap-20">
      <div>
        <p class="menu-below-btn">Featured</p>
        <ul class="pt-4 text-gray-600">
          <li class="pt-2 menu-below-btn cursor-pointer">Air Force 1</li>
          <li class="pt-2 menu-below-btn cursor-pointer">Jordan 1</li>
          <li class="pt-2 menu-below-btn cursor-pointer">Metcon</li>
          <li class="pt-2 menu-below-btn cursor-pointer">Air Max 270</li>
          <li class="pt-2 menu-below-btn cursor-pointer">Air Max 97</li>
          <li class="pt-2 menu-below-btn cursor-pointer">Blazer</li>
          <li class="pt-2 menu-below-btn cursor-pointer">Pegasus</li>
        </ul>
      </div>
      <div>
        <p class="menu-below-btn">Shoe</p>
        <ul class="pt-4 text-gray-600">
          <li class="pt-2 menu-below-btn cursor-pointer">All Shoes</li>
          <li class="pt-2 menu-below-btn cursor-pointer">Jordan Shoes</li>
          <li class="pt-2 menu-below-btn cursor-pointer">Running Shoes</li>
          <li class="pt-2 menu-below-btn cursor-pointer">Basketball Shoes</li>
          <li class="pt-2 menu-below-btn cursor-pointer">Tennis Shoes</li>
          <li class="pt-2 menu-below-btn cursor-pointer">Tranning Shoes</li>
          <li class="pt-2 menu-below-btn cursor-pointer">Custom Shoes</li>
          <li class="pt-2 menu-below-btn cursor-pointer">Sale Shoes</li>
          <li class="pt-2 menu-below-btn cursor-pointer">Soccer Cleats</li>
        </ul>
      </div>
      <div>
        <p class="menu-below-btn">Clothing</p>
        <ul class="pt-4 text-gray-600">
          <li class="pt-2 menu-below-btn cursor-pointer">All Clothing</li>
          <li class="pt-2 menu-below-btn cursor-pointer">Tops & T-Shirts</li>
          <li class="pt-2 menu-below-btn cursor-pointer">Shorts</li>
          <li class="pt-2 menu-below-btn cursor-pointer">
            Hoodies & Pullovers
          </li>
          <li class="pt-2 menu-below-btn cursor-pointer">
            Joggers & Sweatpants
          </li>
          <li class="pt-2 menu-below-btn cursor-pointer">Sports Bras</li>
          <li class="pt-2 menu-below-btn cursor-pointer">Pants & Tights</li>
          <li class="pt-2 menu-below-btn cursor-pointer">Socks</li>
          <li class="pt-2 menu-below-btn cursor-pointer">Yoga</li>
          <li class="pt-2 menu-below-btn cursor-pointer">NikeLab</li>
          <li class="pt-2 menu-below-btn cursor-pointer">Plus Size</li>
          <li class="pt-2 menu-below-btn cursor-pointer">Big & Tall</li>
          <li class="pt-2 menu-below-btn cursor-pointer">Sale Clothing</li>
        </ul>
      </div>
      <div>
        <p class="menu-below-btn">Kids</p>
        <ul class="pt-4 text-gray-600">
          <li class="pt-2 menu-below-btn cursor-pointer">
            Infant & Toddler Shoes
          </li>
          <li class="pt-2 menu-below-btn cursor-pointer">Kids Shoes</li>
          <li class="pt-2 menu-below-btn cursor-pointer">Kids Basketball Shoes</li>
          <li class="pt-2 menu-below-btn cursor-pointer">Kids Running Shoes</li>
          <li class="pt-2 menu-below-btn cursor-pointer">Kids Jordan Shoes</li>
          <li class="pt-2 menu-below-btn cursor-pointer">Kids Clothing</li>
          <li class="pt-2 menu-below-btn cursor-pointer">Kids Backpacks</li>
          <li class="pt-2 menu-below-btn cursor-pointer">Kids Socks</li>
          <li class="pt-2 menu-below-btn cursor-pointer">Kids Sale</li>
        </ul>
      </div>
    </div>
  </div>
</div>
  `
}
class Footer extends HTMLElement {
  constructor() {
    super();
  }

  // Set up event listeners for menu buttons and dropdown menus
  connectedCallback() {
    this.innerHTML = createSubMenuButtom() + createFooter();
    this.setupEventListeners();
  }

  // Set up event listeners for menu buttons and dropdown menus
  setupEventListeners() {
    const menuBelowHover = this.querySelector("#menu-below-hover");
    const menuBelowButtons = this.querySelectorAll(".menu-below-btn");

    for (const button of menuBelowButtons) {
      button.addEventListener("mouseover", function () {
        menuBelowHover.style.height = "500px";
      });
      button.addEventListener("mouseout", function () {
        menuBelowHover.style.height = "14.5vh";
      });
    }

    // Loop through dropdown menus and set up event listeners
    const dropdownMenus = [
      { menu: "#miniHelpFooter", dropdown: "#dropdownMiniHelpFooter", height: "h-[200px]" },
      { menu: "#miniCompanyFooter", dropdown: "#dropdownMiniCompanyFooter", height: "h-[150px]" },
      { menu: "#miniPromoteFooter", dropdown: "#dropdownMiniPromoteFooter", height: "h-[120px]" },
      { menu: "#featuredMiniMenu", dropdown: "#featuredMiniMenu ul", height: "h-[200px]" },
      { menu: "#ShoeMiniMenu", dropdown: "#ShoeMiniMenu ul", height: "h-[200px]" },
      { menu: "#ClothingMiniMenu", dropdown: "#ClothingMiniMenu ul", height: "h-[370px]" },
      { menu: "#KidsMiniMenu", dropdown: "#KidsMiniMenu ul", height: "h-[250px]" }
    ];

    dropdownMenus.forEach(({ menu, dropdown, height }) => {
      const miniMenu = this.querySelector(menu);
      const dropdownMenu = this.querySelector(dropdown);
      this.clickDropdownMiniMenu(miniMenu, dropdownMenu, height);
    });
  }
  // Function to toggle dropdown menu visibility based on click event
  clickDropdownMiniMenu(menu, dropdown, height) {
    let isActive = false;
    menu.addEventListener('click', () => {
      isActive = !isActive;
      dropdown.classList.toggle(height, isActive);
    });
  }
}

customElements.define('footer-component', Footer);
