const createSubNavbar = (arr)=>{
    return `
    <div id="subNavbar" class=" sticky top-0 z-40 bg-white">
    <div class="w-full max-w-[1800px] mx-auto pr-4 pl-4">
        <div id="menu" class="w-full flex justify-between py-4 duration-300  sticky top-0 z-30  bg-white flex-col md:flex-row">
        ${arr.map((item)=>{
            return `<h3 class="flex-1 flex items-center">${item.title}</h3>
            <div class="flex items-center  flex-2 flex-nowrap text-nowrap overflow-hidden">
                <ul class="flex">
                ${item.menu.map((subItem)=>{
                    return `
                    <li class="pr-4 md:p-4">${subItem}</li>`
                }).join('')}
                    
                </ul>
            </div>
        
            <div class="hidden lg:flex flex-1">
                <h3 class="p-4 invisible">${item.title}</h3>
            </div>`
            }).join('')}
        </div>
    </div>
</div>
    `
}
export function createSubNavbarFunction(arr){
    class SubNavbar extends HTMLElement{
        constructor(){
            super()
    
        }
        connectedCallback(){
            this.innerHTML = createSubNavbar(arr);
            this.setUpEventListener();
        }
        setUpEventListener(){
            const subNavbar = this.querySelector("#subNavbar");
            const menu = this.querySelector("#menu");
            const menuH3 = this.querySelector("#menu h3");
            window.addEventListener("scroll", function () {
              if (subNavbar.offsetTop - window.scrollY <= 0) {
                menu.classList.add("py-0");
                menuH3.classList.remove("text-2xl");
              }
              if (subNavbar.offsetTop - window.scrollY > 10) {
                menu.classList.remove("py-0");
                menuH3.classList.add("text-2xl");
              }
            });
        }
    }
    
    customElements.define("sub-navbar-component", SubNavbar)
}