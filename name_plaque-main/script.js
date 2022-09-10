
const userInput = document.querySelector(".field-input");

const userLeterPreview = document.querySelector(".plaque-prev");

const userPricePreview = document.querySelector("#plaquePrice");


// Refactoring with Arrow Function

const countLeters = (some_data) => {

  const price = some_data.trim(" ", "").length * 5; // price of each letter

  userLeterPreview.textContent = some_data;

  userPricePreview.textContent = "$" + price;

};

userInput.oninput = (e) => {

  countLeters(e.target.value);
  
  };
  
  
  const defaultText = "your name";
  
  let countLetter = 0;
  
  const buyNow = () => {
  
  const userInput = document.querySelector(".field-input").value;
  
    countLetter = userInput.trim().length;
  
    if (userInput.trim() === "") {
  
      alert("Enter a set of letters.");
  
    } else if (userInput.trim().toLowerCase() === defaultText) {
  
      alert("Enter a new text.");
  
    } else if (countLetter >= 15) {
  
      alert("We have 15 letters left in stock, and you have exceeded the limit.");
  
    } else {
  
      alert("input accepted successfully");
  
    }
  
  };
  
  const button = document.querySelector(".buy-submit");
  
  button.addEventListener("click", buyNow);