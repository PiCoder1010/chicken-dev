# Thêm sản phẩm vào giỏ hàng gồm các bước
  + Tìm các `button` của sản phẩm đó
  + Xử lý sự kiện `click` của các `button` đó
  + Lấy được 2 giá trị quan trọng của sản phẩm là `nameFood` và `moneyFood`
  + Viết hàm `addFoodInCart` sản phẩm vào giỏ hàng với 2 đối số là name và money

# Nguyên tắc hoặc động của hàm addFoodIncart
  + Khi người dùng `click` vào `button` để chọn sản phẩm thì số lượng món hàng sẽ được `tăng lên`
  + Hàm `plusCart` sẽ đảm bảo số lượng `tăng lên` khi người dùng `thêm món`
  + Sau khi số lượng được tăng khi người dùng thêm sản phẩm thì sẽ có 1 thông báo cho người dùng biết
  + Hàm `swall` sẽ đảm bảo việc thông báo cho người dùng biết đã thêm thành công món hàng
  + Tiếp theo tạo đối tượng `foodItem` chứa các thông tin của sản phẩm gồm `nameFood`, `moneyFood` và `quantity`
  + Để `check` sản phẩm đã có trong giỏ hàng hay chưa thì ta cần tạo` một mảng lưu tên các sản phẩm` - `nameFoodsInCart`
  + Bước đầu tiên thì ta get `nameFoodsInCart` từ `localstorage` nếu mảng` null` thì ta tiến hành thêm món 
  + Nếu ta get `nameFoodsInCart` khác` null` thì sẽ có 2 trường hợp sau
  + TH1: Mảng `nameFoodsInCart` khác `null` và sản phẩm được thêm vào chưa có trong `nameFoodsInCart` -> Thêm mới
  + TH2: Mảng `nameFoodsInCart` khác `null` và sản phẩm được thêm vào đã tồn tại trong `nameFoodsInCart` -> Tăng     `quantity`
