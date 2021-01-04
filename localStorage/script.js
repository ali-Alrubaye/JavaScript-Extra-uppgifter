let btn_send = document.getElementById('btn_send');
let user_form = document.querySelectorAll('.user_form input');

btn_send.addEventListener('click', (e) => {
    e.preventDefault();
    for (const v of user_form) {
        console.log(v.getAttribute('name'))
        localStorage.setItem(v.getAttribute('name'), v.value)
    }
})

document.addEventListener("DOMContentLoaded", function(e) {
    for (const v of user_form) {
        let storage = localStorage.getItem(v.getAttribute('name'));
        if (storage !== null) {
            v.value = storage
        }
    }
})