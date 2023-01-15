const toTopButton = () => {
    const hero = document.querySelector('.hero-parallax'),
          button = document.querySelector('.top-button_container');

    window.addEventListener('scroll', () => {
        if(document.body.scrollTop > hero.clientHeight || document.documentElement.scrollTop > hero.clientHeight) {
            button.classList.add('button-show');
        } else {
            button.classList.remove('button-show');
        }
    })
}

export default toTopButton;