let path = new URLSearchParams(window.location.search)

let id = path.get("id");

let SingleProduct = document.querySelector(".SingleProduct")

let idProduct = products.filter((el) => el.id == id)

idProduct.map((el) => {
    SingleProduct.innerHTML += `
        <div class="SingleProduct grid grid-cols-2">
            <div class="flex items-center gap-[20px]">
                <div class="flex flex-col gap-[5px]">
                     ${
                        el.images.map((el) => {
                        return `<img class="w-[100px] object-cover" src=${el} alt="">`
                    }).join(" ")
                    }
                </div>
                <img class="h-full" src=${el.images[0]} alt="">
            </div>
        </div>
    `
})


