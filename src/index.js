
const hamburguer = document.querySelector("#hambuguer");
const hamburguerClose = document.querySelector("#hambuguer-close");
const hamburguerMenu = document.querySelector("#hamburguer-menu");

console.log(hamburguer)
console.log(hamburguerClose);
console.log(hamburguerMenu);

function esconderMenu() {
    hamburguer.classList.toggle('hidden')
    hamburguerClose.classList.toggle("hidden");
    hamburguerMenu.classList.toggle("hidden");
}

hamburguer.addEventListener('click', esconderMenu )
hamburguerClose.addEventListener("click", esconderMenu);