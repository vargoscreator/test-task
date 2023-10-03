document.addEventListener('DOMContentLoaded', function() {
    const bodyclick = document.querySelector('.body');
    const headerBurger = document.querySelector('.header__burger');
    const headerMenu = document.querySelector('.header__menu');
    const headerMenuItems = document.querySelectorAll('.header__menu-item, .header__btn-link');
    const headerOverlay = document.querySelector('.header__overlay');


    function handleResize() {
        if (window.innerWidth > 900) {
            bodyclick.classList.remove('lock');
            headerBurger.classList.remove('active');
            headerMenu.classList.remove('active');
            headerOverlay.classList.remove('lock');
        }
    }

    function changeClass() {
        bodyclick.classList.toggle('lock');
        headerBurger.classList.toggle('active');
        headerMenu.classList.toggle('active');
        headerOverlay.classList.toggle('lock');
    }

    headerBurger.addEventListener('click', function() {
        changeClass();
    });
    headerOverlay.addEventListener('click', function() {
        changeClass();
    });

    function checkClikedLink(){
        headerMenuItems.forEach(element => {
            element.addEventListener('click', function() {
                if (window.innerWidth <= 973) {
                    changeClass();
                }
            });
        });
    }

    function checkClikedLink() {
        headerMenuItems.forEach(element => {
            element.removeEventListener('click', handleClick);
            element.addEventListener('click', handleClick);
        });
    }
    function handleClick() {
        if (window.innerWidth <= 973) {
            changeClass();
        }
    }
    window.addEventListener('resize', checkClikedLink);
    window.addEventListener('resize', handleResize);
    handleResize();
    checkClikedLink()    

    window.addEventListener('resize', checkClikedLink);
    checkClikedLink()
});