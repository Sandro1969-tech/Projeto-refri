let list = document.querySelectorAll('.item')
let next = document.getElementById('next')
let next = document.getElementById('prev')

let count = list.length
let active = 0

next.onclick = () => {
    console.log('next')
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')
}
active = active >= count -1 
list[1].classList.add('active')

prev.onclick = () => {
    let activeOld = document.querySelector('.active')
    console.log('prev')
}
