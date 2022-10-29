const toggle = () => {
    const burgerMenu = document.querySelector('.nav-menu_list-burger'),
          openBtn = document.querySelector('.nav-menu_burger-btn'),
          closeBtn = document.querySelector('.nav-menu_burger-close');

        const menuToggle = () => {
            let menuOpne = document.querySelector('.menuOpened');

            if(menuOpne) {
                burgerMenu.classList.remove('menuOpened');
            } else {
                burgerMenu.classList.add('menuOpened');
            }
        }
        
        openBtn.addEventListener('click', menuToggle);
        closeBtn.addEventListener('click', menuToggle);
}

export default toggle;