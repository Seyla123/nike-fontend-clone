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