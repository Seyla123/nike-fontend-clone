import './sideBar.js';

const menuItems = [
  {
    text: "New & Featured",
    id: "featured-menu-btn",
    href: "../../pages/product/index.html"
  },
  {
    text: "Men",
    id: "men-menu-btn",
    href: "../../pages/men/index.html"
  },
  {
    text: "Women",
    id: "women-menu-btn",
    href: "../../pages/women/index.html"
  },
  {
    text: "Kids",
    id: "kid-menu-btn",
    href: "../../pages/kid/index.html"
  },
  {
    text: "Accessories",
    id: "acc-menu-btn",
    href: ""
  },
  {
    text: "Sales",
    id: "sale-menu-btn",
    href: ""
  }
];
const menDropdown = [
  {
    title: "New Styles Added ",

    items: ["Sale: Up to 50% Off"],

  },
  {
    title: "New & Featured",

    items: [
      "New Arrivals",
      "Best Sellers",
      "Customize with Nike by You",
      "New in Jordan",
      "Golf x Lifestyle",
      "Add to Bag to See Price",
    ]

  },
  {
    title: "All Shoes",

    items: [
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
    ]


  },
  {
    title: "All Clothing",

    items: [
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


  },
  {
    title: "Shop by Sport",

    items: [
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


  }
]
const womenDropdown = [
  {
    title: "New Styles Added ",
    items: ["Sale: Up to 50% Off"],
  },
  {
    title: "All Shoes",
    items: [
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
  },
  {
    title: "All Clothing",
    items: [
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
    ]
  },
  {
    title: "Shop by Sport",
    items: [
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
  },
]
const accDropdown = [
  {
    title: "New Styles Added",
    items: ["Sale: Up to 50% Off"]
  },
  {
    title: "All Accessories",
    items: [
      "Socks",
      "Bags & Backpacks",
      "Hats & Headwear",
      "Sunglasses & Eyewear",
      "Water Bottles & Hydration",
      "Gloves",
      "Jordan",
      "Belts",
    ]
  },
  {
    title: "Shop by Sport",
    items: [
      "Basketball",
      "Golf",
      "Soccer",
      "Running",
      "Tennis",
      "Baseball",
      "Football",
      "Training & Gym",
    ]
  }];
const saleDropdown = [
  {
    title: "New Styles Added",
    items: ["Sale: Up to 50% Off"]
  },
  {
    title: "All Sale",
    items: ["Sale Shoes", "Sale Clothing", "Sale Accessories"],
  },
  {
    title: "Men",
    items: ["Shoes", "Clothing", "Accessories", "Shop All"],
  },
  {
    title: "Women",
    items: ["Shoes", "Clothing", "Accessories", "Shop All"],
  },
  {
    title: "Kids",
    items: ["Shoes", "Clothing", "Accessories", "Shop All"],
  },
]
const featureItem = [
  {
    title: "New Styles Added",
    items: ["Sale: Up to 50% Off"]
  },
  {
    title: "New & Featured",
    items: ["New Arrivals", "Best Sellers", "Member Product", "New & Upcoming Drops", "SNKRS Launch Calendar", "New in ACG", "Retro Running", "See Price in Bag"]
  },
  {
    title: "Shop Classic",
    items: ["Air Jordan 1", "Air Force", "Dunk", "Air Max", "Blazer"]
  },
  {
    title: "New For Men",
    items: ["Shoes", "Clothing"]
  },
  {
    title: "New For Women",
    items: ["Shoes", "Clothing"]
  },
  {
    title: "New Markdowns",
    items: ["Shoes", "Clothing"]
  },
  {
    title: "Jordan",
    items: ["Shop All", "Latest in Jordan", "Men", "Women", "Kids", "Basketball"]
  }
];
const KidMenuArr = [
  {
    title: "New Styles Added",
    items: ["Sale: Up to 50% Off"]
  },
  {
    title: "New & Featured",
    items: ["New Arrivals", "Best Sellers", "Teen Girl Essentials", "Skate X Lifestyle", "SNKRS Launch Calendar", "Summer Pastels", "Add to Bag to See Price"]
  },
  {
    title: "Shoes",
    subcategories: [
      {
        title: "Shoes by Size",
        items: ["Big Kids (1Y - 7Y)", "Little Kids (8C - 3Y)", "Baby & Toddler (1C - 10C)"]
      },
      {
        title: "All Shoes",
        items: ["Lifestyle", "Jordan", "Dunk", "Air Max", "Air Force 1", "Basketball", "Running", "Sandals & Slides"]
      }
    ]
  },
  {
    title: "Clothing",
    subcategories: [
      {
        title: "Clothing by Size",
        items: ["Big Kids (XS - XL)", "Little Kids (4 - 7)", "Baby & Toddler (0M - 4T)", "Extended Sizing"]
      },
      {
        title: "All Clothing",
        items: ["Jordan", "Matching Sets", "Tops & T-Shirts", "Shorts", "Hoodies & Sweatshirts", "Jackets & Vests", "Pants & Tights", "Bras", "Socks"]
      }
    ]
  },
  {
    title: "Shop by Sport",
    items: ["Basketball", "Golf", "Soccer", "Running", "Baseball", "Football", "Softball", "Tennis", "Dance", "Swimming", "Skateboarding"]
  }
];

// Function to render the list of items for a menu category
const renderKidItem = (items) => {

  return items.map((item) => `
    <!-- Render an item in the menu -->
    <li class="pt-2 cursor-pointer hover:text-black">${item}</li>
    `).join("");
};

// Function to render a dropdown menu
const renderMenu = (menuItems) => {
  return `
    <!-- Render a dropdown menu -->
    <nav id="dropdown-container-test"  class="dropdown-container  md:flex z-50 h-[0px] absolute duration-300 w-full flex-col bg-white text-gray-800 group-hover:visible">
    <div class="dropdown-content opacity-0 pointer-events-none p-6 w-full flex gap-20 justify-center">
    ${menuItems.map((menuItem) => `

      <div>
      <h3 class="font-semibold">${menuItem.title}</h3>
      ${menuItem.subcategories ?
      `
        <div>
          ${menuItem.subcategories.map((subcategory) => `
          <div>
            <h3 class="font-semibold pt-4">${subcategory.title}</h3>
            <ul class="pt-4 text-gray-600">
              ${renderKidItem(subcategory.items)}
            </ul>
        </div>
          `).join("")}
        </div>
        `
      :
      `
        <ul class="pt-4 text-gray-600">
          ${renderKidItem(menuItem.items)}
        </ul>
        `
    }
  
      </div>
      `).join("")}
    </div>
  </nav>
    `
};

// Function to render all the dropdown menus
const renderMenuAll = () => {
  const menuArr = [featureItem, menDropdown, womenDropdown,KidMenuArr ,accDropdown, saleDropdown ]
  return  menuArr.map((menu) => {
    return renderMenu(menu)
  }).join("")
}

// Function to render the menu items for small screens
const renderMenuItems = () => {
  return `
    <!-- Render the menu items for small screens -->
    <div class="hidden lg:flex items-center justify-center">
      <ul class="flex flex-wrap">
      ${menuItems.map((item) => {
    return `
        <!-- Render a menu item -->
        <a id="${item.id}" class="new-featured-menu px-2 py-4 hover:opacity-50" href="${item.href}">
          <li class="">${item.text}</li>
        </a>
        `
  }).join("")}
      </ul>
    </div>
  `;
}
//create content of navbar menu small screen
const createMenuSmall = ()=>{
  return `
  <div class="flex flex-row lg:hidden">
    <a href="" class="flex justify-center items-center h-[40px] w-[40px] rounded-full hover:bg-[#d8d8d8]">
      <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
        <path stroke="currentColor" stroke-width="1.5" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path>
      </svg>
    </a>
    <a href="" class="flex justify-center items-center h-[40px] w-[40px] rounded-full hover:bg-[#d8d8d8]">
      <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
        <path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path>
      </svg>
    </a>
    <a href="" class="flex justify-center items-center h-[40px] w-[40px] rounded-full hover:bg-[#d8d8d8]">
      <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none" data-var="glyph" style="display: inline-block;">
        <path fill="currentColor" d="M12 3a4.5 4.5 0 00-4.5 4.5H9a3 3 0 013-3V3zM7.5 7.5A4.5 4.5 0 0012 12v-1.5a3 3 0 01-3-3H7.5zM12 12a4.5 4.5 0 004.5-4.5H15a3 3 0 01-3 3V12zm4.5-4.5A4.5 4.5 0 0012 3v1.5a3 3 0 013 3h1.5zM4.5 21v-3H3v3h1.5zm0-3a3 3 0 013-3v-1.5A4.5 4.5 0 003 18h1.5zm3-3h9v-1.5h-9V15zm9 0a3 3 0 013 3H21a4.5 4.5 0 00-4.5-4.5V15zm3 3v3H21v-3h-1.5z"></path>
      </svg>
    </a>
    <button id="min-menu-btn" href="" class="flex justify-center items-center h-[40px] w-[40px] rounded-full hover:bg-[#d8d8d8]">
      <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
        <path stroke="currentColor" stroke-width="1.5" d="M21 5.25H3M21 12H3m18 6.75H3"></path>
      </svg>
    </button>
  </div>`
}
//create content of group search bar , cart and favorite
const createLeftMenuNavbar = () => {
  return `
  <div id="test" class="hidden lg:flex flex-row justify-end items-center">
    <div class="flex flex-row items-center">
      <a onClick="" class="menu-hover absolute flex justify-center items-center h-[40px] w-[40px] rounded-full hover:bg-[#d8d8d8]">
        <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
          <path stroke="currentColor" stroke-width="1.5" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path>
        </svg>
      </a>
      <input class="bg-[#eeeeee] min-h-[40px] min-w-[180px] rounded-[60px] text-gray-400 text-center hover:bg-[#d8d8d8] outline-none" value="Search" type="text" />
    </div>
    <a href="" class="flex justify-center items-center h-[40px] w-[40px] rounded-full hover:bg-[#d8d8d8]">
      <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
        <path stroke="currentColor" stroke-width="1.5" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path>
      </svg>
    </a>
    <a id="max-cart-btn" href="" class="flex justify-center items-center h-[40px] w-[40px] rounded-full hover:bg-[#d8d8d8]">
      <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
        <path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path>
      </svg>
    </a>
  </div>
  `
}
//function for create Navbar bar
const createNavbar = () => {
  return `
    <div class="w-full top-0 bg-white z-[51]" id="navbar">
      <div class="flex justify-between lg:grid grid-cols-3 max-w-[1800px] mx-auto px-2">
        <a href="../../pages/home/index.html" class="flex items-center min-w-16 max-w-16 justify-center">
          <img class="w-full h-auto" src="https://i.pinimg.com/originals/20/60/2d/20602d43cc993811e5a6bd1886af4f33.png" alt="" />
        </a>
        <div class="hidden lg:flex items-center justify-center">
          ${renderMenuItems()}
        </div>

        <!-- for phone screen -->
        ${createMenuSmall()}

        <!--  -->
        ${createLeftMenuNavbar()}
      </div>

        ${renderMenuAll()}

     </div>
    <div id="blurBg" class="z-40 duration-700 pointer-events-none fixed w-full h-full"></div>
    `
}


class Navbar extends HTMLElement {
  constructor() {
    super()
  }
  connectedCallback() {
    // Set the inner HTML of the custom element
    this.innerHTML = createNavbar()
    this.addEventListener()
  }
  addEventListener(){
    // Set up event listeners for the dropdown menu buttons

    const btn = document.querySelectorAll(".new-featured-menu")
    const dropdownContainer = document.querySelectorAll(".dropdown-container")
    btn.forEach((container,index) => {
      // Add mouseover event listener to the container
      container.addEventListener("mouseover", () => {
        // Find the dropdown content within the container
        const content = dropdownContainer[index].querySelector(".dropdown-content")
        // Call the dropdown function with the container, content, and height
        this.dropdown(container,content,dropdownContainer[index],"h-[600px]");
      })
    })
    this.sidebar()
  }

 //This function sets up the event listeners for a dropdown menu.
  dropdown(btnDropdown, dropdownContent, container) {
    // Function to compute the height of the dropdown content
    const navbarTop = document.querySelector("#navbar")
    const computeHeight = () => {
      const contentHeight = dropdownContent.scrollHeight;
      container.style.height = `${contentHeight+50}px`;
    }
  
    // Function to handle the mouseover event on the dropdown button or container
    const mouseOverHandler = () => {
      dropdownContent.classList.remove("pointer-events-none");
      computeHeight();
      dropdownContent.classList.add("delay-300", "opacity-100");
      navbarTop.classList.add("sticky");
      blurBg.classList.add("backdrop-blur-sm", "bg-white/10");
    };
  
    // Function to handle the mouseout event on the dropdown button or container
    const mouseOutHandler = () => {
      container.style.height = '0px';
      dropdownContent.classList.remove("delay-300", "opacity-100");
      dropdownContent.classList.add("pointer-events-none");
      navbarTop.classList.remove("sticky");
      blurBg.classList.remove("backdrop-blur-sm", "bg-white/10");
    };
  
    // Add event listeners for the mouseover and mouseout events
    btnDropdown.addEventListener("mouseover", mouseOverHandler);
    container.addEventListener("mouseover", mouseOverHandler);
    btnDropdown.addEventListener("mouseout", mouseOutHandler);
    container.addEventListener("mouseout", mouseOutHandler);
  }
  sidebar(){
    // This function sets up the event listeners for the sidebar component.
    // It toggles the visibility of the sidebar when the "min-menu-btn" or "close-btn" is clicked.
    // It also adds classes to the "body" and "all-except-sidebar" elements to control the visibility and blur effect.
    // The sidebar is initially hidden by setting its right position to "-100%".
    const sidebar = document.querySelector("#sidebar");
    const minMenuBtn = document.querySelector("#min-menu-btn");
    const allExceptSidebar = document.querySelector("#all-except-sidebar");
    const closeBtn = document.querySelector("#close-btn");

    const toggleSidebar = (isOpen) => {
      document.body.classList.toggle("overflow-hidden", isOpen);
      allExceptSidebar.classList.toggle("blur-sm", isOpen);
      sidebar.style.right = isOpen ? "0%" : "-100%";
    };

    minMenuBtn.addEventListener("click", () => toggleSidebar(true));
    closeBtn.addEventListener("click", () => toggleSidebar(false));
      }
}

// Define the custom element
customElements.define("navbar-component", Navbar);








