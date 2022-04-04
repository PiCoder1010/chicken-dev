const headMenu = document.querySelectorAll('.types-menu > div');

const span1 = document.querySelector('.type-menu-1 > span');
const span2 = document.querySelector('.type-menu-2 > span');
const span3 = document.querySelector('.type-menu-3 > span');
const span4 = document.querySelector('.type-menu-4 > span');
const arrSpan = [span1, span2, span3, span4];



const bodyMenu1 = document.querySelector('.menu-body-1');
const bodyMenu2 = document.querySelector('.menu-body-2');
const bodyMenu3 = document.querySelector('.menu-body-3');
const bodyMenu4 = document.querySelector('.menu-body-4');
const arrBodyMenu = [bodyMenu1, bodyMenu2, bodyMenu3, bodyMenu4];

// Add class hide in arrBodyMenu
headMenu[0].style = 'background-color: red';
arrBodyMenu.forEach((self, index) => {
    if (index !== 0) {
        self.classList.add('hide');
        arrSpan[index].classList.add('hide');
    }
});
headMenu.forEach((type, typeIndex) => {
    type.addEventListener('click', () => {
        arrBodyMenu[typeIndex].classList.toggle('hide');
        arrSpan[typeIndex].classList.toggle('hide');
        headMenu.forEach((self, index) => {
            if (typeIndex === index) {
                self.style = 'background-color: red';
            }
            else {
                self.style = 'background-color: #840906';
            }
        });
        let bodyMenuRest = arrBodyMenu.filter((self, index) => {
            if (index !== typeIndex) {
                return self;
            }
        });
        let spanRest = arrSpan.filter((self, index) => {
            if (index !== typeIndex) {
                return self;
            }
        });
        bodyMenuRest.forEach((self) => {
            self.classList.add('hide');
        })
        spanRest.forEach((self) => {
            self.classList.add('hide');
        })
    });
})


var renderMenu = (elementNode, dataMenu) => {
    const parentMenu = elementNode.firstElementChild;
    parentMenu.innerHTML = '';
    dataMenu.forEach((self) => {
        parentMenu.innerHTML += `
            <div class="col-12 col-lg-4 col-md-6">
                <article class="chicken-item">
                    <div class="chicken-head">
                        <img src=${self["ck-img"]} alt="" class="ck-img">
                    </div>
                    <div class="chicken-body">
                        <h1 class="ck-name">${self["ck-name"]}</h1>
                        <p class="ck-des">${self["ck-des"][0]}</p>
                        <p class="ck-des">${self["ck-des"][1]}</p>   
                        <p class="ck-des">${self["ck-des"][2]}</p>
                        <div class="payment">
                            <p class="payment__money">${convertMoney(`${self["ck-money"]}`)} <sup>VNĐ</sup> </p>
                            <button class="btn btn--food">Mua liền</button>
                        </div>
                    </div>
                </article>
            </div>
        `;
    });
}

renderMenu(bodyMenu1, dataMenu1);
renderMenu(bodyMenu2, dataMenu2);
renderMenu(bodyMenu3, dataMenu3);
renderMenu(bodyMenu4, dataMenu4);

// Mảng các button menu1
const arrBtnFoodMenu1 = document.querySelectorAll('.menu-body-1 .btn--food');

// Mảng các button menu2
const arrBtnFoodMenu2 = document.querySelectorAll('.menu-body-2 .btn--food');

// Mảng các button menu3
const arrBtnFoodMenu3 = document.querySelectorAll('.menu-body-3 .btn--food');

// Mảng các button menu4
const arrBtnFoodMenu4 = document.querySelectorAll('.menu-body-4 .btn--food');

var addFood = (arrBtnFoodMenu, dataMenu) => {
    arrBtnFoodMenu.forEach((btnFood, index) => {
        btnFood.addEventListener('click', () => {
            let nameFood = dataMenu[index]["ck-name"];
            let moneyFood = dataMenu[index]["ck-money"];
            addFoodInCart(nameFood, moneyFood);
        });
    });    
}
addFood(arrBtnFoodMenu1, dataMenu1);
addFood(arrBtnFoodMenu2, dataMenu2);
addFood(arrBtnFoodMenu3, dataMenu3);
addFood(arrBtnFoodMenu4, dataMenu4);
