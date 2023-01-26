
function outPut(){
    // getElemntById 메서드를 통해 텍스트에 입력된 Id를 가져옴
    var textBox = document.getElementById("myName").value;
    var color = document.getElementById("color").value;
    var size = document.getElementById("size").value;
    var letter = document.getElementsByName("letter");
    var letterCheck = [];

    for(var i=0; i<letter.length; i++) {
         if(letter[i].checked) {
             letterCheck.push(letter[i].value);
         }
     }

    for(var i =0; i<letter.length;i++){
        if(letterCheck[i]=="cancel")
        {
            textBox=textBox.strike();
        }
        if(letterCheck[i]=="big"){
            textBox=textBox.big();
        }
        if(letterCheck[i]=="small"){
            textBox=textBox.small();
        }
        if(letterCheck[i]=="bold"){
            textBox=textBox.bold();
        }
        if(letterCheck[i]=="italic"){
            textBox=textBox.italics();
        }
        if(letterCheck[i]=="up"){
            textBox=textBox.sup();
        }
        if(letterCheck[i]=="down"){
            textBox=textBox.sub();
        }
        if(letterCheck[i]=="lower"){
            textBox=textBox.toLowerCase();
        }
        if(letterCheck[i]=="upper"){
            textBox=textBox.toUpperCase();
        }
        
    }

    textBox = textBox.fontcolor(color);
    textBox = textBox.fontsize(size);
    
    document.getElementById("result").innerHTML=textBox;
}

