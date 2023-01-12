function signIn() {
    
    let name = document.getElementById('txt_name').value;
    let password = document.getElementById('txt_password').value;
    let password2 = document.getElementById('txt_password2').value;
    let year = document.getElementById('txt_year').value;
    let month = document.getElementById('txt_month').value;
    let day = document.getElementById('txt_day').value;
    let mgender = document.getElementById('r_gender_man').checked;
    let wgender = document.getElementById('r_gender_woman').checked;

    if( name == "") {
        alert ("아이디를 입력하세요.");
        name.focus;
    }
    else if( password == "") {
        alert ("비밀번호를 입력하세요.");
        password.focus;
    }
    else if( password2 == "") {
        alert ("비밀번호를 다시 입력하세요.");
        password2.focus;
    }
    else if( year == "") {
        alert ("태어난 년도를 입력하세요.");
        year.focus;
    }
    else if( month == "") {
        alert ("태어난 달을 입력하세요.");
        month.focus;

    }
    else if( day == "") {
        alert ("태어난 날짜를 입력하세요.");
        day.focus;
    }
    else if ( password != password2){
        alert("비밀번호가 일치하지 않습니다.");
    }
    else{
        setTimeout(function() {
            alert("가입이 완료되었습니다.")
        },0);
        location.href="login.html";
    }
    


   

}

function signCancel() {
    // 진짜 sign up 안할껀지 물어보고 원래 페이지로 돌아가기
    var result = confirm("정말 회원가입을 취소하시겠습니까? T.T");

    if( result ){
        location.href="login.html";   //로그인 페이지로 돌아가기
    }else{
        location.href="signUp.html";  //회원가입 페이지로 돌아가기

    }
    


}
