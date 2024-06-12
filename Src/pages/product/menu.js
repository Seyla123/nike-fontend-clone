const listItems = [
    { text: 'Featured', href: '#' },
    { text: 'Newest', href: '#' },
    { text: 'Price : Hight-Low', href: '#' },
    { text: 'Price : Low-Hight', href: '#' }
];

const createMenu = ()=>{
    return `
    <div id="menu" class="w-full flex justify-between py-6 duration-300 sticky top-0 z-30 bg-white flex-col md:flex-row">
        <div class="flex-1 flex items-center py-4">
            <h3 class="text-2xl duration-500 hal-font hal-font">
                New Release
                <span class="opacity-0 lg:opacity-100">(1890)</span>
            </h3>
        </div>
        <div class="hidden lg:flex items-center flex-2 relative">
            <button id="showHideBtn" class="pr-4 md:p-4 flex gap-2">
                <p>Hide Filters</p>
                <svg aria-hidden="true" class="icon-filter-ds" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M21 8.25H10m-5.25 0H3"></path><path stroke="currentColor" stroke-width="1.5" d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clip-rule="evenodd"></path><path stroke="currentColor" stroke-width="1.5" d="M3 15.75h10.75m5 0H21"></path><path stroke="currentColor" stroke-width="1.5" d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clip-rule="evenodd"></path></svg>
            </button>
            <button id="selectSortBtn" class="pr-4 md:p-4 flex gap-2 items-center">
                <p>Sort By</p>
                <span class="w-4">
                    <img src="../../Images/down-arrow.png" class="transition-all transform" alt="">
                </span>
            </button>
            <div id="sortByDropdown" class="bg-white hidden rounded-lg right-0 top-10 duration-300 absolute z-50">
                <div class="p-4 space-y-4">
                    <ul class="text-base space-y-1 hal-font text-end">
                        ${listItems.map((item) => {
                            return `<li>
                                <a class="hover:text-gray-500" href="${item.href}">${item.text}</a>
                            </li>`;
                        }).join("")}
                    </ul>
                </div>
            </div>
        </div>
    </div>

`
}

class Menu extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML = createMenu();
        this.setUpEventListener()
        
    }
    setUpEventListener(){
        const menu = this.querySelector("#menu");
        const menuH3 = this.querySelector("#menu h3");
        window.addEventListener('scroll', function() {
          if(menu.offsetTop - window.scrollY <= 0){
            menu.classList.add("py-0");
            menuH3.classList.remove("text-2xl");
          }
          if(menu.offsetTop - window.scrollY > 10){
            menu.classList.remove("py-0");
            menuH3.classList.add("text-2xl");
          }
        })
    }
}

customElements.define('menu-content', Menu)

