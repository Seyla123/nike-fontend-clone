


const createCarousel = (title, imgUrlArray, glide) => {
	return `
    <div class="relative mt-10">
        <!-- title -->
        <h2 class="p-4 text-3xl font-medium flex items-center relative z-[-1] ">
        ${title}
      </h2>

        <!-- Carousel -->
        <div class="relative w-full ${glide} overflow-hidden">
            <!-- Slides -->
            <div class="" data-glide-el="track">
                <ul class="relative w-full overflow-hidden whitespace-no-wrap flex flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] py-6">
                    ${imgUrlArray
											.map((item) => {
												return `
                            <div class="overflow-hidden duration-500">
                                <a href="" class="w-full">
                                    <img src="${item}" class="object-cover w-full h-full">
                                </a>
                            </div>
                        `;
											})
											.join('')}
                </ul>
            </div>
            <!-- Controls -->
            <div class="absolute z-[10] left-[0%] flex items-center justify-between w-full h-0 px-4 top-1/2" data-glide-el="controls">
            <button data-glide-dir="<" aria-label="prev slide" id="classic-back-btn" type="button" class="absolute  top-0 start-0  flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span class="inline-flex items-center justify-center w-10 h-10 z-[-1]  rounded-full bg-white">
                <svg class="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                </svg>
            </span>
        </button>
        <button data-glide-dir=">" aria-label="next slide" id="classic-next-btn" type="button" class="absolute top-0 end-0  flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span class="inline-flex items-center justify-center z-[-1] w-10 h-10 rounded-full bg-white">
                <svg class="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
            </span>
        </button>
            </div>
        </div>
    </div>
`;
};




class CarouselComponent extends HTMLElement {
	connectedCallback() {
		const title = this.getAttribute('title');
		const glide = this.getAttribute('glide');
		// Parse the imgUrl attribute as an array
		const imgUrlArray = JSON.parse(this.getAttribute('imgUrl'));

		this.innerHTML = createCarousel(title, imgUrlArray, glide);
	}
}

customElements.define('carousel-component', CarouselComponent);




var glide01 = new Glide('.glide-01', {
   type: 'carousel',
   focusAt: 'center',
   perView: 4,
   animationDuration: 700,
   gap: 20,
   classes: {
      activeNav: '[&>*]:bg-slate-700',
   },
   breakpoints: {
      1024: {
         perView: 4,
      },
      640: {
         perView: 3,
      },
   },
});

glide01.mount();

