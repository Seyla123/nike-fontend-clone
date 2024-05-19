// This function creates a carousel component with title, array of items, and optional typeCarousel parameter
const createCarousel = (title,arr,typeCarousel=false) => {
    return `<div class="flex justify-between mb-4 p-4">
  <h2 class="text-3xl font-medium flex items-center">
    ${title}
  </h2>
  <div class="hidden lg:flex gap-2 items-center">
    <a id="back-btn"
      class="cursor-pointer flex justify-center items-center h-[50px] w-[50px] rounded-full bg-gray-100 hover:bg-[#d8d8d8]">
      <img class="w-4" src="../../Images/back.png" alt="">
    </a>
    <a id="next-btn"
      class="cursor-pointer flex justify-center items-center h-[50px] w-[50px] rounded-full bg-gray-200 hover:bg-[#d8d8d8]">
      <img class="w-4" src="../../Images/next.png" alt="">
    </a>
  </div>
</div>

<div id="container"
  class="flex flex-no-wrap gap-2 overflow-x-scroll scrolling-touch items-start mb-8 p-4">

  ${arr.map((item)=>{
    return `
    <div class="flex-none w-1/1 lg:w-1/3 lg:pb-4">
    <a href="#" class="space-y-4">
      <div class="aspect-w-16 aspect-h-9">
        <img class="object-cover shadow-lg hover:shadow-xl" src="${item.img}" alt="" />
      </div>
      <div class="px-4 py-2">
        
        <div class="text-lg">
        ${typeCarousel == 'shoe' ? `<h3>${item.title}</h3>
        <p class="text-gray-500">${item.type}</p>
        <p>${item.price}</p>` : `<p class="">${item.title}</p>`}
        </div>
      </div>
    </a>
  </div>
    `
  }).join('')}
</div>
    `
}

// Function to create a custom carousel element
export function createCarouselArr (title,arr,componentName,typeCarousel) {
  class Carousel extends HTMLElement{
    constructor() {
        super();
    }
     // When connected to the DOM, set inner HTML and add event listeners
    connectedCallback(){
        this.innerHTML = createCarousel(title,arr,typeCarousel);
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
customElements.define(componentName, Carousel);
}
