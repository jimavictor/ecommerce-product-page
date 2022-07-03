var menu = document.getElementById("menu-icon");
var overlay = document.getElementById("overlay");
var addToCartButton = document.getElementById("add-to-cart");
var nav = document.querySelector(".side-bar");
var lowerSection = document.querySelector(".lower-section");
var emptyCartMessage = document.querySelector(".empty-cart");
var cancel = document.querySelector(".close-icon");
var cart = document.querySelector("#shopping-cart");
var cartItems = document.querySelector(".cart-items");
var itemCount = document.querySelector("#item-count");
var increaseButton = document.getElementById("increase");
var leftButton = document.getElementById("left-button");
var rightButton = document.getElementById("right-button");
var leftarrow = document.getElementById("left-arrow");
var rightarrow = document.getElementById("right-arrow");
var decreaseButton = document.getElementById("decrease");
var NumberOfItems = document.getElementById("number-of-items");
var amount = document.getElementById("amount");
var productDesktop = document.getElementById("main-product-desktop");
var product = document.getElementById("main-product");
var productLightBox = document.getElementById("main-product-light-box");
var deleteIcon = document.getElementById("icon-delete");
var NumberOfItemsAdded = document.getElementById("number-of-items-added");
var imageOverlayLightBox = document.querySelectorAll(".img-overlay-light-box");
var lightBox = document.querySelector(".light-box");
var closeIconLightBox = document.getElementById("close-icon-light-box");

var imageOverlay = document.querySelectorAll(".img-overlay");
var num = 1;

// NAVIGATION
menu.addEventListener("click", showMenu);
cancel.addEventListener("click", cancelButton);

// CART
cart.addEventListener("click", showCart);

// BUTTONS
increaseButton.addEventListener("click", increase);
decreaseButton.addEventListener("click", decrease);

addToCartButton.addEventListener("click", addToCart);
deleteIcon.addEventListener("click", deleteProduct);
closeIconLightBox.addEventListener("click", removeLightBox);

leftButton.addEventListener("click", leftMove);
leftarrow.addEventListener("click", leftMove);

rightarrow.addEventListener("click", rightMove);
rightButton.addEventListener("click", rightMove);

// OVERLAYS FOR THUMBNAILS
imageOverlay.forEach(imageOverlayProduct);
imageOverlayLightBox.forEach(imageOverlayLightBoxProduct);

productDesktop.addEventListener("click", openLightBox);
// FUNCTIONS
function imageOverlayProduct(thumbnail, index) {
  thumbnail.addEventListener("click", function () {
    productDesktop.src = `./images/image-product-${index + 1}.jpg`;
    productLightBox.src = `./images/image-product-${index + 1}.jpg`;
  });
}
function imageOverlayLightBoxProduct(thumbnail, index) {
  thumbnail.addEventListener("click", function () {
    productDesktop.src = `./images/image-product-${index + 1}.jpg`;
    productLightBox.src = `./images/image-product-${index + 1}.jpg`;
  });
}
function addToCart() {
  if (NumberOfItems.innerHTML != 0) {
    itemCount.innerHTML = NumberOfItems.innerHTML;
    itemCount.style.display = "inline";
    emptyCartMessage.style.display = "none";
    lowerSection.style.display = "flex";
    NumberOfItemsAdded.innerHTML = NumberOfItems.innerHTML;
    amount.innerHTML =
      " " + "$" + parseInt(NumberOfItemsAdded.innerHTML) * 125 + ".00";
  }
}
function showCart() {
  cartItems.classList.toggle("toggle-show");
}
function deleteProduct() {
  itemCount.style.display = "none";
  emptyCartMessage.style.display = "flex";
  lowerSection.style.display = "none";
}
function increase() {
  NumberOfItems.innerHTML = parseInt(NumberOfItems.innerHTML) + 1;
}
function decrease() {
  if (NumberOfItems.innerHTML != 0)
    NumberOfItems.innerHTML = parseInt(NumberOfItems.innerHTML) - 1;
}
function rightMove() {
  if (num < 4) {
    num++;
  } else if (num >= 4) {
    num = 1;
  }
  productLightBox.src = `./images/image-product-${num}.jpg`;
  product.src = `./images/image-product-${num}.jpg`;
}
function leftMove() {
  if (num > 1) {
    num--;
  } else if (num == 1) {
    num = 4;
  }
  product.src = `./images/image-product-${num}.jpg`;
  productLightBox.src = `./images/image-product-${num}.jpg`;
}
function cancelButton() {
  nav.classList.remove("side-bar-show");
  overlay.classList.remove("overlay");
}
function showMenu() {
  nav.classList.add("side-bar-show");
  overlay.classList.add("overlay");
}
function removeLightBox() {
  lightBox.style.display = "none";
}
function openLightBox() {
  lightBox.style.display = "flex";
}
