let carts = JSON.parse(localStorage.getItem("carts") || "[]");
let cartCards = document.querySelector(".cart-cards");
let remove = document.getElementById("remove");
let allCheck = document.getElementById("all-check")
let check = document.getElementsByClassName("check")
let productsQty = document.querySelector(".mahsulotlar-soni")
let allPrice = document.querySelector(".allPrice")
let discount = document.querySelector(".discount")
let payPrice = document.querySelector(".payPrice")
let promo = document.getElementById("promo")

let ids = [];


function basketProduct(content, data){

    let sum = 0;
    let discounts = 0;

    promo.addEventListener("input" , function(e){
        if(e.target.value === "ASILBEK2002"){
            discounts += 200;
        }
        calculate(sum, discounts);

    })

    function calculate(sum=0, discounts=0){
        for(let el of data){
            sum += el.price * el.qty;
            discounts += el.price * el.qty * el.discount / 100;
        }
        allPrice.textContent = sum;
        discount.textContent = discounts;
        payPrice.textContent = (sum - discounts)
    }

    calculate(sum, discounts);

    productsQty.textContent = `${badge.textContent=cart.length} товара`

    data.map((el) => {
        content.innerHTML += `
            <div  
                class="cart-cards flex justify-between items-center max-w-[546px]  lg:max-w-[1100px]  w-full max-h-[96px] h-full rounded-[4px] bg-[#FFFFFF] shadow-[1px_2px_4px_0px_#0000001A;] p-[10px] flex hover:shadow-[4px_8px_16px_0px_#FF663333] duration-300">
                            <input 
                            onClick="addToCheck(this , ${el.id})"
                            type="checkbox" class="check w-[20px] h-[20px] mx-[10px]">
                            <div class="flex items-center gap-4">
                                <a href="../pages/product.html?id=${el.id}" 
                                class="relative">
                                    <img class="max-w-[150px] w-full h-[76px] index-0 object-cover" src="${el.images[0]}" alt="${el.name}">
                                </a>
                                <div class=" flex flex-col">
                                <p class="text-[16px] line-clamp-2 md:line-clamp-none">${el.description}</p>
                                <div class="flex gap-3 items-center">
                                    <div class="flex flex-col items-center">
                                        <h1 class="text-[12px] font-bold">${el.price - el.price * el.discount/100}₽</h1>
                                        <p class="text-[12px] text-[#BFBFBF]">С картой</p>
                                    </div>
                                    <div class="flex flex-col items-center">
                                        <h1 class="text-[12px] font-400">${el.price}₽</h1>
                                        <p class="text-[12px] text-[#BFBFBF]">Обычная</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div class="max-w-[100px] w-full flex items-center justify-center duration-500 rounded-[4px] text-[#70C05B]">
                                        <button 
                                        onClick="decrease(${el.id})"
                                        class="bg-[red] text-[24px] text-[white] flex items-center justify-center w-full ">-</button>
                                        <span class="bg-white text-[24px] flex items-center justify-center w-full id="qty">${cart.find((item) => item.id === el.id).qty}</span>
                                        <button 
                                        onClick="increase(${el.id})" 
                                        class="bg-[green] text-[24px] text-[white] flex items-center justify-center w-full">+</button>
                            </div>                                
            </div>
        `
    })
}

basketProduct(cartCards, cart)

function addToCheck(value, id){
    if(value.checked){
        ids.push(id);
    }else if(value.checked === false){
        ids = ids.filter((el) => el !== id);
    }
}


remove.addEventListener("click" , function(){
    carts = carts.filter((el) => !ids.includes(el.id));
    localStorage.setItem("cart" , JSON.stringify(carts))
    basketProduct(cartCards, cart);
    badge.textContent=cart.length;
})

allCheck.addEventListener("click" , function(){
   if(allCheck.checked){

    for(let el of check){
        el.checked = true;
    }

    carts.map((el) => {
        ids.push(el.id);
    });
   }else if(allCheck.checked === false){
    ids= [];
    for(let el of check){
        el.checked = false;
    }
   }
});