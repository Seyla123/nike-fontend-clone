document.body.addEventListener('onload', myFunction());
function myFunction() {
    const sidebarCategory = document.querySelector("#sideCategory");
    sidebarCategory.classList.add("w-80")
}

const showHideBtn = document.querySelector("#showHideBtn");
const pshowHideBtn = document.querySelector("#showHideBtn p");
const sidebarCategory = document.querySelector("#sideCategory");
let isActicve = false;
showHideBtn.addEventListener("click", function () {
    if (isActicve == false) {
        isActicve = true
        sidebarCategory.classList.remove("w-80")
        pshowHideBtn.innerHTML = "Show Filters"
    }
    else {
        isActicve = false
        sidebarCategory.classList.add("w-80")
        pshowHideBtn.innerHTML = "Hide Filters"

    }

})

//Check Btn
const checkBtn = document.querySelectorAll(".checkBtn");
const CheckedBtn = document.querySelectorAll(".checkBtn .spanCheck");

for (let j = 0; j < checkBtn.length; j++) {
    let isTrue = false

    checkBtn[j].addEventListener("click", function () {
        if (isTrue == false) {
            CheckedBtn[j].classList.add("opacity-100")
            isTrue = true
        } else {
            CheckedBtn[j].classList.remove("opacity-100")
        }

    })
}

//dropdown
const button = document.querySelectorAll(".btn");
const dropDown = document.querySelectorAll(".dropdown");
const arrowRotate = document.querySelectorAll(".btn span");
const hOf = ["h-32", "h-16", "h-80", "h-24", "h-24", "h-32", "h-32"]
function sidebarCategoryDropdown(btn, dropdown, arrow, list) {
    let isActicve = false
    for (let k = 0; k < button.length; k++) {
        btn[k].addEventListener("click", function () {
            if (isActicve == false) {

                dropdown[k].classList.add("opacity-100", list[k])
                dropdown[k].classList.remove("pointer-events-none")
                arrow[k].classList.add("rotate-180")
                isActicve = true
            } else {
                dropdown[k].classList.remove("opacity-100", list[k])
                dropdown[k].classList.add("pointer-events-none")
                arrow[k].classList.remove("rotate-180")
                isActicve = false


            }
        })
    }
}
sidebarCategoryDropdown(button, dropDown, arrowRotate, hOf)

//selection sort 

const selectSortBtn = document.querySelector("#selectSortBtn");
const img = document.querySelector("#selectSortBtn span img");
const sortByDropdown = document.querySelector("#sortByDropdown");

selectSortBtn.addEventListener("click", function () {
    if (isActicve) {
        isActicve = false
        img.classList.add("rotate-180")
        sortByDropdown.classList.remove("hidden")
    } else {
        isActicve = true
        img.classList.remove("rotate-180")
        sortByDropdown.classList.add("hidden")

    }

})
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

filterBtn.addEventListener("click", function () {
    const contentAll = document.querySelector(".contentAll")
    downBar.classList.add("bottom-0")
    contentAll.classList.add("fixed", "blur")
})
cancelDownbar.addEventListener("click", function () {
    const contentAll = document.querySelector(".contentAll")
    downBar.classList.remove("bottom-0")
    contentAll.classList.remove("fixed", "blur")
})