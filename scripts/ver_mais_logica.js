//Lógica dos botões ver mais

const botaoEventos = document.querySelector('.eventos_botao');
const mostrarEventos = document.querySelectorAll('.eventos_oculto');
const botaoAgenda = document.querySelector('.agenda_botao');
const mostrarAgenda = document.querySelectorAll('.agenda_oculto');

botaoEventos.addEventListener('click', ()=> {
    mostrarEventos.forEach(x => x.classList.toggle('eventos_item'));
})

botaoAgenda.addEventListener('click', ()=>{
    mostrarAgenda.forEach(x => x.classList.toggle('agenda_item'));
})