select();

function select() {
    let selectHeader = document.querySelectorAll('.form__select-header');
    let selectItem = document.querySelectorAll('.form__select-item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', () => {
            let text = this.innerText,
            select = this.closest('.form__select'),
            currentText = select.querySelector('.form__select-current');
            currentText.innerText = text;
            select.classList.remove('active');
        })
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