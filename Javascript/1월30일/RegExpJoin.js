


function RegExpJoin() {

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


    //아이디 확인 정규식
    var idRegExp = /^[a-zA-z0-9]{4,12}$/;
    if(!idRegExp.test(Id))
    {
        alert("아이디는 영문 대소문자와 숫자 포함 4~12자로만 입력해야합니다.");
        return false;
    }

    if(!idRegExp.test(password))
    {
        alert("비밀번호는 영문 대소문자와 숫자 포함 4~12자로만 입력해야합니다.");
        return false;
    }

  
    //아이디 비밀번호 일치하는지 확인
    if (Id == password) {
        window.alert("아이디와 비밀번호는 같을 수 없습니다.")
        return false;
    }

    //비밀번호간에 확인
    if (password != checkpw) {
        window.alert("비밀번호가 일치하지 않습니다.")
        return false;
    }


    //이메일 확인
    var emailRegExp = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
        if (!emailRegExp.test(email)) {
            alert("이메일 형식이 올바르지 않습니다.");
            return false;
        }

    //이름 확인
    var nameRegExp = /^[가-힣]{2,4}$/
    if(!nameRegExp.test(name))
    {
        alert("이름을 잘못적었습니다.")
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

}

