//this
var student = {
    name: 'Ngo Luu',
    getName: function() {
        console.log(this.name);
        return this.name;
    }
};
var _desStudent = student.getName();

//scopes and global
// function localFunction() {
//     var localVariable = 'Biến cục bộ';
  
//     console.log(localVariable); 
//   }
  
//   localFunction();
//   console.log(localVariable); 


// var globalVariable = 'Biến toàn cục';

// function globalFunction() {
//   console.log('Hàm toàn cục');
// }

// console.log(globalVariable); 
// globalFunction();

//Scope chain

function step1 () {
    console.log(te);
}

function step2 () {
    var te = 2;
    step1();
}
step2();
var te = "Global variables";


//scopes. blind(ES6)
var checkNumbericRange = function (value){
    if(typeof value !== 'number')
     return false;
    else
     return value >= this.minimum && value <= this.maximum;
}
var range = {minimum: 10, maximum: 20};

var boundCheckNumericRange = checkNumbericRange.bind(range);

var result = boundCheckNumericRange(12);
console.log(result);

//lexical scope
function fOuter () {
    var x = "Hello";
    function fInner () {
        x = "World";
    }
    fInner();
    return x;
}
console.log(fOuter());

var myFunction = function () {
    var name = 'Ngo Luu ';
    var myOtherFunction = function () {
        console.log('I am ' + name);
    };
    console.log(name);
    myOtherFunction();
};
myFunction();

// Closures
function outerF () {
    var x = "World";
    function innerFsetX(val) {
        x = val;
    }
    return innerFsetX;
}
var a = outerF();

console.log(a("Hello"));


//Curry
function add(a,b,c) {
    return a+b+c;
    }
    console.log(add(1,2,3));
    function addCurries(a) {
    return (b) => {
        return (c) => {
            return a + b+ c;
    
            }
    
        }
    
    }
    
    console.log(addCurries(1)(2)(3));
    const ad1 = addCurries(1);
    const ad2 = ad1(2);
    const ad3 = ad2(4);
    
    console.log(ad3);



//Another VS for closure scope
var registrations = {
    class: "Databases",
    students: [
        { studentId: "001", name:"Mai ha Thi"},
        { studentId: "002", name: "Nguyen Van A"},
        { studentId: "003", name:"Mai An Thuy"}
    ],
    clickEnrollment: function() {
    
    this.students. forEach(function(student) {
        console.log(student.name + "already enrolled class " + this.class);
    })
   }
 }
 registrations.clickEnrollment();

 //dieu chinh
 var registrations = {
    class: "Databases",
    students: [
        { studentId: "001", name:"Mai ha Thi"},
        { studentId: "002", name: "Nguyen Van A"},
        { studentId: "003", name:"Mai An Thuy"}
    ],
    clickEnrollment: function() {
        var self = this; // Lưu tham chiếu đến đối tượng trong biến self

        this.students.forEach(function(student) {
            console.log(student.name + " already enrolled in class " + self.class);
        });
    }
};

registrations.clickEnrollment();


 //Closures scope
 var sayBye = function (name) {
    var text = 'Bye, ' + name;
    return () =>{
        console.log(text);
    }
 }    
sayBye('Me');
var calledMe = sayBye('Me');
calledMe();
    