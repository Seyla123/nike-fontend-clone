// Header
const header = document.querySelector('.header-layout')
fetch('../components/layouts/header.html')
.then(res=>res.text())
.then(data=>{
    header.innerHTML=data
})
.catch(error => console.error('Error fetching included file:', error));
////////

//Navbar
const nav = document.querySelector('.navbar-layout')
fetch('../components/layouts/navbar.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
})
.catch(error => console.error('Error fetching included file:', error));
//Hero Section 

const hero_section = document.querySelector('.hero-section-layout')
fetch('../components/layouts/hero-section.html')
.then(res=>res.text())
.then(data=>{
    hero_section.innerHTML=data
})
.catch(error => console.error('Error fetching included file:', error));
//////////



//trending Section
const trending_section = document.querySelector('.trending-section-layout')
fetch('../components/layouts/trending-section.html')
.then(res=>res.text())
.then(data=>{
    trending_section.innerHTML=data
})
.catch(error => console.error('Error fetching included file:', error));

//featured-section.html
const featured_section = document.querySelector('.featured-section-layout')
fetch('../components/layouts/featured-section.html')
.then(res=>res.text())
.then(data=>{
    featured_section.innerHTML=data
})
.catch(error => console.error('Error fetching included file:', error));


///carousel-classic.html
const carousel_classic = document.querySelector('.carousel-classic-layout')
fetch('../components/layouts/carousel-classic.html')
.then(res=>res.text())
.then(data=>{
    carousel_classic.innerHTML=data
})
.catch(error => console.error('Error fetching included file:', error));


///spot-section.html
const spot_section = document.querySelector('.spot-section-layout')
fetch('../components/layouts/spot-section.html')
.then(res=>res.text())
.then(data=>{
    spot_section.innerHTML=data
})
.catch(error => console.error('Error fetching included file:', error));



//carousel-popular.html
const carousel_popular = document.querySelector('.carousel-popular-layout')
fetch('../components/layouts/carousel-popular.html')
.then(res=>res.text())
.then(data=>{
    carousel_popular.innerHTML=data
})
.catch(error => console.error('Error fetching included file:', error));

//member-section.html
const member_section = document.querySelector('.member-section-layout')
fetch('../components/layouts/member-section.html')
.then(res=>res.text())
.then(data=>{
    member_section.innerHTML=data
})
.catch(error => console.error('Error fetching included file:', error));


//menu-section.html
const menu_section = document.querySelector('.menu-section-layout')
fetch('../components/layouts/menu-section.html')
.then(res=>res.text())
.then(data=>{
    menu_section.innerHTML=data
})
.catch(error => console.error('Error fetching included file:', error));
//footer.html
const footer = document.querySelector('.footer-layout')
fetch('../components/layouts/footer.html')
.then(res=>res.text())
.then(data=>{
    footer.innerHTML=data
})
.catch(error => console.error('Error fetching included file:', error));