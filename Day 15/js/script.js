
`use strict`;

let searchInput = document.querySelector("#search");
let proContainer = document.querySelector("#container");

(function() {
    const products = ["beauty","fragrances","furniture","groceries","home-decoration","kitchen-accessories","laptops","mens-shirts","mens-shoes","mens-watches","mobile-accessories",
    "motorcycle","skin-care","smartphones","sports-accessories","sunglasses","tablets","tops","vehicle","womens-bags","womens-dresses","womens-jewellery","womens-shoes","womens-watches"
    ];
    let selectedProduct = " ";
    for(const product of products){
        selectedProduct += `<option value="${product}">${product}</option>`;
    }
    document.querySelector("#select").innerHTML = selectedProduct;
    
})();

async function getProducts(product = "smartphones"){
    try{
        let response = await fetch(`https://dummyjson.com/products/category/${product}`);
        let resData = await response.json();

        displayProducts(resData.products);

    } catch (error) {
        console.error("Error fetching products:", error);
    }}

function displayProducts(products){
    let productHTML = "";
    for(const product of products){
        let {title , thumbnail , description} = product;
        productHTML += `<div class="card h-100">
                        <img src="${thumbnail}" class="card-img-top" alt="${product.title}">
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">${description}</p>
                        </div>
                    </div>`;
    }
    proContainer.innerHTML = productHTML;
}
getProducts();

select.addEventListener("change", function () {
    let selectedCategory = select.value;
    getProducts(selectedCategory);

});