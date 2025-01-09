document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal');
    const closeButton = document.querySelector('.modal-img img');
    const footerButtons = document.querySelectorAll('.footer-content-container div');

    console.log('Modal element:', modal);
    console.log('Close button:', closeButton);
    console.log('Footer buttons:', footerButtons);

    footerButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            console.log('Button clicked', e.target);
            modal.classList.remove('hidden');
            modal.classList.add('visible');
            console.log('Modal classes after click:', modal.classList);
        });
    });

    closeButton.addEventListener('click', () => {
        console.log('Close clicked');
        modal.classList.remove('visible');
        modal.classList.add('hidden');
    });
});