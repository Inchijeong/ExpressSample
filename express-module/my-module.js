// 내보낼 객체 생성
var myModule = { 
    name: "Kim",
    age: 23,
    aboutMe: function(){
        console.log("Hi, my name is " + this.name + " and I'm " + this.age + " year's old.");
    } 
};

// 함수도 가능
function add(a, b){
    return a + b;
}

// 변수는 불가능
var text2 = "Hello World"

// 객체 내보내기
module.exports = myModule;
// 함수 내보내기
// module.exports = add;
// 변수 내보내기 x
// module.exports = text2;
