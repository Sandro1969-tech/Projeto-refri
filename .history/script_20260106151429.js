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

Pre.() => {
    console.log('prev')
}
