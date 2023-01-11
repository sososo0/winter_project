const login_ID = document.getElementById('ID');
const login_PW = document.getElementById('PW');

function getLogin() {
    if( (login_ID.value == 'abc') && (login_PW.value == 123) ) {
        
        alert('Hi!');

        location.href = '../main_page/main.html';
    }
}

function searchPW() {
    location.href = '../main_page/main.html';
}

function getJoin() {
    location.href = '../signUp_page/signUp.html';
}