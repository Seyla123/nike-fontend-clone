


const sideBar = () => {
	return `
    <div id="sidebar" class="z-[100] bg-white shadow w-[320px] h-full fixed right-[-100%] top-0 duration-700 overflow-y-scroll">
    <button id="close-btn" href="" class="bg-white flex justify-end pt-8 px-[40px]">
      <img class="w-4" src="../Images/close.png" alt="">
    </button>
    <div class="text-xl bg-white px-[40px] flex flex-col justify-between">
      <div class="pt-4 pb-4 flex justify-between">
        <p class="text-xl">New & Featured</p>
        <div class="flex items-center">
          <img class="h-4" src="../Images/next.png" alt="">
        </div>

      </div>
      <div class="pt-4 pb-4 flex justify-between">
        <p>Men</p>
        <div class="flex items-center">
          <img class="h-4" src="../Images/next.png" alt="">
        </div>
      </div>
      <div class="pt-4 pb-4 flex justify-between">
        <p>Women</p>
        <div class="flex items-center">
          <img class="h-4" src="../Images/next.png" alt="">
        </div>
      </div>
      <div class="pt-4 pb-4 flex justify-between">
        <p>Accessories</p>
        <div class="flex items-center">
          <img class="h-4" src="../Images/next.png" alt="">
        </div>
      </div>
      <div class="pt-4 pb-4 flex justify-between">
        <p>Kids</p>
        <div class="flex items-center">
          <img class="h-4" src="../Images/next.png" alt="">
        </div>
      </div>
      <div class="pt-4 pb-4 flex justify-between">
        <p>Sale</p>
        <div class="flex items-center">
          <img class="h-4" src="../Images/next.png" alt="">
        </div>
      </div>
      <div class="h-full py-4">
        <div>
          <div class="flex">
            <div class="w-[38px] flex justify-center">
              <img class="h-6" src="../Images/jordan.png" alt="">
            </div>
            <p class="px-4">Jordan</p>
          </div>
          <div class="flex w-[38px]">
            <img class="h-6" src="../Images/Converse.png" alt="">
            <p class="px-4">convers</p>
          </div>
        </div>
        <div class="mt-10 pt-10">
          <div class="pt-4">
            <p>Become a Nike Member for the best products,<br /> inspiration and stories in sport.<span
                class="font-bold">Learn more</span></p>
          </div>
          <div class="flex items-start">
            <div>
              <button class="text-base mt-2  bg-black text-white p-2 pr-4 pl-4 rounded-full">Join Us</button>
              <button class="text-base mt-2   p-2 pr-4 pl-4 rounded-full border border-gray-600">Sign In</button>
            </div>
          </div>
        </div>
        <div class="pt-16">
          <div class="flex pt-4">
            <div class="flex items-center">
              <img class="w-6" src="../Images/cart.png" alt="">
            </div>
            <p class="px-6">Bag</p>
          </div>
          <div class="flex pt-4">
            <div class="flex items-center">
              <img class="w-6" src="../Images/order.png" alt="">
            </div>
            <p class="px-6">Orders</p>
          </div>
          <div class="flex pt-4">
            <div class="flex items-center">
              <img class="w-6" src="../Images/store.png" alt="">
            </div>
            <p class="px-6">Find a Store</p>
          </div>
          <div class="flex pt-4">
            <div class="flex items-center">
              <img class="w-6" src="../Images/question.png" alt="">
            </div>
            <p class="px-6">Help</p>
          </div>
        </div>
      </div>

    </div>
  </div>
`;
};


class sideBarComponet extends HTMLElement {
	connectedCallback() {
		this.innerHTML = sideBar();
	}
}

customElements.define('side-bar-component', sideBarComponet);