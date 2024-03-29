select();

function select() {
    let selectHeader = document.querySelectorAll('.form__select-header');
    let selectItem = document.querySelectorAll('.form__select-item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });
    function selectToggle() {
        let x = document.getElementsByClassName('form__select');
        for (let i = 0; i < x.length; i++) {
            if(x[i].classList.contains('active')){
                x[i].classList.remove('active');                      
            }
        }
        this.parentElement.classList.toggle('active');
    }

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });
    function selectChoose() {
        let text = this.innerText,
        select = this.closest('.form__select'),
        currentText = select.querySelector('.form__select-current');
        currentText.innerText = text;
        select.classList.remove('active');

    }
};

window.addEventListener('click', e => {
const target = e.target;
if (!target.closest('.form__select-body') && !target.closest('.form__select-header')) {
    let x = document.getElementsByClassName('form__select');
    for (let i = 0; i < x.length; i++) {
        x[i].classList.remove('active');
    }
}
})


function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
    disableDefaultUI: true,
    zoom: 18,
    center: {lat: 43.444738, lng: -80.515474}
});
const marker = new google.maps.Marker({
    position: {lat: 43.444738, lng: -80.515474},
    map: map,
    title: "Uluru (Ayers Rock)",
    icon: 'img/marker.svg',
});

const contentString =
    '<div class="map__container">' +
        '<h1 class="map__title">Voodoo</h1>' +
        '<div class="map__content">137 Glasgow St., Unit 115 Kitchener, ON N2G 4X8 Ukraine</div>' +
        '<div class="map__content">' + 
            '<div class="map__content-box">' + 
                '<div class="map__content-item">' + 
                    '<img src="img/feather-icon/phone.svg" alt="">' +
                    '<div class="map__content-descr">' + 
                        '1-800-480-9597' +
                    '</div>' +
                '</div>' +
                '<div class="map__content-item">' + 
                    '<img src="img/feather-icon/mail.svg" alt="">' +
                    '<div class="map__content-descr">' + 
                        'info@voodoo.com' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>' +
    "</div>";

const infoWindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Voodoo",
});

marker.addListener("click", () => {
    infoWindow.open(map, marker);
});
    infoWindow.open(map, marker);
}



document.getElementById('contact__form').addEventListener('submit', function (e) {
    e.preventDefault();
    const array = [];
    const form__selectCurrent = document.getElementsByClassName('form__select-current');
    const form__select = document.getElementsByClassName('form__select');
    for (let i = 0; i < form__selectCurrent.length; i++) {
        form__select[i].classList.remove('error');
        const selectItem = form__selectCurrent[i].innerText;
        if(selectItem == 'Practice / Institution' || selectItem === 'Medical Profession' || selectItem === 'Type of Inquiry'){
            form__select[i].classList.add('error');
            break;
        }

        array.push(selectItem);
        console.log(array[i])
    }
    const name = this.name.value;
    const title = this.title.value;
    const email = this.email.value;
    const phone = this.phone.value;
    const message = this.message.value;

    /* Виводимо повідомлення в консоль для перевірки */
    console.log(name)
    console.log(title)
    console.log(email)
    console.log(phone)
    console.log(message)
    console.log(array[0])
    console.log(array[1])
    console.log(array[2])

    e.target.reset(); 
})