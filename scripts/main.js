// let myHeading = document.querySelector('h1')
// myHeading.textContent = 'Hello World!'

// 변수 선언
// var myVariable 
// // 값 할당
// myVariable = 10

// 변수 선언과 할당
var myVariable = 10

// console.log(myVariable)

// ES6 이전
var myV1 = 1
// ES6 이후
let myV2 = 2
const myV3 = 3

myV1= 10
var myV1 = 100

// let변수는 재선언 X
myV2 = 20
// let myV2 = 20

// const 변수는 재할당/재선언이 되지 않는다 -> 상수값을 사용할때 const활용
// myV3 = 30
// const myV3= 300

let a = 'bob'
let b = 10
let c = true
let d = [1,2,3,4]
let e = {
    'apple' : '사과',
}
// console.log(a, b, c, d, e)

console.log(1+2)
console.log('hello' + 'world')

let varA = '10'
let varB = 10

// 값을 비교해준다
console.log(varA == varB)

// 데이터의 타입까지 고려하여 비교해준다.
console.log(varA === varB)


console.log(varA !== varB)

// Array
let myArray = []
myArray.push('hello')
myArray.push('world')
myArray.push('hello', 'hi')
console.log(myArray)
myArray.pop()
console.log(myArray)
console.log(myArray[0])
// Object
let myObject = {
    'apple':'사과',
}

console.log(myObject.apple)

myObject.grape = '포도'
console.log(myObject)


//  조건문

let iceCream = 'chocolate'
if (iceCream == 'chocolate') {
    console.log('I love chocolate')
} else if (iceCream == 'vanila') {
    console.log('vanila')
} else {
    console.log('hing')
}

// 반목문
console.log('---while---')
let i = 0
while (i < 5) {
    console.log(i)
    i++
}

console.log('---forVar2---')
for ( let i = 0; i < 5; i++) {
    console.log(i)
}

let arrayA = ['a', 'b', 'c']
console.log('---for2---')
for (let i = 0; i < arrayA.length; i++) {
    console.log(arrayA[i])
}


console.log('---for in---')

for (let index in arrayA){
    console.log(index, arrayA[index])
}


console.log('--for of---')

for (let item in arrayA){
    console.log(item)
}


console.log('---forEach---')
arrayA.forEach(function(item, index, array){
    console.log(item, index, array)
})


// 함수
function multiply(num1, num2) {
    let result = num1 * num2
    return result
}

console.log(multiply(2,3))

// 함수표현식
let multiply2 = function (num1, num2){
    return num1 * num2
}
console.log(multiply2(3,4))

// 화살표 함수
let multiply3 = (num1, num2) => {
    return num1 * num2
}
console.log(multiply3(2,5))


// 화살표 함수 생략
//  {}안에 코드가 return하는 문장 하나만 있다면 {}와 return생략 가능
let multiply4 = (num1, num2) => num1 * num2
console.log(multiply4(3,4))

// 화살표함수 생략 2
// ()안에 매개변수가 하나만 있따면 ()생략 가능
let cube = num => num ** 3
console.log(cube(3))


// 이벤트(onclick 방식)
// document.querySelector('html').onclick = function (){
//     alert('hello!')
// }

// 이벤트(이벤트리스너)
let myH1 = document.querySelector('h1')
// <element>addEventListener(일이 일어났을때, 어떤 행동을 할지)
myH1.addEventListener('click', function(e) {
    alert('hihi')
    console.log(e)
    console.log(e.clientX, e.clientY)
})

let myImg = document.querySelector('img')
myImg.addEventListener('click', function(){
    let src = myImg.getAttribute('src')
    if (src === 'images/짱구.jpeg'){
        myImg.setAttribute('src', 'images/firefox-icon.png')
    } else {
        myImg.setAttribute('src', 'images/짱구.jpeg')
    }
})

let myInput = document.querySelector('input')
myInput.addEventListener('keydown', function(e){
    // console.log(e)
    console.log(myInput.value)
})