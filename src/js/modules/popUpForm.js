const popUpForm = () => {
    const form = document.querySelector('.pop-up_form'),
          thanksContainer = document.querySelector('.pop-up_thanks');

    console.log(form);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        thanksContainer.classList.add('thanks-show');
    });
}

export default popUpForm;