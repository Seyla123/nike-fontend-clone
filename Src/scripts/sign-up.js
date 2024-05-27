
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
//function required 

function required(input,label,required){
  input.addEventListener("focus", () => {
    console.log("focuced");
    focused(label);
  });
  input.addEventListener("focusout", (event) => {
    unfocued(label);
    console.log(input.value.length);
    if (input.value.length == 0) {
      showRequired(input,label,required);
      unfocued(input,label,required);
    }
  });
}

//input code
const inputCode = document.querySelector("#inputCode");
const labelCode = document.querySelector("#labelCode");
const labelCodeRequired = document.querySelector("#labelCodeRequired");
required(inputCode,labelCode,labelCodeRequired);

//input First Name
const inputFirstName = document.querySelector("#inputFirstName");
const labelFirstName = document.querySelector("#labelFirstName");
const labelFirstNameRequired = document.querySelector("#labelFirstNameRequired");
required(inputFirstName,labelFirstName,labelFirstNameRequired);

//input Last Name
const inputLastName = document.querySelector("#inputLastName");
const labelLastName = document.querySelector("#labelLastName");
const labelLastNameRequired = document.querySelector("#labelLastNameRequired");
required(inputLastName,labelLastName,labelLastNameRequired);

//input Password
const inputPassword = document.querySelector("#inputPassword");
const labelPassword = document.querySelector("#labelPassword");
const labelPasswordRequired = document.querySelector("#labelPasswordRequired");
required(inputPassword,labelPassword,labelPasswordRequired);

//input Shopping
const inputShopping = document.querySelector("#inputShopping");
const labelShopping = document.querySelector("#labelShopping");
const labelShoppingRequired = document.querySelector("#labelShoppingRequired");
const selectShopping = document.querySelector("#shopping");
required(selectShopping,labelShopping,labelShoppingRequired);
selectShopping.addEventListener("click",(event)=>{

})


//input DOB
const inputDOB = document.querySelector("#inputDOB");
const labelDOB = document.querySelector("#labelDOB");
const labelDOBRequired = document.querySelector("#labelDOBRequired");
const labelDOBDetail = document.querySelector("#labelDOBDetail");
required(inputDOB,labelDOB,labelDOBRequired);

inputDOB.addEventListener("focusout", (event) => {
  unfocued(labelDOBRequired);
  console.log(inputDOB.value.length);
  if (inputDOB.value.length == 0) {
    labelDOBDetail.classList.add("hidden")
    labelDOBRequired.classList.add("text-[12px]")
  }
});

