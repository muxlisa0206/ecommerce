let aksiyaProduct = document.querySelector(".aksiyaProducts");
let allProducts = document.querySelector(".Products")
let boughtBefore = document.querySelectorAll(".Bought")

let lastFourProduct = products.slice(products.length-4, products.length)

let lastLastProduct = products.slice(products.length-8, products.length-4)

let beforeBoughtProduct = products.slice(products.length-8, products.length-4)


let discountProduct = products.filter((el) => el.discount > 0);

lastFourProduct.map((el) => {
    aksiyaProduct.innerHTML += `
        <div class="aksiyaProducts max-w-[365px] w-full rounded-[4px] bg-[#FFFFFF] shadow-[1px_2px_4px_0px_#0000001A;] p-[10px] grid grid-col-4">
                        <img class="w-full rounded-[4px]" src="${el.images[0]}" alt="${el.name}">
                        <div class="flex justify-between items-center">
                            <div>
                                <h1>${el.price - (el.price * el.discount / 100)}₽</h1>
                                <p class="text-[#BFBFBF] text-[12px]">С картой</p>
                            </div>
                            <div>
                                <h1${el.price}₽</h1>
                                <p class="text-[#BFBFBF] text-[12px]">Обычная</p>
                            </div>
                        </div>
                        <h1>${el.name}</h1>
                        <p class="text-[#414141] text-[16px]">${el.description}</p>
                        <p class="px-[8px] py-[4px] bg-[#FF6633] text-white absolute rounded-[8px] mt-[90px] ml-[5px]">-${el.discount}%</p>
                        <p>${el.rating}</p>
                        <a href="/pages/basket.html"><button class="max-w-[256px] w-full transition duration-500 rounded-[4px] text-[#70C05B] border-1 border-[#70C05B] p-[10px] hover:bg-[#FF6633] hover:text-white hover:border-none text-[16px]">В корзину</button></a>
        </div>
    `
    
})

lastLastProduct.map((el) => {
    allProducts.innerHTML += `
        <div class="allProducts max-w-[365px] w-full rounded-[4px] bg-[#FFFFFF] shadow-[1px_2px_4px_0px_#0000001A;] p-[10px] grid grid-col-4">
                        <img class="w-full rounded-[4px]" src="${el.images[0]}" alt="${el.name}">
                        <div class="flex">
                            <div>
                                <h1>${el.price - (el.price * el.discount / 100)}₽</h1>
                                <p class="text-[#BFBFBF] text-[12px]">С картой</p>
                            </div>
                            <div>
                                <h1${el.price}₽</h1>
                                <p class="text-[#BFBFBF] text-[12px]">Обычная</p>
                            </div>
                        </div>
                        <h1>${el.name}</h1>
                        <p class="text-[#414141] text-[16px]">${el.description}</p>
                        <p>${el.rating}</p>
                        <a href="/pages/basket.html"><button class="max-w-[256px] w-full transition duration-500 rounded-[4px] text-[#70C05B] border-1 border-[#70C05B] p-[10px] hover:bg-[#FF6633] hover:text-white hover:border-none text-[16px]">В корзину</button></a>
        </div>
    `
    
})


beforeBoughtProduct.map((el) => {
    boughtBefore.innerHTML += `
        <div class="allProducts max-w-[365px] w-full rounded-[4px] bg-[#FFFFFF] shadow-[1px_2px_4px_0px_#0000001A;] p-[10px] grid grid-col-4">
                        <img class="w-full rounded-[4px]" src="${el.images[0]}" alt="${el.name}">
                        <div class="flex">
                            <div>
                                <h1>${el.price - (el.price * el.discount / 100)}₽</h1>
                                <p class="text-[#BFBFBF] text-[12px]">С картой</p>
                            </div>
                            <div>
                                <h1${el.price}₽</h1>
                                <p class="text-[#BFBFBF] text-[12px]">Обычная</p>
                            </div>
                        </div>
                        <h1>${el.name}</h1>
                        <p class="text-[#414141] text-[16px]">${el.description}</p>
                        <p>${el.rating}</p>
                        <a href="/pages/basket.html"><button class="max-w-[256px] w-full transition duration-500 rounded-[4px] text-[#70C05B] border-1 border-[#70C05B] p-[10px] hover:bg-[#FF6633] hover:text-white hover:border-none text-[16px]">В корзину</button></a>
        </div>
    `
    
})
