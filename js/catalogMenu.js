let toggleBtn = document.getElementById("toggleBtn");
let resMenu = document.getElementById("res-menu");
let menu = document.getElementById("menu")
let close = document.getElementById("close");

let loading = document.getElementById("loading")

toggleBtn.addEventListener("click" , function(){
    resMenu.classList.toggle("translate-y-[-100%]")
    menu.classList.toggle("hidden");
    close.classList.toggle("hidden")
})


window.addEventListener("load" , function(){
    loading.classList.add("hidden")
})