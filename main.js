// -----------------------index--------------------

// select button
const productButtons = document.querySelectorAll(
  ".product-box .product-button"
);
// tao su kien click
productButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const productBox = button.closest(".product-box");
    const productName = productBox.querySelector("h5").textContent;
    const productImage = productBox.querySelector("img").src;
    const productDescription = "Mô tả cho " + productName;

    // Store product details in local storage
    localStorage.setItem("productName", productName);
    localStorage.setItem("productImage", productImage);
    localStorage.setItem("productDescription", productDescription);

    // dieu huong page detail
    window.location.href = "bookDetail.html";
  });
});

// -----------------------bookDetail--------------------
// luu tru info
const productName = localStorage.getItem("productName");
const productImage = localStorage.getItem("productImage");
const productDescription = localStorage.getItem("productDescription");

// load sach
document.querySelector(".product-name").textContent = productName;
document.querySelector(".product-image img").src = productImage;
document.querySelector(".product-description").textContent = productDescription;

// menu-icon
document.querySelector(".menu-icon").addEventListener("click", function () {
  document.getElementById("menu1").classList.toggle("active");
});
