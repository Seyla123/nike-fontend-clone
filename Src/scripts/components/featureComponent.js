// Function to create feature content with title and array of items
const createFeatureContent = (title, arr) => {
    return `
    <div class="mb-10 p-4">
    <div class="flex justify-between mb-4 pb-8">
        <h2 class="text-3xl font-medium flex items-center">
          ${title}
        </h2>
    
    </div>
    <div class="w-full flex flex-col md:flex-row justify-between gap-1 relative z-0">
    ${arr.map((item) => {
        return `
        <div class="bg-amber-300 w-full flex items-end">
            <img  class="w-full h-auto" src="${item.img}" alt="">
            <div class="absolute p-10">
                <p class="text-base text-white">${item.title}</p>
                <h2 class="text-2xl  text-white">${item.description}</h2>
                <button class="mt-6 h-[36px] w-[74px] bg-white py-2 px-4 rounded-full flex items-center ">${item.button}</button>
            </div>
        </div>
        `
    }).join('')}
    </div>
</div>
    `
}

// Creates a custom feature component with the specified title, array of items, and component name

export function createFeatureComponent(title, arr, componentName) {
    class Feature extends HTMLElement {
        constructor() {
            super();
        }
        connectedCallback() {
            this.innerHTML = createFeatureContent(title, arr);
        }
    }
    customElements.define(componentName, Feature);
}
