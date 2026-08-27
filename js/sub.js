const price = 51205;

let quantity = 1;

const quantityText = document.querySelector("#quantity");
const optionPrice = document.querySelector("#optionPrice");
const totalPrice = document.querySelector("#totalPrice");

const plusBtn = document.querySelector("#plusBtn");
const minusBtn = document.querySelector("#minusBtn");

function updatePrice() {
  quantityText.textContent = quantity;

  const total = price * quantity;

  optionPrice.textContent = total.toLocaleString() + "원";
  totalPrice.textContent = total.toLocaleString() + "원";
}

plusBtn.addEventListener("click", function () {
  quantity++;
  updatePrice();
});

minusBtn.addEventListener("click", function () {
  if (quantity > 1) {
    quantity--;
  }

  updatePrice();
});
