//표현식
(3+12)/5
declareVariable
greeting("Hello")

//명령문
if (true){

}

//표현식 명령문
function greeting() {
    "hello"
    "Chloe" + 3
    greeting()
}

//구문오류
//명령문 안에 표현식은 가능하지만 표현식 안에 명령문은 불가능
//greeting(if(true) { console.log("It is not acceptable") })