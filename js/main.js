// let vaqt = new Date();
// const p = document.getElementById('demo');

// // console.log(vaqt);

// let yil = vaqt.getFullYear()

// let oy = vaqt.getMonth()

// let haftakuni = vaqt.getDay()

// let sana = vaqt.getDate()

// let soat = vaqt.getHours()

// let min = vaqt.getMinutes()

// let second = vaqt.getSeconds()

// let hozirgivaqt = `${yil} / ${oy} / ${haftakuni} / ${sana} / ${soat} / ${min} ${second}` 

// p.innerHTML = hozirgivaqt



// setTimeout(add, 2000)

// function add() {
//     console.log("hello");
// }
// const btn = document.getElementById('btn')


// let bomb = setTimeout(boom, 1000)

// function boom() {
//     console.log('bomb boom');
// }

// btn.addEventListener('click', function() {
//     clearTimeout(bomb)
// })

// setInterval(Logme, 1000)

// function Logme() {
//     console.log('hello');
// }


// let count = 0;

// function inc() {
//     count++
//     console.log(count);
// }

// setInterval(inc , 1000)



// function multiply(num1,num2, logNums) {
//     let sum = num1 + num2;
//     logNums(sum)
// }
// function Lognum(natija) {
//     console.log(natija);
// }

// multiply(3, 2, Lognum);


// let order = (fName, production) => {
//     console.log('zakaz olindi');
//     console.log(fName);
//     production()
// }

// let name = 'Olma';
// function production() {
//     setTimeout(function() {
//         console.log('p started');
//         setTimeout(function() {
//             console.log('suv bn muz va meva aralashtirildi');
//             setTimeout(function() {
//                 console.log('idishga solindi');
//                 setTimeout(function() {
//                     console.log('shokolad sepildi ustiga');
//                     setTimeout(function() {
//                         console.log('mijozga topshirildi');
//                     },5000)
//                 },4000)
//             },3000)
//         },2000)
//     },1000)
// }
// order(name, production);

let arr = [1,2,3,4,5];

function object(text) {
    Object.entries(arr)
}

