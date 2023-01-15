const toggle = () => {
    const burgerMenu = document.querySelector('.nav-menu_list-burger'),
          openBtn = document.querySelector('.nav-menu_burger-btn'),
          closeBtn = document.querySelector('.nav-menu_burger-close'),
          listItems = document.querySelectorAll('.list-item');

        const menuToggle = () => {
            let menuOpne = document.querySelector('.menuOpened');

            if(menuOpne) {
                burgerMenu.classList.remove('menuOpened');
                document.body.style.overflowY = 'visible';
            } else {
                burgerMenu.classList.add('menuOpened');
                document.body.style.overflowY = 'hidden';
            }
        }

        listItems.forEach(item => {
            item.addEventListener('click', () => {
                burgerMenu.classList.remove('menuOpened');
                document.body.style.overflowY = 'visible';
            })
        })
        
        openBtn.addEventListener('click', menuToggle);
        closeBtn.addEventListener('click', menuToggle);
}

export default toggle;