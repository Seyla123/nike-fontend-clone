const nav = document.querySelector('.navbar')
fetch('./components/layouts/navbar.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
})
.catch(error => console.error('Error fetching included file:', error));