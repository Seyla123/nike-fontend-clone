const createPromotionBar = () => {
    return `
    <div class="w-full flex justify-center items-center bg-[#f5f5f5]">
    <p class="underline underline-offset-auto text-xs p-4 m-2">Members : Free Shipping on Orders $50+</p>
</div>`
}
class Promotion extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback(){
        this.innerHTML = createPromotionBar();
    }
}
customElements.define("promotion-component", Promotion)