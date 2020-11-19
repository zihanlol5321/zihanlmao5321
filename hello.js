alert("This website mite look weird in google chorme mobile version. Try to aboid it to get the best experience");
alert("Ive added some background sound to make you concertrate😏😏");
var q1 = document.getElementsByName("q1");
var q2 = document.getElementsByName("q2");
var q3 = document.getElementsByName("q3");
var q4 = document.getElementsByName("q4");
var q5 = document.getElementsByName("q5");
var q6 = document.getElementsByName("q6");
var result=0;
function hello(){
    if(q1[0].checked){
        alert("correct😀. There was no twist bro");
    }else{
        alert(" wrong 😑. There was no twist bro. the ans is 49 ");
    }
}
function hello1(){
    if(q2[2].checked){
        alert("correct😀.the ans is 3.(1)Open the fridge,(2)put the cow,(3)close the fridge")}
        else{
        alert(" wrong 😑. the ans is 3.(1)Open the fridge,(2)put the cow,(3)close the fridge");
    }
}
function hello2(){
    if(q3[2].checked){
        alert("correct😀.(1)Open the fridge,(2)take out the cow,(3)put the deer,(4)close the fridge");
    }else{
        alert("wrong 😑.(1)Open the fridge,(2)take out the cow,(3)put the deer,(4)close the fridge");
    }
}
function hello3(){
    if(q4[3].checked){
        alert("correct😀. because he was locked in the fridge");
    }else{
        alert("wrong 😑. the ans is deer because he was locked in the fridge");
    }
}
function hello4(){
    if(q5[0].checked){
        alert("correct😀. they went to the birthday party");
    }else{
        alert(" wrong 😑. all the crocodiles went to the birthday party");
    }
}
function hello5(){
    if(q6[2].checked){
        alert("correct😀. The brick had hit him in the head");
    }else{
        alert(" wrong 😑. Remember the fallen brick of Q1? That brick had hit him in the head. Every question was connected");
    }
}
function score(){
    if(q1[0].checked){
      result+=5;  
    }
    if(q2[2].checked){
        result+=5;
    }
    if(q3[2].checked){
        result+=5;
    }
    if(q4[3].checked){
        result +=5;
    }
    if(q5[0].checked){
        result+=5;
    }
    if(q6[2].checked){
        result+=5;
    }
    if(result = 30){
        alert("congrats!Your score is " + result +"/30 . You probably had corrected the answers or you are doing this twice. ");
    }else{
        alert("your score is " + result + "/30 . No worries");
    }
}
