
//var all="";      

var num1 = ""; //숫자1
var num2 = ""; //숫자2
var Operator = ''; //연산자

function add(num) {
    // all += num;
    document.getElementById("field").value += num;
    console.log("숫자 입력 확인");
}

function Oper(oper) {
    num1 = document.getElementById("field").value
    // all ='';

    document.getElementById("field").value = '';
    Operator = oper;

    //num2 = document.getElementById("field").value
    console.log("연산자 입력확인");
}

function equls() {
    num2 = document.getElementById("field").value

    console.log("계산 확인")
    // all='';
    switch (Operator) {
        case '+':
            document.getElementById("field").value = String(Number(num1) + Number(num2));
            break;

        case '-':
            document.getElementById("field").value = String(Number(num1) - Number(num2));
            break;

        case '*':
            document.getElementById("field").value = String(Number(num1) * Number(num2));
            break;

        case '/':
            document.getElementById("field").value = String(Number(num1) / Number(num2));
            break;
        case '^':
            document.getElementById("field").value = String(Number(num1) ** Number(num2));
            break;

    }
}
function sin() {
    document.getElementById("field").value = Math.sin(document.getElementById("field").value);

}

function cos() {
    document.getElementById("field").value = Math.cos(document.getElementById("field").value);

}

function tan() {
    document.getElementById("field").value = Math.tan(document.getElementById("field").value);

}



function Clear() {
    num1 = '';
    num2 = '';
    Operator = '';
    // all="";
    document.getElementById("field").value = '';
}

function change() {
    document.getElementById("field").value = -document.getElementById("field").value;
}

function dot(dot) {
    //indexOf로 field에 '.'이 없다면 -1일때가 없는 경우
    if (document.getElementById('field').value.indexOf('.') == -1)
        document.getElementById('field').value += dot
}
