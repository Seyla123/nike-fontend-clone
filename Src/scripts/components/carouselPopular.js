const popularRightNow = [{
    title: "Nike Zoom Vomero 5",
    type: "Women's Shoe",
    price : "$160",
    img : "../../Images/pop-2.png",
},
{
    title: "Nike Vomero 1",
    type: "men's Shoe",
    price : "$120",
    img : "../../Images/pop-3.png",
},
{
    title: "Nike Zoom Vomero 1",
    type: "Women's Shoe",
    price : "$130",
    img : "../../Images/pop-1.png",
},
{
    title: "Nike Zoom ",
    type: "men's Shoe",
    price : "$150",
    img : "../../Images/pop-4.png",
},
]

import {createCarouselArr} from  '../../scripts/components/carousel.js'
// Create carousel for popular items right now (shoes)
createCarouselArr('Popular Right Now', popularRightNow,"popular-carousel",'shoe');