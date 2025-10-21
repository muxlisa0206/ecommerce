let cartCards = document.querySelector(".cart-cards");

function basketProduct(content, data){
    data.map((el) => {
        content.innerHTML += `
            <div  
                class="cart-cards flex justify-between items-center max-w-[546px]  lg:max-w-[1100px]  w-full max-h-[96px] h-full rounded-[4px] bg-[#FFFFFF] shadow-[1px_2px_4px_0px_#0000001A;] p-[10px] flex hover:shadow-[4px_8px_16px_0px_#FF663333] duration-300">
                            <div class="flex items-center gap-4">
                                <a href="../pages/product.html?id=${el.id}" 
                                class="relative">
                                    <img class="max-w-[150px] w-full h-[76px] index-0" src="${el.images[0]}" alt="${el.name}">
                                </a>
                                <div class=" flex flex-col">
                                <p class="text-[16px] flex flex-wrap-nowrap">${el.description}</p>
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