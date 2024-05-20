const shopTheEssentails = [{
    title : "Clothing",
    img : "../../images/women/women-shop-1.jpg",
},
{
    title : "Shoes",
    img : "../../images/women/women-shop-2.jpg",
},
{
    title : "Accesories",
    img : "../../images/women/women-shop-3.jpg",
},
{
    title: "Bras & Leggings",
    img: "../../images/women/women-shop-4.jpg",
}
]

const womenSubNavbar = [{
    title :"Women",
    menu:["Shoes","Clothing", "Accessories","Sale","Find Your Sports Bra","Leggins","Shoes $100 & Under"]
}]
const trendingContent = [{
    title: "Just In",
    img: "../../Images/women/trending-content (2).jpg",
    button:"Shop",
    description: "Air Max Dn",
},
{
    title: "Make Your Move",
    img: "../../Images/women/trending-content (1).jpg",
    button:"Shop",
    description: "New Fitness Essentials",

},]
import '../../scripts/components/carouselSpotlight.js'

import { createFeatureComponent } from "../../scripts/components/featureComponent.js"
import { createCarouselArr } from "../../scripts/components/carousel.js"
import { createSubNavbarFunction } from "../../scripts/components/subNavbar.js"
createFeatureComponent("Trending", trendingContent,"trending-women-component");
createCarouselArr("Shop The Essentails",shopTheEssentails,"shop-the-essentails-component");
createSubNavbarFunction(womenSubNavbar)
