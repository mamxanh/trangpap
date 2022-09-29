const PP = document.querySelector.bind(document);
const lucky = document.querySelector(".spin-mid");
const modal = document.querySelector(".modal");
const voucherF = document.querySelector(".form-voucher");
const btn = document.querySelector(".btn");
const imgbtn = document.querySelector(".spin-lucky");
const oke = document.querySelector(".check-ok");
const thanhcong = document.querySelector(".thanhcong");
const alert = document.querySelector(".check-alert");
const nameF = document.querySelector("#nameField");
const phoneF = document.querySelector("#phoneField");
let nameA = $("#nameField").val();
let email = $("#phoneField").val();
let mess = $("#placeField").val();
let voucher = $("#voucherField").val();
var elem = document.documentElement;

/* View in fullscreen */
setInterval(() => {
    imgbtn.classList.add("zoom");
}, 200);
setInterval(() => {
    imgbtn.classList.remove("zoom");
}, 400);
imgbtn.addEventListener("click", function () {
    nameF.value = "";
    phoneF.value = "";
    setTimeout(function () {
        PP(".firer").classList.remove("fire");
        modal.classList.add("on");
    }, 6000);
    lucky.style.transition = "5.5s ease-out";
    let deg = Math.floor(Math.random() * 99);
    console.log(deg);
    if (deg >= 0 && deg < 25) {
        lucky.style.transform = "rotate(2580deg)";
        voucherF.innerHTML = `Ưu đãi 20% tháng 8`;
        PP(".img_voucher").src = "./img/a.jpg";
    } else if (deg > 26 && deg < 50) {
        lucky.style.transform = "rotate(2700deg)";
        voucherF.innerHTML = `Áo mưa - Nón Bảo Hiểm`;
        PP(".img_voucher").src = "./img/nonbaohiem.jpg";
    } else if (deg > 51 && deg < 75) {
        lucky.style.transform = "rotate(2460deg)";
        voucherF.innerHTML = `Tặng 800k cho hoá đơn 4tr`;
        PP(".img_voucher").src = "./img/500k.jpg";
    } else if (deg > 76 && deg < 100) {
        lucky.style.transform = "rotate(2400deg)";
        voucherF.innerHTML = `Tặng DV gội đầu thảo dược:`;
        PP(".img_voucher").src =
            "http://channel.mediacdn.vn/prupload/439/2018/02/img20180205164606046.jpg";
    } else {
        return;
    }
});
btn.addEventListener("click", () => {
    if (nameF.value.length && phoneF.value.length) {
        lucky.style.transition = "0s ease-out";
        lucky.style.transform = "rotate(0deg)";
        PP(".firer").classList.add("fire");
        nameA = $("#nameField").val();
        email = $("#phoneField").val();
        mess = $("#placeField").val();
        voucher = voucherF.innerHTML;
        modal.classList.remove("on");
        thanhcong.classList.add("go");
        setTimeout(function () {
            thanhcong.classList.remove("go");
        }, 1500);
    } else {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }
});

function postToGoogle() {
    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLScsV9jnX8kgBSfrgvUlQLoKDoWXDvwIlzglBGrCex9OSZkQuA/formResponse",

        data: {
            "entry.695244598": nameA,
            "entry.562493631": email,
            "entry.1517213794": mess,
            "entry.179170880": voucher,
        },
        type: "POST",
        dataType: "jsonp",
        success: function (d) {},
        error: function (x, y, z) {
            $("#success-msg").show();
        },
    });

    return false;
}
