document.addEventListener("DOMContentLoaded", function() {  

    const buttonsPopup = document.querySelectorAll('.tariffs__btn');
    const popup = document.querySelector('.popup');
    const closePopup = document.querySelectorAll('.popup__close, .popup__btn');

    buttonsPopup.forEach(button => {
         button.addEventListener('click', () => {
             popup.classList.add('active');
             const bodyclick = document.querySelector('.body');
             bodyclick.classList.add('lock');
         });
    });
    closePopup.forEach(button => {
        button.addEventListener('click', () => {
            popup.classList.remove('active');
            const bodyclick = document.querySelector('.body');
            bodyclick.classList.remove('lock');
        });
    });

    const closeCookie = document.querySelectorAll('.cookie__accept, .cookie__decline, .cookie__close');
    const cookie = document.querySelector('.cookie');
    closeCookie.forEach(button => {
        button.addEventListener('click', () => {
            cookie.classList.remove('active');
            const bodyclick = document.querySelector('.body');
            bodyclick.classList.remove('lock');
        });
    });

    const reserveItems = document.querySelectorAll(".reserve__item");
    reserveItems.forEach(function(item) {
        item.addEventListener("click", function() {
            const isActive = item.classList.contains("active");
            reserveItems.forEach(function(item) {
                item.classList.remove("active");
            });
            if (!isActive) {
                item.classList.add("active");
            }
        });
    });

    const form = document.getElementById("myForm");
    const userName = document.getElementById("name");
    const emailInput = document.getElementsByName("email")[0];
    const phoneInput = document.getElementById("phone");
    const phoneMessageElement = document.querySelector(".reserve__from-phone");
    const emailMessageElement = document.querySelector(".reserve__from-email");

    form.addEventListener("submit", function (event) {
        event.preventDefault()
        const phoneNumber = phoneInput.value.trim();
        const phonePattern = /^\+38\(0[1-9]\d{1}\)\d{3}-\d{2}-\d{2}$/
        let checkValid = false
        if (!phonePattern.test(phoneNumber)) {
            phoneInput.classList.add("errorValid");
            phoneMessageElement.style = 'opacity: 1;';
            checkValid = true
        } else {
            phoneInput.classList.remove("errorValid");
            phoneMessageElement.style = 'opacity: 0;';
        }
        if (!isValidEmail(emailInput.value)) {
            event.preventDefault();
            emailInput.classList.add("errorValid");
            emailMessageElement.style = 'opacity: 1;';
            checkValid = true
        }
        else {
            emailInput.classList.remove("errorValid");
            emailMessageElement.style = 'opacity: 0;';
        }

        if (userName.value == NaN || userName.value == ""){
            event.preventDefault();
            userName.classList.add("errorValid");
            checkValid = true
        }
        else{
            userName.classList.remove("errorValid");
        }

        if(checkValid){
            return
        }


    });

    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }
    const inputs = form.querySelectorAll('input');
    const messages = [ null, emailMessageElement, phoneMessageElement ];
    inputs.forEach((input, index) => {
        input.addEventListener('input', handleInput);
        input.addEventListener('focus', handleInput);
        function handleInput() {
            input.classList.remove('errorValid');
            if (index > 0 && messages[index]) {
                messages[index].style.opacity = '0';
            }
        }
    });
    
    
    
    const maskOptions = {
        mask: '+38(000)000-00-00',
        lazy: false
    };
    let phoneMask;
    inputs.forEach(function (input) {
        input.addEventListener('input', function () {
            input.classList.remove('errorValid');
        });
        input.addEventListener('focus', function () {
            if (input === phoneInput && !phoneMask) {
                phoneMask = new IMask(phoneInput, maskOptions);
            }
        });
    });

    document.addEventListener("click", function (event) {
        if (phoneInput !== event.target) {
            const phoneNumber = phoneInput.value;
            const regex = /\+38\(0\d+/;
            const hasNumbersAfter0380 = regex.test(phoneNumber);
            if (phoneMask && !hasNumbersAfter0380) {
                phoneMask.destroy();
                phoneMask = null;
                phoneInput.value = ""
            }
            phoneInput.setAttribute("placeholder", "Ваш номер телефону");
        }
    });


    const faqItems = document.querySelectorAll(".faq__item");

    faqItems.forEach((item) => {
        item.addEventListener("click", () => {
            item.classList.toggle("active");
        });
    });


    $(".reviews__block").slick({
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 843,
            settings: {
                slidesToShow: 1
            }
        }] 
    });


});