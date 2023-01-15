const popUpContainer = document.querySelector('.pop-up_container'),
      popUpCover = document.querySelector('.pop-up_cover'),
      modalCloseBtn = document.querySelector('.close-btn_container');

const PopUp = () => {

    function waitForElm(selector) {
        return new Promise(resolve => {
            if (document.querySelectorAll(selector)) {
                return resolve(document.querySelectorAll(selector));
            }
    
            const observer = new MutationObserver(mutations => {
                if (document.querySelectorAll(selector)) {
                    resolve(document.querySelectorAll(selector));
                    observer.disconnect();
                }
            });
    
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    }

    function closeModal() {
        popUpCover.classList.remove('pop-up_show');
        document.body.style.overflow = '';
    }

    waitForElm('.contact-button').then(buttons => {

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                popUpCover.classList.add('pop-up_show');
                document.body.style.overflow = 'hidden';
                // document.body.innerHTML += popUpContainer;
            })
        });

        modalCloseBtn.addEventListener('click', closeModal);

        popUpCover.addEventListener('click', (e) => {
            if(e.target == popUpCover && e.target != popUpContainer) {
                closeModal();
            }
        })

    })
}

export default PopUp;

