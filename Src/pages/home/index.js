const trendingCarousel = [{
    title: "Rep Your Team In March And Beyond",
    img : "../../Images/feature-trending-1.jpg"
  },
  {
    title: "Fast Forward. Rewind",
    img : "../../Images/feature-trending-2.jpg"
  },
  {
    title: "Nike Motivata: For All Walks",
    img : "../../Images/feature-trending-3.jpg"
  },
  {
    title: "Express In Motion",
    img : "../../Images/trending-4 (1).webp"
  },
  ]
const shopBySpot = [{
    title: "Basketball",
    img: "../../Images/shop1.png"
  },
  {
    title: "Soccer",
    img: "../../Images/shop4.png"
  },
  {
    title: "Golf",
    img: "../../Images/shop5.png"
  },
  {
    title: "Tennis",
    img: "../../Images/shop6.png"
  },
  {
    title: "Football",
    img: "../../Images/shop7.png"
  },
  {
    title: "Basketball",
    img: "../../Images/shop8.png"
  },
  {
    title: "Yoga",
    img: "../../Images/shop9.png"
  },
]

const featureContent = [{
  title: "Nike Alphafly 3",
  img: "../../Images/featured-1.jpg",
  description: "Push Beyond What's Possible",
  button: "Shop"
},
{
  title: "Nike Alphafly 3",
  img: "../../Images/featured-2.jpg",
  description: "Push Beyond What's Possible",
  button: "Shop"
},
]
const shoeArr = [{
  img: "../../Images/classic-1.jpg",
},
{
  img: "../../Images/classic-2.jpg",
},
{
  img: "../../Images/classic-3.jpg",
},
{
  img: "../../Images/classic-4.jpg",
},
{
  img: "../../Images/classic-5.jpg",
},
{
  img: "../../Images/classic-1.jpg",
},
{
  img: "../../Images/classic-2.jpg",
},
{
  img: "../../Images/classic-3.jpg",
},
{
  img: "../../Images/classic-4.jpg",
},
{
  img: "../../Images/classic-5.jpg",
},
]

import {createCarouselArr} from  '../../components/carousel.js'
import { createFeatureComponent } from '../../components/featureComponent.js'
import { createClassicCarousel } from '../../components/carouselClassic.js'
// Call the  function with the title ,array , component name ,type
// Create carousel for trending items
createCarouselArr('Trending', trendingCarousel,"trending-carousel");

// Create carousel for shop by spot items
createCarouselArr('Shop By Spot', shopBySpot,"spot-carousel");


// Create feature component for featured content
createFeatureComponent("Featured", featureContent, 'feature-content-component');

// Create classic carousel component
createClassicCarousel(shoeArr)


