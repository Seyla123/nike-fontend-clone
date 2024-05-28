const createMoreExplore = (arr)=>{
    return `
    <div class="w-full p-4">
    <div class="flex justify-between mb-4 ">
      <h2 class="text-3xl font-medium flex items-center">
        More to Explore
      </h2>
    </div>
    <div class="flex flex-no-wrap gap-2 overflow-x-scroll scrolling-touch items-start">
    ${arr.map((item)=>{
        return `
        <div class="flex-none w-1/1 lg:w-1/3 lg:pb-4">
        <img src="${item.img}" alt="">
        <div class="flex flex-col gap-6 py-4">
            <h2 class="text-xl">${item.title}</h2>
            <a href="#" class="underline underline-offset-8 hover:text-gray-500 text-sm">${item.button}</a>
        </div>
    </div>
        `
    }).join('')}
    </div>
</div>
    `
}
const kidMoreExplore = [{
    title:"Spring Break Ready",
    img:"../../images/kid/nike-kids-shoes-clothing-and-accessories-nike-com(6).jpg",
    button:"Shop",
},
{
    title:"Shoes $70 & Under",
    img:"../../images/kid/nike-kids-shoes-clothing-and-accessories-nike-com(7).jpg",
    button:"Shop",
},
{
    title:"Best of Jordan",
    img:"../../images/kid/nike-kids-shoes-clothing-and-accessories-nike-com(8).jpg",
    button:"Shop",
},
]
class MoreExplore extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML = createMoreExplore(kidMoreExplore);
    }
}

customElements.define('more-explore-component', MoreExplore);