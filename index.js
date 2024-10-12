
const menuBtn = document.getElementById('menu_btn');
const MenuResponsivStyle = document.querySelector('.menu_responsiv');
const btnPlane = document.querySelectorAll('.btn-plane');
const boxChild = document.querySelectorAll('.box');
const bookButtons = document.querySelectorAll('.book'); // Selects all "Book Now" buttons
const modal = document.getElementById('modal');
const submitBtn = document.querySelector('.btn'); // Changed to class selector
const chanelBtn = document.querySelector('.btns'); // Changed to class selector

// Show modal when any "Book Now" button is clicked
bookButtons.forEach((button) => {
    button.addEventListener('click', () => {
        modal.classList.remove('hidden'); // Show modal
    });
});

// Hide modal when the "Cancel" button is clicked
chanelBtn.addEventListener('click', () => {
    modal.classList.add('hidden'); // Hide modal
});
submitBtn.addEventListener('click', () => {
    modal.classList.add('hidden'); // Hide modal
});
// Handle tab switching for flight and hotel buttons
btnPlane[0].classList.add('active');
boxChild[0].classList.add('active');

btnPlane.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        btnPlane.forEach(tab => { tab.classList.remove('active'); });
        tab.classList.add('active');

        boxChild.forEach(box => { box.classList.remove('active'); });
        boxChild[index].classList.add('active');
    });
});
