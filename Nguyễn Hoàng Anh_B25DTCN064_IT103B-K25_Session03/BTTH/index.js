let password = "admin123";
let attempts = 0;
let isLogin = false;

while (attempts < 3) {
    let inputPassword = prompt("Nhập mật khẩu:");

    if (inputPassword === password) {
        console.log("Đăng nhập thành công!");
        isLogin = true;
        break;
    } else {
        attempts++;
    }
}

if (!isLogin) {
    console.log("Hệ thống bị khóa");
} else {
    let choice;
    do {
        choice = +prompt("Chọn chức năng\n1. Nhập lô sách mới\n2. Vẽ sơ đồ kệ sách\n3. Thoát\nNhập lựa chọn(1 - 3): ");

        switch (choice) {
            case 1:
                let numberOfBooks = +prompt("Bạn muốn nhập bao nhiêu cuốn sách?");
                let totalPrice = 0;

                for (let i = 1; i <= numberOfBooks; i++) {
                    let price = +prompt("Nhập giá tiền cuốn sách thứ " + i);

                    if (price <= 0) {
                        console.log("Giá tiền không hợp lệ, bỏ qua cuốn này!");
                        continue;
                    }

                    totalPrice += price;
                }

                console.log("Tổng giá trị nhập kho đợt này là: " + totalPrice + " VND");
                break;

            case 2:
                for (let area = 1; area <= 3; area++) {
                    for (let shelf = 1; shelf <= 5; shelf++) {

                        if (area === 2 && shelf === 3) {
                            console.log("Khu vực 2 - Kệ 3 (Đang sửa chữa)");
                            continue;
                        }

                        console.log("Khu vực " + area + " - Kệ " + shelf);
                    }
                }
                break;

            case 3:
                console.log("Hẹn gặp lại!");
                break;

            default:
                console.log("Lựa chọn không hợp lệ, vui lòng chọn lại!");
        }
    } while (choice !== 3)
}