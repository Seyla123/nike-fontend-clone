// This code defines the nikeMemberShip array and creates a carousel for Nike Membership items.

const nikeMemberShip = [{
    title : "Nike Alphafly 3",
    description : "Push Beyond What's Possible",
    button : "Shop",
    img : "../../Images/member-1.jpeg",
},
{
    title : "Member Product",
    description : "Your Exclusive Access",
    button : "Shop",
    img : "../../Images/member-2.jpeg",
},
{
    title : "Member Product",
    description : "How We Say Thank You",
    button : "Celebrate",
    img : "../../Images/member-3.jpeg",
},
{
    title : "Sports & Wellness Apps",
    description : "Movement Where<br>You’re At",
    button : "Move",
    img : "../../Images/member-4.jpeg",
},
{
    title : "Nike By You",
    description : "Your Customization Service",
    button : "Customize",
    img : "../../Images/member-5.jpeg",
},
]
const createMemberShipCarousel = (arr) => {
    return `<div class="">
    <div class="flex justify-between mb-4 p-4">
      <h2 class="text-3xl font-medium flex items-center">
        Nike Membership
      </h2>
      <div class="hidden lg:flex gap-2 items-center">
        <a id="back-btn"
          class="cursor-pointer flex justify-center items-center h-[50px] w-[50px] rounded-full bg-gray-100 hover:bg-[#d8d8d8]"
        >
          <img class="w-4" src="../../Images/back.png" alt="">
        </a>
        <a id="next-btn"
          class="cursor-pointer flex justify-center items-center h-[50px] w-[50px] rounded-full bg-gray-200 hover:bg-[#d8d8d8]"
        >
          <img class="w-4" src="../../Images/next.png" alt="">
        </a>
      </div>
    </div>
    
    <div 
      id="container"
      class="flex flex-no-wrap gap-1 overflow-x-scroll scrolling-touch items-start mb-8 mx-4 "
    >
    ${arr.map((item)=>{
        return `
        <div class="flex-none relative z-0 w-1/1 lg:w-1/3 lg:pb-4 border">
        <a href="#" class="space-y-4 relative">
          <div class="bg-amber-300 w-full flex items-end">
            <img  class="w-full h-auto" src="${item.img}" alt="">
            <div class="absolute p-10">
                <p class="text-base text-white">${item.title}</p>
                <h2 class="text-2xl  text-white">${item.description}</h2>
                <button class="mt-6 bg-white py-2 px-4 rounded-full flex items-center hover:bg-gray-400 ">${item.button}</button>
            </div>
          </div>
        </a>
      </div>
        `
    }).join('')}
      
    </div>
  </div>
    `
}

// Create MembershipCarousel custom element
class MembershipCarousel extends HTMLElement{
    constructor() {
        super();
    }

    // When connected to the DOM, set inner HTML and add event listeners
    connectedCallback(){
        this.innerHTML = createMemberShipCarousel(nikeMemberShip);
        this.setupEventListeners();
    }

    // Add event listeners for back and next buttons
    setupEventListeners(){
      const backBtn = this.querySelector("#back-btn");
      const nextBtn = this.querySelector("#next-btn");
      const container = this.querySelector("#container");
      this.addBackEventListener(container, backBtn);
      this.addNextEventListener(container, nextBtn);
    }

    // Event listener for next button
    addNextEventListener(element, btn) {
      btn.addEventListener("click", function () {
        element.scrollBy({
          left: 300,
          behavior: "smooth",
        });
      });
    }

    // Event listener for back button
    addBackEventListener(element, btn) {
      btn.addEventListener("click", function () {
        element.scrollBy({
          left: -300,
          behavior: "smooth",
        });
      });
    }
}
customElements.define('member-ship-carousel', MembershipCarousel);

