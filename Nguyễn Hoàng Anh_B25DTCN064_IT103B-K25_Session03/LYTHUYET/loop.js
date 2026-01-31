/*
    Vòng lặp
        1. for
            + dùng khi biết trước số lần lặp
            + gồm 3 phần: giá trị khởi tạo, điều kiện, bước nhảy
            + luồng hoạt động
                + đầu tiên lấy giá trị khởi tạo đi kiểm tra điều kiện
                    + nếu điều kiện sai => dùng vòng lặp
                    + nếu điều kiện đùng => thực hiện bước nhảy => kiểm tra điều kiện
            + for lồng

        2. while
            + dùng khi không biết trước số lần lặp
            + kiểm tra điều kiện nếu sai thì dừng

        3. do_while
            + dùng khi không biết trước số lần lặp và cần lặp ít nhất 1 lần
            + kiểm tra điều kiện nếu sai thì dừng
s
*/


// for (let i = 1; i < 3; i++) {
//     for (let j = 0; j < 4; j++) {
//         console.log('j', j);
//     }
// }


// for (let i = 1; i <= 10; i++) {
//     document.write(`Bảng cửu chương ${i}` + '<br>');
//     for (let j = 1; j <= 10; j++) {
//         document.write(`${i} X ${j} = ${i * j}` + '<br>');
//     }
// }


// let password = '12345';
// let count = 0;
// while (password != '12345') {
//     password = prompt('Mời nhập password');
//     count++;
//     if (count > 3){
//         break;
//     }
// }


// let choose;
// do {
//     choose = +prompt('Mời bạn nhập lựa chọn (1 hoặc 2, 0 để thoát)');
//     switch (choose) {
//         case 1:
//             console.log('Chọn chức năng 1');
//             break;
//         case 2:
//             console.log('Chọn chức năng 2');
//             break;
//         case 0:
//             console.log('Thoát chương trình');
//             break;
//         default:
//             console.log('Vui lòng nhập lại');
//     }
// } while (choose !== 0);