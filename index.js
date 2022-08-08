<<<<<<< HEAD
const PP = document.querySelector.bind(document);
const lucky = document.querySelector(".spin-lucky");
const modal = document.querySelector(".modal");
const voucherF = document.querySelector(".form-voucher");
const btn = document.querySelector(".btn");
const imgbtn = document.querySelector(".img_btn");
const oke = document.querySelector(".check-ok");
const alert = document.querySelector(".check-alert");
const nameF = document.querySelector("#nameField");
const phoneF = document.querySelector("#phoneField");
let nameA = $("#nameField").val();
let email = $("#phoneField").val();
let mess = $("#placeField").val();
let voucher = $("#voucherField").val();
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
    }
}
setInterval(() => {
    imgbtn.classList.add("zoom");
}, 200);
setInterval(() => {
    imgbtn.classList.remove("zoom");
}, 400);
imgbtn.addEventListener("click", function () {
    openFullscreen();
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
=======
const PP=document.querySelector.bind(document),lucky=document.querySelector(".spin-lucky"),modal=document.querySelector(".modal"),voucherF=document.querySelector(".form-voucher"),btn=document.querySelector(".btn"),imgbtn=document.querySelector(".img_btn"),oke=document.querySelector(".check-ok"),alert=document.querySelector(".check-alert"),nameF=document.querySelector("#nameField"),phoneF=document.querySelector("#phoneField");let nameA=$("#nameField").val(),email=$("#phoneField").val(),mess=$("#placeField").val(),voucher=$("#voucherField").val();var elem=document.documentElement;function openFullscreen(){elem.requestFullscreen?elem.requestFullscreen():elem.webkitRequestFullscreen?elem.webkitRequestFullscreen():elem.msRequestFullscreen&&elem.msRequestFullscreen()}setInterval(()=>{imgbtn.classList.add("zoom")},200),setInterval(()=>{imgbtn.classList.remove("zoom")},400),imgbtn.addEventListener("click",function(){openFullscreen(),nameF.value="",phoneF.value="",setTimeout(function(){PP(".firer").classList.remove("fire"),modal.classList.add("on")},6e3),lucky.style.transition="5.5s ease-out";let a=Math.floor(99*Math.random());if(console.log(a),0<=a&&58>a)lucky.style.transform="rotate(2580deg)",voucherF.innerHTML=`Voucher 20% Tất cả các dịch vụ`,PP(".img_voucher").src="./img/a.jpg";else if(58<a&&89>a)lucky.style.transform="rotate(2640deg)",voucherF.innerHTML=`Chọn áo mưa hoặc mũ bảo hiểm`,PP(".img_voucher").src="./img/nonbaohiem.jpg";else if(89<a&&96>a)lucky.style.transform="rotate(2520deg)",voucherF.innerHTML=`500k áp dụng cho hóa đơn từ 1tr2`,PP(".img_voucher").src="./img/500k.jpg";else if(96<a&&100>a)lucky.style.transform="rotate(2340deg)",voucherF.innerHTML=`Voucher 50% Cho lần tiếp theo hóa đơn dưới 2 triệu`,PP(".img_voucher").src="./img/50-discount.png.jpg";else return}),btn.addEventListener("click",()=>nameF.value.length&&phoneF.value.length?void(lucky.style.transition="0s ease-out",lucky.style.transform="rotate(0deg)",PP(".firer").classList.add("fire"),nameA=$("#nameField").val(),email=$("#phoneField").val(),mess=$("#placeField").val(),voucher=voucherF.innerHTML,modal.classList.remove("on")):void alert("Vui l\xF2ng nh\u1EADp \u0111\u1EA7y \u0111\u1EE7 th\xF4ng tin"));function postToGoogle(){return $.ajax({url:"https://docs.google.com/forms/d/e/1FAIpQLScsV9jnX8kgBSfrgvUlQLoKDoWXDvwIlzglBGrCex9OSZkQuA/formResponse",data:{"entry.695244598":nameA,"entry.562493631":email,"entry.1517213794":mess,"entry.179170880":voucher},type:"POST",dataType:"jsonp",success:function(){},error:function(){$("#success-msg").show()}}),!1}
>>>>>>> 07c7185d6ebf64b3bcfe3d3531a38d848470fb5e
