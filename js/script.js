

// if (0) {
//     console.log('false');
// } else if ('  ') {
//     console.log('true');
// }


// // let num;

// // for (num = 1; num <= 5; num++) {
// //     console.log(num);
// // }

// // do {
// //     console.log(num);
// //     num++;
// // }
// // while (num <= 5);

// // while (num <= 5) {
// //     console.log(num);
// //     num++;
// // }


// firstBreak: for (let num = 0; num < 3; num++) {
//     for (let size = 0; size < 3; size++) {
//         if (size == 1) {
//             break firstBreak;
//         }
//         console.log(size);
//     }
//     console.log(num);
// }


// function showMessage(message, user) {
//     console.log(`${message}, ${user}`);
// }

// setTimeout(showMessage, 3000, 'Welcome', 'Alexey');

// function calcSum(sumOne, sumTwo) {
//     let numSum = sumOne + sumTwo;
//     console.log(numSum);

// }

// calcSum(50, 100);
// calcSum(200, 200);


// let getMessage = (text, userName) => text + ' , ' + userName + '!';
// console.log(getMessage('Greetings', 'Alex'));

// function showNumber(num) {
//     if (num <= 10) {
//         console.log(num);
//         setTimeout(showNumber, 1000, ++num);
//     }
// }

// setTimeout(showNumber, 1000, 1);

// function showName() {
//     console.log('Alex');
// }
// setTimeout(showName, 0);
// console.log('Oxana');

let userDB = ['Alex', 'Sasha', 'Vadim'];
console.log(userDB);
console.log(userDB.length);


// const listItem = document.querySelectorAll('.list__link');
// console.log(listItem);

// const container = document.querySelectorAll('[class*="__container"]');
// console.log(container);
// console.log(container[1]);\



// const textItems = document.querySelectorAll('.text__item');
// console.log(textItems);
// textItems.forEach(function (textItem) {
//     textItem.classList.toggle('red');
//     if (textItem.classList.contains('red')) {
//         textItem.classList.remove('red');
//     }
// });


// const textTitle = document.querySelector('.text__title');
// console.log(textTitle);
// textTitle.classList.add('animate');

// const someButton = document.querySelector('.button');
// someButton.addEventListener("click", function (e) {
//     someButton.classList.toggle('red');

// });



const burgerMenu = document.querySelector('.menu__icon');
const menuNav = document.querySelector('.menu__nav');
const menuBlock = document.querySelector('.menu');




burgerMenu.addEventListener("click", function (e) {
    menuNav.classList.toggle('active');
    menuBlock.classList.toggle('menu_active');



    // if (menuNav.classList.contains('active')) {
    //     burgerMenu.addEventListener("click", function (b) {
    //         menuNav.classList.remove('active');
    //     });
    // }
});

menuNav.addEventListener("click", function (b) {
    menuNav.classList.toggle('active');
    menuBlock.classList.toggle('menu_active');
});


const pointsList = document.querySelectorAll(".points__list");
pointsList.forEach(function (pointList) {
    if (pointList.closest('.points')) {
        pointList.classList.add('points__list_active');
    }
});


// const links = document.querySelectorAll('.link');
// links.forEach(function (link) {
//     link.addEventListener("click", function (event) {
//         link.classList.toggle('link_active');
//         event.preventDefault();
//     });
// });

// document.addEventListener("click", function (e) {
//     const targetElement = e.target;
//     if (targetElement.closest('.link')) {
//         targetElement.closest('.link').classList.toggle('link_active');
//     } else {
//         const linkItems = document.querySelectorAll('.link');
//         removeClasses(linkItems, 'link_active');

//     }
// });

// function removeClasses(elements, className) {
//     elements.forEach(function (element) {
//         element.classList.remove(className);
//     })
// }

// 1th method 
// const buttonItems = document.querySelectorAll('.button');
// console.log(buttonItems);
// buttonItems.forEach(function (buttonItem) {
//     buttonItem.addEventListener("click", function (e) {
//         buttonItem.classList.toggle('button_active');
//     })
// });


document.addEventListener("click", function (e) {
    const targetElement = e.target;
    if (targetElement.classList.contains('button')) {
        targetElement.classList.toggle('button_active');
    } else {
        const buttonItems = document.querySelectorAll('.button');
        buttonItems.forEach(function (buttonItem) {
            buttonItem.classList.remove('button_active');
        })
        if (targetElement.classList.contains('btn_link')) {
            removeClasses(buttonItems, 'button_open');
        }
    }
});

function removeClasses(element, className) {
    element.forEach(element => {
        element.classList.remove(className);
    });
}


// D O M 

//  Навигация по дереву DOM


const block = document.querySelector('.block');
console.log(block);
const blockPrev = block.previousElementSibling;
console.log(blockPrev);
const blockNext = block.nextElementSibling;
console.log(blockNext);
const blockParent = block.parentElement;
console.log(blockParent);

const blockChildren = block.querySelectorAll('*'); // Поиск всех объеков любого уровня вложенности в конкретном объекте
console.log(blockChildren);

// const blockChildren = block.children; - с помощью children мы получаем объекты только первого уровня

// ПЕРВЫЙ ДОЧЕРНИЙ ЭЛЕМЕНТ 
const blockFirstChild = block.firstElementChild;
console.log(blockFirstChild);
// ПОСЛЕДНИЙ ДОЧЕРНИЙ ЭЛЕМЕНТ
const blockLastChild = block.lastElementChild;
console.log(blockLastChild);


// task

const aboutBlock = document.querySelector('.about');
const aboutFirstChild = aboutBlock.firstElementChild;
const aboutLastChild = aboutBlock.lastElementChild;

// aboutFirstChild.addEventListener("click", function (e) {
//     aboutLastChild.toggleAttribute('hidden');
// });

document.addEventListener("click", lightSpoiler);

function lightSpoiler(e) {
    const targetItem = e.target;
    if (targetItem.closest('.about__title')) {
        targetItem.closest('.about__title').nextElementSibling.toggleAttribute('hidden');
    }

}