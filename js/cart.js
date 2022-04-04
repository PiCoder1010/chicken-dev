
//---Form

// Get element input
const inputName = document.getElementById('input-name');
const inputPhone = document.getElementById('input-numberphone');
const inputDelivery = document.getElementById('input-delivery');
const inputContent = document.getElementById('input-content');
const orderForm = document.querySelector('.order-form');
const inputSelect = document.getElementById('select-location');



// Mảng tập hợp các thẻ input vừa lấy được
const arrInput = [inputName, inputPhone, inputDelivery, inputContent, inputSelect];

// Cho tất cả các thẻ input có sự kiện focus
arrInput.forEach((self) => {
    userFocus(self);
});

// Kiểm tra các thẻ input hợp lệ
inputDelivery.addEventListener('blur', checkDeliveryBlur);
inputName.addEventListener('blur', checkNameBlur);
inputPhone.addEventListener('blur', checkPhoneBlur);
inputSelect.addEventListener('blur', checkSelectBlur);
inputContent.addEventListener('blur', checkContentBlur);

// Xử lý sự kiện khi submit form
orderForm.addEventListener('submit', (e) => {
    let isValid = arrInput.every((self) => {
        return self.value !== '';
    });
    if (isValid) {
        // e.preventDefault();
        // swal("ĐẶT HÀNG THÀNH CÔNG", "CHÚNG TÔI SẼ GIAO NHANH NHẤT CÓ THỂ", "success");
        alert("Đặt hàng thành công");
    }
    else {
        e.preventDefault();
        checkDeliveryBlur();
        checkNameBlur();
        checkPhoneBlur();
        checkContentBlur();
        checkSelectBlur();
    }
})

//-----Cart
// Get thẻ tạm tính
const totalPayElement = document.querySelector('.total-pay');

// Get thẻ thông báo 
const backMenu = document.querySelector('.back-menu');

// get 'phí vận chuyển'
const transportFee = document.querySelector('.transport-fee');

//Nhận thẻ cha để render dữ liệu
const orderSee = document.querySelector('.order-see-again-food .infor-foods');

//Hàm chuyển đổi về tiền 
var getTransportFee = (value) => {
    if (value === 'Thành phố Long Xuyên(10.000 VNĐ)') {
        transportFee.innerHTML = 10000;
    }
    else if (value === 'Thị trấn Phú Hòa(9.000 VNĐ)') {
        transportFee.innerHTML = 9000;
    }
    else if (value === 'Thị xã Phước Long(40.000 VNĐ)') {
        transportFee.innerHTML = 40000;
    }
    else if (value === 'Nơi khác(50.000 VNĐ)') {
        transportFee.innerHTML = 50000;
    }
}

// Sự kiện click để đưa phí vận chuyển xuống bảng tính tiền
inputSelect.addEventListener('click', () => {
    const value = inputSelect.options[inputSelect.selectedIndex].text;
    getTransportFee(value);
    const youPayElement = document.querySelector('.you-pay');
    youPayElement.innerHTML = `${youPay()}<sup>VND</sup>`;

})

// Trả về số lượng sản phẩm có trong giỏ hàng
var getCartCount = () => {
    let value = JSON.parse(localStorage.getItem('cart-count'));
    return value;
}

// Trả về mảng chứa các tên món ăn
var getNameFoodsInLocal = () => {
    let value = JSON.parse(localStorage.getItem('name-foods'));
    return value;
}

// Trả về thông tin các món ăn dưới dạng object
var getInforFoodInLocal = (nameFood) => {
    let value = JSON.parse(localStorage.getItem(String(nameFood)));
    return value;
}

// Hàm kiểm tra nếu số lượng trong giỏ hàng bằng 0 thì yêu cầu người dùng quay lại trang thực đơn
backMenu.classList.add('hide');
var checkCartCount = () => {
    if (getCartCount() === 0) {
        backMenu.classList.remove('hide');
    }
}
checkCartCount();



// Hàm tính tạm tiền 
var pay = (money, quantity) => {
    return money * quantity;
}

// Hàm tính tiền người dùng phải thanh toán cho các món ăn
var totalPay = () => {
    var result = 0;
    getNameFoodsInLocal().forEach((nameFood) => {
        let value = getInforFoodInLocal(nameFood);
        result += pay(value.price, value.quantity);
    });
    return result;
}

// Hàm tính tiền người dùng phải thanh toán cho các món ăn + phí vận chyển
var youPay = () => {
    return totalPay() + Number(transportFee.innerText);
}

