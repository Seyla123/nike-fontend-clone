
  const menDropdown = {
      "New Styles Added": [
          "Sale Up to 50% Off"
      ],
      "New & Featured": [
          "New Arrivals",
          "Best Sellers",
          "Customize with Nike by You",
          "New in Jordan",
          "Golf x Lifestyle",
          "Add to Bag to See Price"
      ],
      "All Shoes": [
          "Lifestyle",
          "Jordan",
          "Dunk",
          "Air Max",
          "Air Force 1",
          "Training & Gym",
          "Basketball",
          "Running",
          "Nike SB",
          "Sandals & Slides",
          "Shoes $100 & Under"
      ],
      "All Clothing": [
          "Jordan",
          "Matching Sets",
          "Big & Tall",
          "Hoodies & Sweatshirts",
          "Pants & Tights",
          "Jackets & Vests",
          "Tops & T-Shirts",
          "Shorts",
          "Underwear",
          "Socks"
      ],
      "Shop by Sport": [
          "Basketball",
          "Golf",
          "Soccer",
          "Running",
          "Tennis",
          "Baseball",
          "Football",
          "Training & Gym",
          "Trail Running",
          "Swimming",
          "Pickleball"
      ]
  }; 
  // Container element
  const container = document.getElementById("new-featured-menu-container");
  // Function to create HTML markup for a section
  function createSectionHTML(sectionTitle, sectionContent) {
    let html = `<div class="pointer-events-none p-6 w-full flex gap-20 justify-center">`;
    html += `<div ">`;
    html += `<h3 class="font-semibold">${sectionTitle}</h3>`;
    html += `<ul class="pt-4 text-gray-600">`;
  
    // Check if section content is an array or an object
    if (Array.isArray(sectionContent)) {
      sectionContent.forEach((item) => {
        html += `<li class="pt-2 cursor-pointer hover:text-black">${item}</li>`;
      });
    } else {
      for (const [subSectionTitle, subSectionContent] of Object.entries(
        sectionContent
      )) {
        html += `<div><h3 class="font-semibold">${subSectionTitle}</h3>`;
        html += `<ul class="pt-4 text-gray-600">`;
        subSectionContent.forEach((item) => {
          html += `<li class="pt-2 cursor-pointer hover:text-black">${item}</li>`;
        });
        html += `</ul></div>`;
      }
    }
    html += `</ul></div></div>`;
    return html;
  }
  
  // Generate HTML markup for each section
  let html = "";
  for (const [sectionTitle, sectionContent] of Object.entries(menDropdown)) {
    html += createSectionHTML(sectionTitle, sectionContent);
  }
  
  // Set the innerHTML of the container
  container.innerHTML = html;
  
  
  const btnDropdown = document.getElementById("new-featured-menu");
  btnDropdown.addEventListener("click", () => {
      container.style.display = "flex";
      container.classList.add("top-0");
  });