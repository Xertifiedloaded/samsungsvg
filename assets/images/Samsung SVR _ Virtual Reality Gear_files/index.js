const sidebar = document.querySelector('#sidebar');
const menuBar = document.querySelector('#menu-bar');
const cancel = document.querySelector('.cancel');

menuBar.addEventListener('click', () => {
    if (menuBar.classList.value === 'menu-bar') {
        sidebar.style.display = "block";
        sidebar.classList.add('slide-in');
        sidebar.classList.remove('slide-out');
        menuBar.classList.remove('menu-bar');
        menuBar.classList.add('cancel');
    } else {
        setTimeout(() => {
            sidebar.style.display = "none";
        }, 500);
        sidebar.classList.add('slide-out');
        sidebar.classList.remove('slide-in');
        menuBar.classList.add('menu-bar');
        menuBar.classList.remove('cancel');
    }
})