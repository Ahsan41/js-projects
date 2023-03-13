var overlay = document.querySelector(`.overlay`)
var modalbutton = document.queryselectorAll(`.modalbutton`)
var close = document.querySelector(`.close`)
var modal = document.querySelector(`.modal`)
var body = document.querySelector(`.body`)

console.log(overlay`==>> overlay`)


body.addEventListener('keydown', (e) => {
    console.log(e.key, "==>>yeh wala key dabai hai")
    if (e.key === 'Escape') {
        overlay.classList.add('hidden')
        modal.classList.add('hidden')
    }
})

for(i=0;i<modalbutton.length;i++){
   modalbutton[i].addEventListener(`click`,()=>{
    overlay.classList.remove(`hidden`)
    modal.classList.remove(`hidden`)
   })
}

overlay.addEventListener('click', () => {
    overlay.classList.add('hidden')
    modal.classList.add('hidden')
})

close.addEventListener('click', () => {
    overlay.classList.add('hidden')
    modal.classList.add('hidden')
})