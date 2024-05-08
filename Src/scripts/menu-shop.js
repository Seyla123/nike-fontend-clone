const miniMenu = document.querySelector(".miniMenu-layout");
fetch("../components/layouts/shop/miniMenu.html")
  .then((res) => res.text())
  .then((data) => {
    miniMenu.innerHTML = data;
    const toggleBtnMini = document.querySelector("#toggleBtnMini");
    const cancelToggleBtnMini = document.querySelector("#cancelToggleBtn");
    const showContentToggleMini = document.querySelector("#showContentToggle");
    const contentAllMini = document.querySelector(".contentAll");
    let isGood = false;
    toggleBtnMini.addEventListener("click", function () {
      if (isGood) {
        isGood = false;
        contentAllMini.classList.add("blur-sm", "fixed");
        showContentToggleMini.classList.remove("hidden");
        toggleBtnMini.classList.add("left-[10px]");
      } else {
        isGood = true;
        toggleBtnMini.classList.remove("left-[10px]");
      }
    });

    cancelToggleBtnMini.addEventListener("click", function () {
        showContentToggleMini.classList.add("hidden");
      contentAllMini.classList.remove("blur-sm", "fixed");
      toggleBtnMini.classList.remove("left-[10px]");
    });

    //filter
    const filterBtn = document.querySelector("#filterBtn");
    const downBar = document.querySelector("#downBar");
    const cancelDownbar = document.querySelector("#cancelDownbar");

    filterBtn.addEventListener("click",function(){
      const contentAll = document.querySelector(".contentAll")
      downBar.classList.add("bottom-0")
      contentAll.classList.add("fixed","blur")
    })
    cancelDownbar.addEventListener("click",function(){
      const contentAll = document.querySelector(".contentAll")
      downBar.classList.remove("bottom-0")
      contentAll.classList.remove("fixed","blur")
    })

  })
  .catch((error) => console.error("Error fetching included file:", error));
