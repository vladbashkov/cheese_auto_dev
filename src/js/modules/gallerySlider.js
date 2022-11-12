import Splide from '@splidejs/splide';

const slider = () => {
    let main = new Splide( '#main-carousel', {
        type      : 'loop',
        pagination : false,
        loop       : true
    });

    let thumbnails = new Splide( '#thumbnail-carousel', {
        fixedWidth : 100,
        fixedHeight: 60,
		gap        : 10,
		rewind     : true,
        arrows     : false,
		pagination : false,
        isNavigation: true,
        loop       : true,
        focus      : 'center',
        breakpoints: {
            600: {
            fixedWidth : 60,
            fixedHeight: 44,
            },
        },
    } ).mount();

    main.sync( thumbnails );
    main.mount();
    thumbnails.mount();
}

export default slider;