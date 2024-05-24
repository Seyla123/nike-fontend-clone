import { productArr } from "../product/productArr.js";
const createSubImg = () =>{
    return ``
}



const hrefLink = window.location.href.split("?");
const productId = parseInt(hrefLink[1]);
const product = productArr.find(item => item.id === productId);
const picSmallContainer = document.querySelector(".picSmall");
const mainImg = document.querySelectorAll("#mainImg");
const description = document.querySelector("#descriptionId");
const titleId = document.querySelector("#titleId");
const typeId = document.querySelector("#typeId");
const priceId = document.querySelector("#priceId");
//titleId
//typeId
//priceId
description.innerHTML=product.description
titleId.innerHTML = product.productName
typeId.innerHTML = product.type
priceId.innerHTML = `$${product.price}`
mainImg[0].setAttribute("src", product.subImg[0]);
mainImg[1].setAttribute("src", product.subImg[0]);

product.subImg.map((item)=>[
    picSmallContainer.innerHTML +=
    `<div class="w-full  rounded-lg max-w-44">
    <img class="object-fill h-14 w-44 rounded-lg" src="${item}"  alt="">
</div>`
])
const picSmall = document.querySelectorAll(".picSmall div img");
for (let i=0;i<picSmall.length;i++) {

  picSmall[i].addEventListener("mouseover", () => {
      const mainImg = document.querySelector("#mainImg");
      mainImg.setAttribute("src", picSmall[i].src);
    })
}