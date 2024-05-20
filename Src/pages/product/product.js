const createProduct =(id,mainImg,productName,type,color,price)=>{
    return `
    <a href="../../pages/product-detail.html?${id}" class="">
  <div class="">
      <img  src="${mainImg}" alt="">
  </div>
  <div class="py-2 flex flex-col gap-1">
      <p class="text-red-800">Just In</p>
      <p class="font-medium">${productName}</p>
      <p class="text-gray-400">${type}</p>
      <p class="text-gray-400">${color}/p>
      <p class="font-medium">$${price}</p>
  </div>
</a>
    `
}
import { productArr } from "./productArr.js"
class Product extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        productArr.map((item)=>{
            this.innerHTML +=createProduct(item.id,item.mainImg,item.productName,item.type,item.color,item.price)
        })
    }
}

customElements.define('product-content', Product);