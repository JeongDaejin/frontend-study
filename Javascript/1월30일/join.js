

//아이디 규칙 확인
function IdCheck() {

    for (var i = 0; i < Id.length; i++) {

        if ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".indexOf(Id.charAt(i)) == -1) {
            window.alert("아이디는 영문 대소문자와 숫자로만 이루어져야 합니다.")
            return;
        }
    }

}

//패스워드 규칙 확인
function passwordCheck() {
    for (var i = 0; i < password.length; i++) {

        if ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(password.charAt(i)) == -1) {
            window.alert("비밀번호는 영문 대소문자와 숫자로만 이루어져야 합니다.")
            return;
        }
    }
}

function join() {

    var Id = document.getElementById('userID').value
    var password = document.getElementById('userPassword').value
    var checkpw = document.getElementById('checkPassword').value
    var email = document.getElementById('email').value
    var name = document.getElementById('name').value
    var UID = document.getElementById('UID').value
    var year = document.getElementById('year');
    var month = document.getElementsByName('month');
    var day = document.getElementsByName('day');
    var hobby = document.getElementsByName("hobby");
    var my_intro = document.getElementById('my_intro').value;


    //아이디 공백확인
    if (Id.length == 0) {
        window.alert("아이디가 비어있습니다.");
        return false;
    }

    if (Id.length < 4 || Id.length > 12) {
        window.alert("아이디 길이는 4~12자 영문 대소문자와 숫자로만 이루어져야 합니다.")
        return false;
    }



    //비밀번호 공백확인
    if (password.length == 0) {
        window.alert("비밀번호가 비어있습니다.")
        return false;
    }

    //아이디 비밀번호 일치하는지 확인
    if (Id == password) {
        window.alert("아이디와 비밀번호는 같을 수 없습니다.")
        return false;
    }

    if (password.length < 4 || password.length > 12) {
        window.alert("비밀번호가 4자 이하이거나, 12자 이상입니다.");
        return false;
    }

    if (password != checkpw) {
        window.alert("비밀번호가 일치하지 않습니다.")
        return false;
    }


    //이메일칸 공백확인
    if (email.length == 0) {
        window.alert("이메일칸이 비어있습니다.")
        return false;
    }

    if (!(email.endsWith('.net') || email.endsWith('.com')) || email.indexOf('@') <= 0) {
        alert("이메일 형식이 잘못되었습니다.");
        return false;
    }


    //이름칸 공백확인
    if (name.length == 0) {
        window.alert("이름칸이 비어있습니다.")
        return false;
    }

    //주민번호 확인
    if (UID.length != 13) {
        window.alert("주민번호가 잘못 입력 되었습니다.")
        return false;
    }

    var rrn = UID;
    var temp = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];	//각 자리 곱할 값
    var sum = 0;

    for (var i = 0; i < 12; i++) {
        sum += temp[i] * parseInt(rrn.substring(i, i + 1));
    } //각 자리 곱셈의 합

    var total = 11 - sum % 11; // 11로 나누고 -11 처리
    if (total == 10) total = 0;
    if (total == 11) total = 1;

    if (total != parseInt(rrn.substring(12))) {
        alert("잘못된 주민번호입니다.");
        return false;
    }


    //주민번호 입력시 자동 채우기
    if (UID.length == 13) {
        // 생일
        if (UID.substring(6, 7) == 1 || UID.substring(6, 7) == 2) {
            year.value = "19";
        } else {
            year.value = "20";
        }
        year.value += UID.substring(0, 2);
        month[0].value = UID.substring(2, 4);
        day[0].value = UID.substring(4, 6);
    }

    // 관심분야 확인
    var interCheck = 0;
    for (var i = 0; i < hobby.length; i++) {
        if (hobby[i].checked) {
            interCheck++;
        }
    }

    if (interCheck < 2) {
        alert("관심분야를 2개 이상 체크하세요.");
        return false;
    }

    //자기소개 확인
    if (my_intro.length < 10) {
        window.alert("자기소개는 10자 이상으로 작성해야 합니다.")
        return false;
    }

    else {
        window.alert("회원가입이 정상적으로 되었습니다.");

    }

    IdCheck();
    passwordCheck();

}

