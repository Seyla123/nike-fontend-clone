const miniMenuItems = [
    { name: 'Shoes', href: '#' },
    { name: 'Tops & T-Shirts', href: '#' },
    { name: 'Shorts', href: '#' },
    { name: 'Hoodies & Pullovers', href: '#' },
    { name: 'Jackets & Vests', href: '#' },
    { name: 'Pants & Tights', href: '#' },
    { name: 'Swimming', href: '#' },
    { name: 'Socks', href: '#' },
    { name: 'Accessories & Equipment', href: '#' },
];
const createMiniMenu = () => {
    return `
    <div class="lg:hidden  divide-y">
    <div class=" w-full py-6 flex items-center ">
        <ul class="flex flex-nowrap text-nowrap overflow-hidden">
        ${miniMenuItems.map((item)=>{
            return `
            <li>
                <a class="w-4 pr-4 font-semibold" href="${item.href}">${item.name}</a>
             </li>
            `
        })}
        </ul>
    </div>
    <div class="w-full py-6 pr-4 flex justify-between items-center ">
        
            <p>Pick Up Today</p>
            <button class="">
                <div class="bg-gray-300 w-11 h-6 rounded-full relative flex items-center ">
                    <div id="toggleBtnMini"
                        class="hover:bg-gray-400/50 duration-300 rounded-full absolute left-[-10px] p-3">
                        <div class="size-5 rounded-full bg-white ">

                        </div>
                    </div>
                </div>

            </button>
        
    </div>
    <div class="flex items-center justify-between py-4 pr-4 w-full ">
        <span class="text-gray-500 ">1890 Result</span>
        <button id="filterBtn" class="pr-4 flex gap-2 items-center border-2 py-1 px-4 rounded-full ">
                
            <p class="font-semibold">Filter</p>
            <span class="w-4">
                <svg aria-hidden="true" class="icon-filter-ds" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M21 8.25H10m-5.25 0H3"></path><path stroke="currentColor" stroke-width="1.5" d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clip-rule="evenodd"></path><path stroke="currentColor" stroke-width="1.5" d="M3 15.75h10.75m5 0H21"></path><path stroke="currentColor" stroke-width="1.5" d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clip-rule="evenodd"></path></svg>
                
            </span>
        
        </button>
    
    </div>
</div>

    `
}

class MiniMenu extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.innerHTML = createMiniMenu();

    }
}
customElements.define('mini-menu-content', MiniMenu);