// Render các món ăn người dùng đã thêm vào giỏ hàng qua trang giỏ hàng
var renderOrderSee = () => {
    orderSee.innerHTML = '';
    let nameFoodsInLocal = getNameFoodsInLocal();
    nameFoodsInLocal.forEach((nameFood) => {
        let inforFoodInLocal = getInforFoodInLocal(nameFood);
        orderSee.innerHTML += `
            <tr>
                <td class="name-food">${inforFoodInLocal.name}</td>
                <td class="money-food"> ${inforFoodInLocal.price}<sup>VND</sup></td>
                <td class="btn-change">
                    <button class="btn btn--food--remove">
                        <p>-</p>
                    </button>
                    <span class="quantity-food">${inforFoodInLocal.quantity}</span>
                    <button class="btn btn--food--add">
                        <p>+</p>
                    </button>
                </td>
                <td>${pay(inforFoodInLocal.price, inforFoodInLocal.quantity)}<sup>VND</sup></td>
                <td class="delete-food">
                    <button class="btn btn--food--delete">
                        <span>X</span>
                    </button>
                </td>
            </tr>`;
    });
}

//Gọi hàm render
renderOrderSee();

//Sau khi hàm totalpay đã tính xong thì show ra html
totalPayElement.innerHTML = `${totalPay()}<sup>VND</sup>`;


//Hàm xóa tất số lượng của sản phẩm
var deleteFoodInCart = (index) => {

    //Lấy nameFood
    let nameFoodsInLocal = getNameFoodsInLocal();
    let nameFood = nameFoodsInLocal[index];

    // Cập nhật lại số lượng sản phẩm khi khách hàng vừa xóa
    let inforFoodInLocal = getInforFoodInLocal(nameFood);
    let oldQuantityFoodInLocal = inforFoodInLocal.quantity;
    let newQuantity = getCartCount() - oldQuantityFoodInLocal;
    localStorage.setItem('cart-count', JSON.stringify(newQuantity));
    countNode.textContent = newQuantity;

    // Xóa sản phẩm
    localStorage.removeItem(nameFood);

    // Xóa tên sản phẩm trong nameFoodsInLocal
    nameFoodsInLocal.splice(nameFoodsInLocal.indexOf(nameFood), 1);
    localStorage.setItem('name-foods', JSON.stringify(nameFoodsInLocal));

    //
    location.reload();

}
// Mảng các nút xóa toàn bộ số lượng sản phẩm
const arrBtnFoodDelete = [...document.querySelectorAll('.btn--food--delete')];


//Xử lý sự kiện khi người dùng ấn xóa
arrBtnFoodDelete.forEach((btnFoodDelete, index) => {

    btnFoodDelete.addEventListener('click', (e) => {
        //  Xóa nội dung ở HTML
        e.target.parentNode.parentNode.parentNode.remove();

        // Hàm xóa sản phẩm trong local
        deleteFoodInCart(index);
    });
});

// Hàm trừ đi số lượng của sản phẩm - trừ đi 1
var removeFoodInCart = (index) => {

    //Lấy nameFood
    let nameFoodsInLocal = getNameFoodsInLocal();
    let nameFood = nameFoodsInLocal[index];

    var inforFoodInLocal = getInforFoodInLocal(nameFood);
    if (inforFoodInLocal.quantity >= 2) {
        inforFoodInLocal.quantity--;
        localStorage.setItem(nameFood, JSON.stringify(inforFoodInLocal));
        let cartCount = getCartCount() - 1;
        localStorage.setItem('cart-count', JSON.stringify(cartCount));
    }
    else {
        deleteFoodInCart(index);
    }
    location.reload();
}

// Hàm cộng số lượng của sản phẩm - cộng thêm 1
var plusFoodInCart = (index) => {
    //Lấy nameFood
    let nameFoodsInLocal = getNameFoodsInLocal();
    let nameFood = nameFoodsInLocal[index];
    var inforFoodInLocal = getInforFoodInLocal(nameFood);
    inforFoodInLocal.quantity++;
    localStorage.setItem(nameFood, JSON.stringify(inforFoodInLocal));
    let cartCount = getCartCount() + 1;
    localStorage.setItem('cart-count', JSON.stringify(cartCount));
    location.reload();
}


// Mảng các nút trừ số lượng sản phẩm
const arrBtnFoodRemove = [...document.querySelectorAll('.btn--food--remove')];
arrBtnFoodRemove.forEach((btnFoodRemove, index) => {
    btnFoodRemove.addEventListener('click', () => {
        removeFoodInCart(index);
    });
});

// Mảng các nút cộng số lượng sản phẩm
const arrBtnFoodAdd = document.querySelectorAll('.btn--food--add');
arrBtnFoodAdd.forEach((btnFoodAdd, index) => {
    btnFoodAdd.addEventListener('click', () => {
        plusFoodInCart(index);
    });
})


