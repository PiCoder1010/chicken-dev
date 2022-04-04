
// Slider
$(document).ready(function () {
    $('.slider-chicken-list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: "<button type='button' class='slick-prev pull-left '><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right '><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        // pauseOnFocus: false,
        pauseOnHover: true,
        speed: 500,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 641,
                settings: 'unslick'
            }
        ]
    });
});


// Render dữ liệu 
var renderDataHomePage = () => {
    const sliderParent = document.querySelector('.slider-chicken-list');
    sliderParent.innerHTML = '';
    dataHomePageRice.forEach((self) => {
        sliderParent.innerHTML += `
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
        `;
    });
}

// Render dữ liệu
var renderServicesHomePage = () => {
    const servicesParent = document.querySelector('.services-content');
    servicesParent.innerHTML = '';
    dataHomePageServices.forEach((self) => {
        servicesParent.innerHTML += `
            <div class="col-lg-6 col-12">
                <div class="trademark">
                    ${self["sv-icon"]}
                    <h1 class="trademark__title">${self["sv-title"]}</h1>
                    <p class="trademark__des">
                        ${self["sv-des"]}
                    </p>
                    <a href="trademark__link">
                        <button class="btn btn--trademark">Tìm hiểu ngay</button>
                    </a>
                </div>
            </div>
        `;
    })
}
renderDataHomePage();
renderServicesHomePage();

// Mảng các button
const arrBtnFood = document.querySelectorAll('.btn--food');

// Xử lý sự kiện khi bấm vào button food
arrBtnFood.forEach((self, index) => {
    self.addEventListener('click', () => {
        let nameFood = dataHomePageRice[index]["ck-name"];
        let moneyFood = dataHomePageRice[index]["ck-money"];
        addFoodInCart(nameFood, moneyFood);
    });
});

