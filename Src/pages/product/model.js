const createModel =()=>{
    return `    <div id="showContentToggle"
    class="hidden flex backdrop-blur-sm bg-gray-400/45 fixed z-50 w-full h-full justify-center items-center">
    <div class="bg-white w-full h-full lg:w-[30%] lg:h-[70%] lg:rounded-3xl flex flex-col justify-between p-12">
        <div class=" w-full h-full flex flex-col gap-4">
            <div class=" w-full flex justify-between items-center pb-8">
                <p class="text-2xl">Filter By Store</p>
                <button id="cancelToggleBtn" class="bg-gray-300/50 p-2 rounded-full">
                    <img class="w-4" src="../../Images/cancel.png" alt="">
                </button>
            </div>
            <div class=" w-full h-14 relative">
                <input id="inputLocation" class="px-12  outline outline-1 w-full h-full rounded-lg" type="text">

                <button class="w-6 absolute top-4 left-3 pointer-events-none">
                    <svg class="text-gray-500" aria-hidden="true" class="text-color-secondary" focusable="false"
                        viewBox="0 0 24 24" role="presentation" fill="none">
                        <path stroke="currentColor" stroke-width="1.5"
                            d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853">
                        </path>
                    </svg>
                </button>
                <!-- top-4 left-12 -->
                <span id="spanLocation"
                    class="absolute  text-gray-500 top-4 left-12 duration-700 px-1 pointer-events-none">Search
                    Location</span>
                <button id="cancelLocationBtn" class="hidden w-6 absolute top-5 right-12 flex items-center">
                    <img class="size-4" src="../../Images/cancel.png" alt="">
                </button>
                <button class="w-6 absolute top-4 right-3">
                    <svg class="text-gray-500" aria-hidden="false" focusable="false" viewBox="0 0 24 24" role="img"
                        width="24px" height="24px" fill="none" aria-label="Location permission denied"
                        color="#757575">
                        <path fill="currentColor" fill-rule="evenodd"
                            d="M21.328 19.548l-3.74-3.74-1.215 3.639-.712-.238.712.238v.001c-.67 1.995-3.486 2.078-4.231.081l-2.197-5.492-5.493-2.188c-1.981-.744-1.92-3.57.092-4.241l3.634-1.21-3.725-3.725 1.06-1.061 16.875 16.875-1.06 1.06zm-6.377-.577l1.451-4.349-7.038-7.038L5.019 9.03c-.685.228-.686 1.174-.036 1.415l.008.004 6.107 2.432 2.444 6.109.003.01c.24.651 1.176.651 1.406-.03z"
                            clip-rule="evenodd"></path>
                        <path fill="currentColor"
                            d="M18.65 12.627l2.223-6.66v-.002c.584-1.767-1.094-3.432-2.848-2.847l-6.665 2.22 1.186 1.186L18.5 4.54a.752.752 0 01.95.952l-1.985 5.949 1.186 1.185z">
                        </path>
                        <title>Location permission denied</title>
                    </svg>

                </button>
            </div>
            <h3 class="text-xl">No Nike Stores Available</h3>
            <p>We couldn't find any Nike stores within 50 mi of your location.</p>
        </div>
        <div class="hidden w-full h-full lg:flex lg:justify-end lg:items-end">
            <button class="px-6 bg-gray-300 rounded-full py-2 text-gray-500">Select</button>
        </div>
        <div class="lg:hidden w-full flex justify-center">
            <button class="w-[90%] px-6 py-4 rounded-full bg-gray-300 text-gray-500">Select</button>
        </div>
    </div>
</div>`
}

class Model extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML = createModel();
        //toggle pick up today

  const toggleBtn = document.querySelector("#toggleBtn");
  const cancelToggleBtn = document.querySelector("#cancelToggleBtn");
  const showContentToggle = document.querySelector("#showContentToggle")
  const contentAll = document.querySelector(".contentAll")
  let isActicve=false
  toggleBtn.addEventListener("click", function(){
    if(isActicve){
      isActicve=false
    contentAll.classList.add("w-full","fixed")
    showContentToggle.classList.remove("hidden");
    toggleBtn.classList.add("left-[10px]")
    }else{
      isActicve=true
      toggleBtn.classList.remove("left-[10px]")
    }
  })
  
  cancelToggleBtn.addEventListener("click", function(){
    
    showContentToggle.classList.add("hidden");
    contentAll.classList.remove("blur-sm","fixed")
    toggleBtn.classList.remove("left-[10px]")
  })


const inputLocation = document.querySelector("#inputLocation");
const spanLocation = document.querySelector("#spanLocation");
const cancelLocationBtn = document.querySelector("#cancelLocationBtn");
//text-xs bg-white px-1 text-black left-3 top-[-10px]
inputLocation.addEventListener("focus", function(){
  spanLocation.innerHTML="Location"
  spanLocation.classList.add("text-xs","bg-white","text-black","left-3","top-[-10px]")
})
inputLocation.addEventListener("focusout", (event) => {
  if (inputLocation.value.length == 0) {
    spanLocation.innerHTML="Show Location"
    spanLocation.classList.remove("text-xs","bg-white","text-black","left-3","top-[-10px]")
  }
});

inputLocation.addEventListener("input",function(){
  if(inputLocation.value.length>0){
    
    cancelLocationBtn.classList.remove("hidden")
  }else{
    cancelLocationBtn.classList.add('hidden')
  }
})

cancelLocationBtn.addEventListener("click",function(){
  inputLocation.value=""
  cancelLocationBtn.classList.add('hidden')
  spanLocation.innerHTML="Show Location"
  spanLocation.classList.remove("text-xs","bg-white","text-black","left-3","top-[-10px]")
})

    }
}
customElements.define('model-content', Model);