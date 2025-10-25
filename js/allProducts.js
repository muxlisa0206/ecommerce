let moreProducts = document.querySelector(".moreProducts");

products.map((el) => {
    moreProducts.innerHTML += `
        <div  class="moreProducts max-w-[365px] w-full h-full rounded-[4px] bg-[#FFFFFF] shadow-[1px_2px_4px_0px_#0000001A;] p-[10px] hover:shadow-[4px_8px_16px_0px_#FF663333] duration-300">
                        <a href="../pages/product.html?id=${el.id}"
                            class="relative">
                            <img class="w-full h-[200px] index-0" src="${el.images[0]}" alt="${el.name}">
                            <p class="absolute mt-[-50px] ml-[10px] px-[8px] py-[4px] bg-[#FF6633] text-white rounded-[8px]">-${el.discount}%</p>
                        <a>
                        <div class="flex justify-between items-center">
                            <div class="flex flex-col items-center">
                                <h1 class="text-[20px] font-bold">${el.price - el.price * el.discount/100}₽</h1>
                                <p class="text-[12px] text-[#BFBFBF]">С картой</p>
                            </div>
                            <div class="flex flex-col items-center">
                                <h1 class="text-[20px] font-400">${el.price}₽</h1>
                                <p class="text-[12px] text-[#BFBFBF]">Обычная</p>
                            </div>
                        </div>

                        <p>${el.description}</p>
                        ${
                            el.rating === 5 ? `<div class="flex pt-2 pb-2 gap-1">
                            <img class="w-[15px]" src="./assets/images/another/fullstar.svg" alt=""/>
                            <img class="w-[15px]" src="./assets/images/another/fullstar.svg" alt=""/>
                            <img class="w-[15px]" src="./assets/images/another/fullstar.svg" alt=""/>
                            <img class="w-[15px]" src="./assets/images/another/fullstar.svg" alt=""/>
                            <img class="w-[15px]" src="./assets/images/another/fullstar.svg" alt=""/>
                            </div>` : el.rating === 4.5 ? `<div class="flex pt-2 pb-2 gap-1">
                            <img class="w-[15px]" src="./assets/images/another/fullstar.svg" alt=""/>
                            <img class="w-[15px]" src="./assets/images/another/fullstar.svg" alt=""/>
                            <img class="w-[15px]" src="./assets/images/another/fullstar.svg" alt=""/>
                            <img class="w-[15px]" src="./assets/images/another/fullstar.svg" alt=""/>
                            <img class="w-[15px]" src="./assets/images/another/halfstar.svg" alt=""/>
                            </div>` : el.rating === 4 ? `<div class="flex pt-2 pb-2 gap-1">
                            <img class="w-[15px]" src="./assets/images/another/fullstar.svg" alt=""/>
                            <img class="w-[15px]" src="./assets/images/another/fullstar.svg" alt=""/>
                            <img class="w-[15px]" src="./assets/images/another/fullstar.svg" alt=""/>
                            <img class="w-[15px]" src="./assets/images/another/fullstar.svg" alt=""/>
                            </div>` : el.rating === 3.5 ? `<div class="flex pt-2 pb-2 gap-1">
                            <img class="w-[15px]" src="./assets/images/another/fullstar.svg" alt=""/>
                            <img class="w-[15px]" src="./assets/images/another/fullstar.svg" alt=""/>
                            <img class="w-[15px]" src="./assets/images/another/fullstar.svg" alt=""/>
                            <img class="w-[15px]" src="./assets/images/another/halfstar.svg" alt=""/>
                            </div>` : el.rating === 3 ? `<div class="flex pt-2 pb-2 gap-1">
                            <img class="w-[15px]" src="./assets/images/another/fullstar.svg" alt=""/>
                            <img class="w-[15px]" src="./assets/images/another/fullstar.svg" alt=""/>
                            <img class="w-[15px]" src="./assets/images/another/fullstar.svg" alt=""/>
                            </div>` : el.rating === 2.5 ? `<div class="flex pt-2 pb-2 gap-1">
                            <img class="w-[15px]" src="./assets/images/another/fullstar.svg" alt=""/>
                            <img class="w-[15px]" src="./assets/images/another/fullstar.svg" alt=""/>
                            <img class="w-[15px]" src="./assets/images/another/halfstar.svg" alt=""/>
                            </div>` : el.rating === 2 ? `<div class="flex pt-2 pb-2 gap-1">
                            <img class="w-[15px]" src="./assets/images/another/fullstar.svg" alt=""/>
                            <img class="w-[15px]" src="./assets/images/another/fullstar.svg" alt=""/>
                            </div>` : el.rating === 1.5 ? `<div class="flex pt-2 pb-2 gap-1">
                            <img class="w-[15px]" src="./assets/images/another/fullstar.svg" alt=""/>
                            <img class="w-[15px]" src="./assets/images/another/halfstar.svg" alt=""/>
                            </div>` : el.rating === 1 ? `<div class="flex pt-2 pb-2 gap-1">
                            <img class="w-[15px]" src="./assets/images/another/fullstar.svg" alt=""/>
                            </div>` : ""
                        }
                        ${
                            isExist = cart.find((car) => car.id === el.id)
                            ? `
                                <div class="w-full flex items-center justify-center duration-500 rounded-[4px] text-[#70C05B]">
                                    <button 
                                    onClick="decrease(${el.id})"
                                    class="bg-[red] text-[24px] text-[white] flex items-center justify-center w-full h-full rounded-[4px_0_0_4px]">-</button>
                                    <span class="bg-[white] text-[24px] flex items-center justify-center w-full h-full rounded-[4px_0_0_4px] id="qty">${cart.find((item) => item.id === el.id).qty}</span>
                                    <button 
                                    onClick="increase(${el.id})" 
                                    class="bg-[green] text-[24px] text-[white] flex items-center justify-center w-full h-full rounded-[0_4px_4px_0]">+</button>
                                </div>
                            ` 
                            : `<button onClick="addToCard(${el.id})" class="w-full flex items-center justify-center duration-500 rounded-[4px] text-[#70C05B] border-1 border-[#70C05B] p-[10px] hover:bg-[#FF6633] hover:text-white hover:border-1 hover:border-[#FF6633] text-[16px]">В корзину</button>`
                        }        
        </div>
    `
})