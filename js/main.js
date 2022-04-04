const callMe = document.querySelector('.callme');
const barIconNode = document.querySelector('.bars-icon');
const menuOther = document.querySelector('.nav-header-other');
const closeMenuOther = document.querySelector('.nav-close');
const overlayNode = document.querySelector('.overlay');
const bodyNode = document.querySelector('.body');
const callIcon = document.querySelector('.call-icon');

// Lấy số lượng món ăn hoặc thứ uống từ localstor nếu tồn tại thì lấy số lượng còn không thì lấy 0
const countNode = document.querySelector(".count");
let cartCount = localStorage.getItem('cart-count') || 0;
countNode.textContent = cartCount;

// Menu other
overlayNode.addEventListener('click', () => {
    menuOther.classList.remove('show-menu-other');
    overlayNode.classList.remove('overlay--show');
})

barIconNode.addEventListener('click', () => {
    menuOther.classList.toggle('show-menu-other');
    overlayNode.classList.toggle('overlay--show');
})

closeMenuOther.addEventListener('click', () => {
    menuOther.classList.toggle('show-menu-other');
    overlayNode.classList.toggle('overlay--show');
})

// Callme icon
callMe.addEventListener('click', () => {
    swal(`0342040063 - 0944412303`, "Hãy gọi chúng tôi qua các số điện thoại trên", "info");
});
// Tym
const clickHeart = document.querySelector('.click-heart');
const showHeart = document.querySelector('.show-heart');

var count = localStorage.getItem('tym') || 0;
showHeart.textContent = count;

clickHeart.addEventListener('click', () => {
    count++;
    showHeart.textContent = count;
    localStorage.setItem('tym', count);
})


// backtotop
const backClick = document.querySelector('.btn--backtotop');
var userScroll = () => {
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            backClick.style.display = 'block';
        }
        else {
            backClick.style.display = 'none';
        }
    })
}

var userClick = () => {
    backClick.addEventListener('click', () => {
        backClick.style.animation = 'smoothBackUp 0.7s linear';
        setTimeout(() => {
            backClick.style.animation = 'smoothBack 2s linear';
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }, 700);
    });
}

userScroll();
userClick();

// Convert Money
var convertMoney = (money) => {
    let length_money = Number(money.length);
    if (length_money === 5) {
        return money.slice(0, 2).concat(`.${money.slice(2)}`);
    }
    else if (length_money === 6) {
        return money.slice(0, 3).concat(`.${money.slice(3)}`);
    }
    else if (length_money === 7) {
        return money.slice(0, 1).concat(`.${money.slice(1, 4)}.${money.slice(4)}`);
    }
    else if (length_money === 8) {
        return money.slice(0, 2).concat(`.${money.slice(5)}.${money.slice(5)}`);
    }
    else if (length_money === 9) {
        return money.slice(0, 3).concat(`.${money.slice(6)}.${money.slice(6)}`);
    }
    else if (length_money === 10) {
        return money.slice(0, 1).concat(`.${money.slice(1, 4)}.${money.slice(4, 7)}.${money.slice(7)}`);
    }
    else if (length_money === 11) {
        return money.slice(0, 2).concat(`.${money.slice(2, 5)}.${money.slice(5, 8)}.${money.slice(8)}`);
    }
    else if(length_money === 4){
        return money.slice(0, 1).concat(`.${money.slice(1)}`);
    }
    else {
        return money.slice(0, 3).concat(`.${money.slice(3, 6)}.${money.slice(6, 9)}.${money.slice(9)}`);
    }
}

