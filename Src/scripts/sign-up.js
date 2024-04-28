
//fuction focused and unfocused
function focused(elementId){
  elementId.classList.add("left-[2%]", "top-[-18%]", "text-[12px]");
}
function unfocued(elementId){
  elementId.classList.remove("left-[2%]", "top-[-18%]", "text-[12px]");
}

//show valitdate
function showRequired(input,label,required){
  input.classList.add("outline-red-500");
  label.classList.add("text-red-500");
  required.classList.remove("hidden");
}
function hideRequired(input,label,required){
  input.classList.remove("outline-red-500");
  label.classList.remove("text-red-500");
  required.classList.add("hidden");
}

//variable
const inputCode = document.querySelector("#inputCode");
const labelCode = document.querySelector("#labelCode");
const labelCodeRequired = document.querySelector("#labelCodeRequired");

inputCode.addEventListener("focus", () => {
  console.log("focuced");
  focused(labelCode);
});

inputCode.addEventListener("focusout", (event) => {
  unfocued(labelCode);
  console.log(inputCode.value.length);
  if (inputCode.value.length == 0) {
    showRequired(inputCode,labelCode,labelCodeRequired);
    unfocued(inputCode,labelCode,labelCodeRequired);
  }
});
