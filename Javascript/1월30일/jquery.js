function checks(){
    var hobbyCheck = false;
    var getMail = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
    var getCheck= RegExp(/^[a-zA-Z0-9]{4,12}$/);
    var getName= RegExp(/^[가-힣]+$/);
    var fmt = RegExp(/^\d{6}[1234]\d{6}$/); //형식 설정
    var buf = new Array(13); //주민등록번호 배열

    //아이디 공백 확인
    if($("#id").val() == ""){
      alert("아이디를 입력해 주세요");
      $("#id").focus();
      return false;
    }
         
    //아이디 유효성검사
    if(!getCheck.test($("#id").val())){
      alert("아이디를 형식에 맞게 입력해주세요");
      $("#id").val("");
      $("#id").focus();
      return false;
    }

    //비밀번호 공백 확인
    if($("#password").val() == ""){
      alert("패스워드를 입력해 주세요");
      $("#password").focus();
      return false;
    }
         

    //아이디 비밀번호 같음 확인
    if($("#id").val() == $("#password").val()){
      alert("아이디와 비밀번호가 같습니다");
      $("#password").val("");
      $("#password").focus();
      return false;
    }
    
    //비밀번호 유효성검사
    if(!getCheck.test($("#password").val())){
      alert("비밀번호를 형식에 맞게 입력해주세요");
      $("#password").val("");
      $("#password").focus();
      return false;
    }
         
    //비밀번호 확인란 공백 확인
    if($("#password_check").val() == ""){
      alert("패스워드 확인란을 입력해주세요");
      $("#password_check").focus();
      return false;
    }
         
    //비밀번호 서로확인
    if($("#password").val() != $("#password_check").val()){
        alert("비밀번호가 서로 일치하지 않습니다.");
        $("#password").val("");
        $("#password_check").val("");
        $("#password").focus();
        return false;
    }
        
    //이메일 공백 확인
    if($("#mail").val() == ""){
      alert("이메일을 입력해주세요");
      $("#mail").focus();
      return false;
    }
         
    //이메일 유효성 검사
    if(!getMail.test($("#mail").val())){
      alert("이메일형식에 맞게 입력해주세요")
      $("#mail").val("");
      $("#mail").focus();
      return false;
    }
         
    //이름 공백 검사
    if($("#name").val() == ""){
      alert("이름을 입력해주세요");
      $("#name").focus();
      return false;
    }

    //이름 유효성 검사
    if(!getName.test($("#name").val())){
      alert("이름형식에 맞게 입력해주세요")
      $("#name").val("");
      $("#name").focus();
      return false;
    }
         

    if(($("#id_num").val() == "") || ($("#id_num_back").val() == "")){
      alert("주민등록번호를 입력해주세요");
      $("#id_num").focus();
      return false;
    }

    if(check_jumin() ==false){
      return false;
    }

    //취미 유효성 검사
    for(var i=0;i<$('[name="hobby[]"]').length;i++){
      if($('input:checkbox[name="hobby[]"]').eq(i).is(":checked") == true) {
        hobbyCheck = true;
        break;
          }
        }
            
    if(!hobbyCheck){
      alert("하나이상 관심분야를 체크해 주세요");
      return false;
    }

    //자기소개란 공백 검사
    if($("#intro").val() == ""){
      alert("자기소개를 입력해주세요")
      $("#intro").val("");
      $("#intro").focus();
      return false;
      }
      return true;
  }

  function check_jumin(){
    var jumins3 = $("#id_num").val() + $("#id_num_back").val();
    //주민등록번호 생년월일 전달
        
    var fmt = RegExp(/^\d{6}[1234]\d{6}$/)  //포멧 설정
    var buf = new Array(13);

    //주민번호 유효성 검사
    if (!fmt.test(jumins3)) {
      alert("주민등록번호 형식에 맞게 입력해주세요");
      $("#id_num").focus();
      return false;
    }

    //주민번호 존재 검사
    for (var i = 0; i < buf.length; i++){
      buf[i] = parseInt(jumins3.charAt(i));
    }

    var multipliers = [2,3,4,5,6,7,8,9,2,3,4,5];// 밑에 더해주는 12자리 숫자들 
    var sum = 0;

    for (var i = 0; i < 12; i++){
    sum += (buf[i] *= multipliers[i]);// 배열끼리12번 돌면서 
  }

  if ((11 - (sum % 11)) % 10 != buf[12]) {
    alert("잘못된 주민등록번호 입니다.");
    $("#id_num").focus();
    return false;
  }

  var birthYear = (jumins3.charAt(6) <= "2") ? "19" : "20";
  birthYear += $("#id_num").val().substr(0, 2);
  var birthMonth = $("#id_num").val().substr(2, 2);
  var birthDate = $("#id_num").val().substr(4, 2);
  var birth = new Date(birthYear, birthMonth, birthDate);
                            
           
  $("#year").val(birthYear);
  $("#month").val(birthMonth);
  $("#date").val(birthDate);
}