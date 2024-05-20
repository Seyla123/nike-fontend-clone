const menuSubNavbar = [{
    title :"Kids",
    menu:["Shoes","Clothing","New Arrivals", "Gear and Accessories","Mini Me","Sale"]
}]
const trendingConent = [{
    title: "Fresh New Colors",
    description : "The Latest in Nike Dunk",
    img:"../../Images/kid/trending1.jpeg",
    button:"Shop"
},
{
    title: "New in Skate",
    description : "Nike SB Day One",
    img:"../../Images/kid/trending2.jpg",
    button:"Shop"
},
]
import '../../scripts/components/carouselSpotlight.js';
import '../../scripts/components/moreExplore.js';
import { createSubNavbarFunction } from "../../scripts/components/subNavbar.js"
import { createFeatureComponent } from "../../scripts/components/featureComponent.js"

createFeatureComponent("Trending", trendingConent,"kid-trending-component");
createSubNavbarFunction(menuSubNavbar)