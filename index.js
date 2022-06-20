const lucky = document.querySelector(".lucky-img");
const modal = document.querySelector(".modal");
const voucher = document.querySelector(".form-voucher");
const btn = document.querySelector(".btn");
const oke = document.querySelector(".check-ok");
const voucherField = document.querySelector("#voucherField");
let ok = localStorage.getItem("key");
let voucherNumber = localStorage.getItem("voucher");
if (ok) {
    oke.classList.add("ok");
    oke.innerHTML = `Bạn đã trúng Voucher ${voucherNumber} hãy đến địa điểm đã đăng kí để sử dụng`;
    lucky.style.pointerEvents = "none";
}
btn.addEventListener("click", () => {
    modal.classList.remove("on");
    oke.classList.add("ok");
    oke.innerHTML = `Bạn đã đăng ký voucher may mắn thành công!!!`;
});
lucky.addEventListener("click", function() {
    localStorage.setItem("key", "oke");
    setTimeout(function() {
        modal.classList.add("on");
    }, 4400);
    let deg = Math.floor(Math.random() * 4);
    switch (deg) {
        case 1:
            lucky.style.transform = "rotate(1360deg)";
            lucky.style.pointerEvents = "none";
            voucher.innerHTML = "Voucher 1";
            voucherField.value = "Voucher 1";
            localStorage.setItem("voucher", "1");

            break;
        case 2:
            lucky.style.transform = "rotate(1060deg)";
            lucky.style.pointerEvents = "none";
            voucher.innerHTML = "Voucher 2";
            voucherField.value = "Voucher 2";
            localStorage.setItem("voucher", "2");

            break;
        case 3:
            lucky.style.transform = "rotate(1720deg)";
            lucky.style.pointerEvents = "none";
            voucher.innerHTML = "Voucher 3";
            voucherField.value = "Voucher 3";
            localStorage.setItem("voucher", "3");

            break;
        case 4:
            lucky.style.transform = "rotate(1480deg)";
            lucky.style.pointerEvents = "none";
            voucher.innerHTML = "Voucher 4";
            voucherField.value = "Voucher 4";
            localStorage.setItem("voucher", "4");

            break;
        default:
    }
    swi;
});

function postToGoogle() {
    //Xử lý lấy dữ liệu các input vào biến tương ứng thông qua ID của input
    var name = $("#nameField").val();
    var email = $("#phoneField").val();
    var mess = $("#placeField").val();
    var voucher = $("#voucherField").val();
    //Đoạn giữa này có thể sử dụng để validate dữ liệu 1 lần nữa hoăc... bỏ qua nhé :D

    //Xử lý gửi dữ liệu lên form
    $.ajax({
        //Chỉ định đích gửi dữ liệu đến: là form response đã tạo ở trên
        url: "https://docs.google.com/forms/d/e/1FAIpQLScsV9jnX8kgBSfrgvUlQLoKDoWXDvwIlzglBGrCex9OSZkQuA/formResponse",
        //URL lấy từ link đã note ở trên nhé
        data: {
            //gán các giá trị tương ứng vào các Input name tương ứng đã lấy ở trên
            "entry.695244598": name,
            "entry.562493631": email,
            "entry.1517213794": mess,
            "entry.179170880": voucher,
        },
        type: "POST",
        dataType: "jsonp", //các bạn có thể để xml, nhưng khi bật console lên sẽ thấy báo đỏ lòm vì ko cho cross, còn cái này nó vẫn cảnh báo nhưng màu xám thôi, ko đỏ :v
        success: function(d) {}, //do đã bảo ở trên là nó ko cho cross đâu, nên khi gửi data xong ko trả về success được, ko cần điền cái này nhé
        error: function(x, y, z) {
            $("#success-msg").show(); //hiện ra cái mess báo thành công khi gửi xong
        },
    });

    return false;
}