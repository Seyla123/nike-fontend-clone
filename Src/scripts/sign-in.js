const inputEmail = document.querySelector("#inputEmail");
const labelEmail = document.querySelector("#labelEmail");
const labelrequired = document.querySelector("#labelrequired");
const btnSumbit = document.querySelector("#btnSumbit");
const formEmail = document.querySelector("#formEmail");
function showRequired(){
    inputEmail.classList.add("outline-red-500");
    labelEmail.classList.add("text-red-500");
    labelrequired.classList.remove("hidden");
}
function hideRequired(){
    inputEmail.classList.remove("outline-red-500");
    labelEmail.classList.remove("text-red-500");
    labelrequired.classList.add("hidden");
}
function focused(){
    labelEmail.classList.add("left-[2%]", "top-[-18%]", "text-[12px]");
}
function unfocued(){
    labelEmail.classList.remove("left-[2%]", "top-[-18%]", "text-[12px]");
}
//<!-- left-[2%] text-[12px] px-[5px] top-[-16%] bg-white -->
inputEmail.addEventListener("focus", () => {
    focused();
});

addEventListener("focusout", (event) => {
    
  console.log(inputEmail.value.length);
  if (inputEmail.value.length == 0) {
    showRequired();
    unfocued();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var inputField = document.getElementById("inputEmail");

  inputField.addEventListener("input", function () {
    var inputValue = inputEmail.value;
    //console.log("Input field value changed:", inputValue);
    console.log(inputValue.length)
    if (inputValue.length == 0) {
      labelrequired.innerHTML = "Required";
    } else {
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (inputValue.match(mailformat)) {
          hideRequired();
      }else{
          labelrequired.innerHTML = "invalid email address";
      }
    }
  });
});


btnSumbit.addEventListener("click", function(event) {
    if (!inputEmail.value.trim()) {
        // If input field is empty, prevent default form submission
        event.preventDefault();

        // Optional: You can also clear the validation message if you want
        inputField.setCustomValidity("");
    }
});

