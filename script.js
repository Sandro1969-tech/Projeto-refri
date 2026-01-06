let list = document.querySelectorAll('.item');
let next = document.getElementById('next');
let prev = document.getElementById('prev'); // Corrigido: antes estava 'next' aqui também

let count = list.length;
let active = 0;

// Função para atualizar a classe active
function showSlider() {
    // Remove a classe 'active' do item antigo
    let activeOld = document.querySelector('.item.active');
    if (activeOld) activeOld.classList.remove('active');

    // Adiciona a classe 'active' no novo item
    list[active].classList.add('active');
}

next.onclick = () => {
    active = active >= count - 1 ? 0 : active + 1;
    showSlider();
};

prev.onclick = () => {
    active = active <= 0 ? count - 1 : active - 1;
    showSlider();
};