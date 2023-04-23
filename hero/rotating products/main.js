const productBtn = document.querySelectorAll(".product-color");

const firstProduct = document.querySelectorAll(".first-product");
const secondProduct = document.querySelectorAll(".second-product");


productBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    firstProduct.forEach((product, i) => {
      product.style.transform = "rotate(90deg)";
      product.children[0].style.transform = "rotate(-90deg)";
      
      if (product.dataset.product == btn.id) {
        product.style.transform = "rotate(0deg)";
        product.children[0].style.transform = "rotate(0deg)";
      }
    });

    secondProduct.forEach((product) => {
      product.style.transform = "rotate(-90deg)";
      product.children[0].style.transform = "rotate(90deg)";
      
      if (product.dataset.product == btn.id) {
        product.style.transform = "rotate(0deg)";
        product.children[0].style.transform = "rotate(0deg)";
      }
    });
  });
});
