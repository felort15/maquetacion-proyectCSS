const modal = document.querySelector('.modal');
const button1 = document.querySelector('#button-1');
const button2 = document.querySelector('#button-2');
const button3 = document.querySelector('#button-3');
const close = document.querySelector('.modal-img');

button1.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
});

button2.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
});
button2.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
}); 

button3.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
});

modal.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('visible');
});     

close.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('visible');
});