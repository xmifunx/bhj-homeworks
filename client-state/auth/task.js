const signin = document.getElementById('signin');
const signinForm = document.getElementById('signin__form');
const signinButton = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

window.addEventListener('load', function() {
    try {
        const answer = JSON.parse(localStorage.getItem('idAuthorisation'));
        if (answer != null) {
            signin.classList.remove('signin_active');
            welcome.classList.add('welcome_active');
            userId.innerText = answer;
        } else {
            signin.classList.add('signin_active');
        }
    } catch {
        signin.classList.add('signin_active');
        return null;
    }
});

signinButton.addEventListener('click', function(event) {
    const xhr = new XMLHttpRequest();
    const body = new FormData();

    body.append('login', signinForm.elements.login.value);
    body.append('password', signinForm.elements.password.value);
     
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.send(body);
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
            var response = JSON.parse(xhr.responseText);

            if (response.success == true) {
                signin.classList.remove('signin_active');
                welcome.classList.add('welcome_active');
                userId.innerText = response.user_id;
                localStorage.setItem('idAuthorisation', response.user_id);
            } else {
                alert('Неверный логин/пароль');
            }
            signinForm.reset();
        }    
    });    
    event.preventDefault();
});