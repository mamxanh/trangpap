const lucky = document.querySelector(".lucky-img");
const modal = document.querySelector(".modal");
const voucher = document.querySelector(".form-voucher");
const btn = document.querySelector(".btn");
const oke = document.querySelector(".check-ok");
const alert = document.querySelector(".check-alert");
const nameF = document.querySelector("#nameField");
const phoneF = document.querySelector("#phoneField");
const voucherField = document.querySelector("#voucherField");
let ok = localStorage.getItem("key");
let voucherNumber = localStorage.getItem("voucher");

if (voucherNumber && voucherNumber !== null) {
    alert.innerHTML = `Bạn đã trúng Voucher ${voucherNumber} hãy đến địa điểm đã đăng kí để sử dụng`;
    alert.style.transform = "translateX(0)";
    setTimeout(() => {
        alert.style.transform = "translateX(-150%)";
    }, 12200);
    lucky.style.pointerEvents = "none";
}

lucky.addEventListener("click", function() {
    setTimeout(function() {
        modal.classList.add("on");
    }, 4500);
    const handleVoucher = (deg) => {
        lucky.style.pointerEvents = "none";
        voucher.innerHTML = `Voucher ${deg}`;
        voucherField.value = `Voucher ${deg}`;
        localStorage.setItem("voucher", `${deg}`);
    };
    let deg = Math.floor(Math.random() * 4);
    switch (deg) {
        case 1:
            lucky.style.transform = "rotate(1360deg)";
            handleVoucher(deg);
            break;
        case 2:
            lucky.style.transform = "rotate(1060deg)";
            handleVoucher(deg);
            break;
        case 3:
            lucky.style.transform = "rotate(1720deg)";
            handleVoucher(deg);
            break;
        case 4:
            lucky.style.transform = "rotate(1480deg)";
            handleVoucher(deg);
            break;
        default:
    }
    swi;
});
btn.addEventListener("click", () => {
    if (nameF.value.length && phoneF.value.length) {
        localStorage.setItem("key", "oke");
        modal.classList.remove("on");
        alert.style.transform = "translateX(0)";
        setTimeout(() => {
            alert.style.transform = "translateX(-150%)";
        }, 4200);
    } else {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }
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