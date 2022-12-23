import products from "./data.js";

let optionFilterLTH = true;
function sortProducts(data) {
    if (optionFilterLTH) return data.sort((a, b) => a.price - b.price);
    return data.sort((a, b) => b.price - a.price);
}

console.log(sortProducts(products));
const section = document.querySelector("section");
const select = document.querySelector("select");

select.addEventListener("change", () => {
    optionFilterLTH = !optionFilterLTH;
    filterProducts();
    return () => this.removeEventListener("change");
});

function filterProducts() {
    section.innerHTML = sortProducts(products)
        .map((item) => {
            return `<div class="product">
                <div class="emoji">${item.product}</div>
                <div class="price">$${new Intl.NumberFormat("en-US").format(
                    item.price
                )}</div>
            </div>`;
        })
        .join("");
}

filterProducts();
