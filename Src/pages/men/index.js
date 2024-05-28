const shopTheEssentails = [{
    title : "Clothing",
    img : "../../Images/men/shop-1.jpg",
},
{
    title : "Shoes",
    img : "../../Images/men/shop-2.jpg",
},
{
    title : "Accesories",
    img : "../../Images/men/shop-3.jpg",
},
]

const brooks = [{
    title: "",
    img: "../../Images/men/brook-1.jpg",
    button:"Shop",
    description: "Brooks's Golf Essentials",
},
{
    title: "",
    img: "../../Images/men/brook-2.jpg",
    button:"Shop",
    description: "Brooks's Off-Course Picks",

},]

const menuSubNavbar = [{
    title :"Men",
    menu:["Shoes","Clothing", "Accessories","Sale"]
}]

import { createCarouselArr } from "../../components/carousel.js"
import '../../components/carouselSpotlight.js'
import { createFeatureComponent } from "../../components/featureComponent.js"
import { createSubNavbarFunction } from "../../components/subNavbar.js"

createCarouselArr("Shop The Essentails",shopTheEssentails,"shop-the-essentails-component");
createFeatureComponent("Brooks Koepka's Favs", brooks,"brooks-component");
createSubNavbarFunction(menuSubNavbar)