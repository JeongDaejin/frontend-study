$.ajax({
    url: "",
    type : "POST",
    dataType : "JSON",
    data : {
        userID : user_id.val(),
        userPassword : password.val(),
        email : email.val(),
        name : name.val(),
        jumin : jumin.val(),
        year : year.val(),
        month : month.val(),
        day : day.val(),
        hobby : hobby.val(),
        my_intro : my_intro.val()
    },
    success : function() {
        alert("회원가입완료");
    },
    error : function() {
        alert("회원가입실패");
    }
});


function RegExpJoin() {

    var user_id = $("#userID");
    var uesr_pw =$("#userPassword");
    var pw_chack = $("#checkPassword");
    var email = $("#email");
    var name = $("#name");
    var jumin = $("#jumin");
    var year = $("#year");
    var month = $("#month");
    var day = $("#day");
    var hobby = $("#hobby");
    var my_intro = $("#my_intro");

    var uid = jumin.val();
    


    //아이디, 비밀번호 정규식
    var idRegExp = /^[a-zA-z0-9]{4,12}$/;
    //이메일 형식 정규식
    var emailRegExp = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
    //이름 정규식
    var nameRegExp = /^[가-힣]{2,4}$/

    if(user_id.val()==""){
        alert("아이디를 입력해 주세요");
    
        return false;
    }

    if(!idRegExp.test(user_id.val()))
    {
        alert("아이디는 영문 대소문자와 숫자 포함 4~12자로만 입력해야합니다.");
        return false;
    }

    if(uesr_pw.val()==""){
        alert("비밀번호를를 입력해 주세요");
        uesr_pw.focus();
        return false;
    }

    if(!idRegExp.test(uesr_pw.val()))
    {
        alert("비밀번호는 영문 대소문자와 숫자 포함 4~12자로만 입력해야합니다.");
        return false;
    }

  
    //아이디 비밀번호 일치하는지 확인
    if (user_id.val() == uesr_pw.val()) {
        window.alert("아이디와 비밀번호는 같을 수 없습니다.")
        return false;
    }

    //비밀번호간에 확인
    if (uesr_pw.val() != pw_chack.val()) {
        window.alert("비밀번호가 일치하지 않습니다.")
        return false;
    }


    //이메일 확인
        if (!emailRegExp.test(email.val())) {
            alert("이메일 형식이 올바르지 않습니다.");
            return false;
        }

    //이름 확인
   
    if(!nameRegExp.test(name.val()))
    {
        alert("이름을 잘못적었습니다.")
        return false;
    }

    //주민번호 확인
    if (uid.length != 13) {
        window.alert("주민번호가 잘못 입력 되었습니다.")
        return false;
    }

    var test_num = uid.charAt(0)*2 + uid.charAt(1)*3 + uid.charAt(2)*4
                + uid.charAt(3)*5 + uid.charAt(4)*6 + uid.charAt(5)*7
                + uid.charAt(6)*8+ uid.charAt(7)*9 + uid.charAt(8)*2
                + uid.charAt(9)*3 +uid.charAt(10)*4 + uid.charAt(11)*5;
    
    var test_num2 = 11 - (test_num % 11);
    test_num2 %= 10;

    // var rrn = UID.val();
    // var temp = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];	//각 자리 곱할 값
    // var sum = 0;

    // for (var i = 0; i < 12; i++) {
    //     sum += temp[i] * parseInt(rrn.substring(i, i + 1));
    // } //각 자리 곱셈의 합

    // var total = 11 - sum % 11; // 11로 나누고 -11 처리
    // if (total == 10) total = 0;
    // if (total == 11) total = 1;

    if(uid.charAt(12) != test_num2){
        alert("주민등록번호가 올바르지 않습니다.");
        return false;
        }

     if(uid.charAt(0) === "9"){
         year.val() = "19" + uid.substring(0,2);
     } else {
         year.val() = "20" + uid.substring(0,2);
     }

        if(uid.charAt(2) === "0") {
            month.val() = uid.charAt(3);
        } else {
            month.val() = uid.substring(2,4);
        }

        if(uid.charAt(4) === "0") {
            day.val() = uid.charAt(5);
        } else {
            day.val() = uid.substring(4,6);
        }
    
    // if (total != parseInt(rrn.substring(12))) {
    //     alert("잘못된 주민번호입니다.");
    //     return false;
    // }


    //주민번호 입력시 자동 채우기
    // if (UID.length == 13) {
    //     // 생일
    //     if (UID.substring(6, 7) == 1 || UID.substring(6, 7) == 2) {
    //         year.value = "19";
    //     } else {
    //         year.value = "20";
    //     }
    //     year.var() += UID.substring(0, 2);
    //     month[0].var() = UID.substring(2, 4);
    //     day[0].var() = UID.substring(4, 6);
    // }

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
    if (my_intro.val().length < 10) {
        window.alert("자기소개는 10자 이상으로 작성해야 합니다.")
        return false;
    }

    else {
        window.alert("회원가입이 정상적으로 되었습니다.");

    }

}


