let path = new URLSearchParams(window.location.search);

let category = path.get("category");

let CategoryProducts = document.getElementById("CategoryProducts");

let categoryProduct = products.filter((el) => el.category == category);

console.log(categoryProduct);


