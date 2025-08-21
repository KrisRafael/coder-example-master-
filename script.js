const scrollUpButton = document.getElementById('scroll-up-btn');
let isVisible = false;

scrollUpButton.classList.add('hide');

function handleScroll() {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 768) { //Tablet
        if (window.scrollY > 1000) { //Desktop
            if (!isVisible) {
                scrollUpButton.classList.remove('hide');
                scrollUpButton.classList.add('show');
                isVisible = true;
            }
        } else {
            if (isVisible) {
                scrollUpButton.classList.remove('show');
                scrollUpButton.classList.add('hide');
                isVisible = false;
            }
        }
    } else { //Mobil
        scrollUpButton.classList.remove('show');
        scrollUpButton.classList.add('hide');
        isVisible = false;
    }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll); // aktualizace při změně velikosti

scrollUpButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});





