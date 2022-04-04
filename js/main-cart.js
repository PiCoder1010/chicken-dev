

var plusCart = () => {
    cartCount++;
    countNode.textContent = cartCount;
    localStorage.setItem('cart-count', JSON.stringify(cartCount));
}

// Mảng thông tin các món ăn
var addFoodInCart = (nameFood, moneyFood) => {

    //Khi thêm món ăn thì số lượng trong giỏ hàng tăng lên
    plusCart(); 

    //Thông báo cho khách hàng biết đã thêm món ăn thành công
    swal("Giỏ hàng Chicken DEV cho biết", `Bạn vừa thêm ${nameFood} có giá ${ convertMoney(String(moneyFood))} VNĐ vào giỏ hàng (Nếu hàng có khuyến mãi thì đã được trừ)`, "success");

    // Đối tượng foodItem chưa các thông tin sẽ được thêm vào giỏ hàng như Tên, giá, số lượng
    let foodItem = {
        'name': nameFood,
        'price': moneyFood,
        'quantity': 1
    };

    /**
     * Nguyên tắc hoạt động
     * Lưu một mảng các tên món được khách hàng thêm vào giỏ hàng
     * Nếu khách hàng thêm lại món hàng đó thì tăng số lượng vì món đó đã có trong mảng các tên món
     * Nếu món đó chưa có thì thêm mới dựa vào đối tượng foodItem
     */

    // Kiểm tra mảng tên các món hàng(nameFoodsInCart) đã có trong localstorage hay chưa
    let nameFoodsInCart = JSON.parse(localStorage.getItem('name-foods'));

    // Nếu nameFoodsInCart rỗng thì tiến hành thêm món đầu tiên vào giỏ hàng
    if (nameFoodsInCart === null) {

        //Lưu tên món vào mảng các tên món 
        localStorage.setItem('name-foods', JSON.stringify([foodItem.name]));

        // Lưu thông tin món vừa được thêm vào
        localStorage.setItem(nameFood, JSON.stringify(foodItem));
    }
    /**
     * Nếu nameFoodsInCart không rỗng thì sẽ có các trường hợp sau
     * Trường hợp món hàng đã tồn tại trong nameFoodsInCart thì tiến hành tăng số lượng
     * Trường hợp món hàng chưa có thì tiến hành thêm mới 
     */
    else {
        let getNameFoodInCart = nameFoodsInCart.find((self) => {
            return self === nameFood;
        })
        if(getNameFoodInCart !== undefined){
            let getFoodItem = JSON.parse(localStorage.getItem(getNameFoodInCart));
            let newQuantity = getFoodItem.quantity;
            newQuantity+=1;
            getFoodItem.quantity = newQuantity;
            localStorage.setItem(nameFood, JSON.stringify(getFoodItem));
        }
        else{
            localStorage.setItem(nameFood, JSON.stringify(foodItem));
            nameFoodsInCart.push(nameFood);
            localStorage.setItem('name-foods', JSON.stringify(nameFoodsInCart));
        }
    }
}
