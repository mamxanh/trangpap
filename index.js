const PP=document.querySelector.bind(document),lucky=document.querySelector(".lucky-img"),modal=document.querySelector(".modal"),voucherF=document.querySelector(".form-voucher"),btn=document.querySelector(".btn"),oke=document.querySelector(".check-ok"),alert=document.querySelector(".check-alert"),nameF=document.querySelector("#nameField"),phoneF=document.querySelector("#phoneField");let nameA=$("#nameField").val(),email=$("#phoneField").val(),mess=$("#placeField").val(),voucher=$("#voucherField").val();lucky.addEventListener("click",function(){nameF.value="",phoneF.value="",setTimeout(function(){modal.classList.add("on")},4700),lucky.style.transition="4s ease-out";let a=Math.floor(99*Math.random());if(console.log(a),0<=a&&55>a)lucky.style.transform="rotate(1360deg)",voucherF.innerHTML=`Voucher 20% Tất cả các dịch vụ`,PP(".img_voucher").src="./img/a.jpg";else if(55<a&&87>a)lucky.style.transform="rotate(1960deg)",voucherF.innerHTML=`Chọn áo mưa hoặc mũ bảo hiểm`,PP(".img_voucher").src="./img/nonbaohiem.jpg";else if(87<a&&96>a)lucky.style.transform="rotate(1760deg)",voucherF.innerHTML=`500k áp dụng cho hóa đơn từ 1tr2`,PP(".img_voucher").src="./img/500k.jpg";else if(96<a&&100>a)lucky.style.transform="rotate(1460deg)",voucherF.innerHTML=`Voucher 50% Cho lần tiếp theo hóa đơn dưới 2 triệu`,PP(".img_voucher").src="./img/50-discount.png.jpg";else return}),btn.addEventListener("click",()=>nameF.value.length&&phoneF.value.length?void(lucky.style.transition="0s ease-out",lucky.style.transform="rotate(0deg)",nameA=$("#nameField").val(),email=$("#phoneField").val(),mess=$("#placeField").val(),voucher=voucherF.innerHTML,modal.classList.remove("on")):void alert("Vui l\xF2ng nh\u1EADp \u0111\u1EA7y \u0111\u1EE7 th\xF4ng tin"));function postToGoogle(){return $.ajax({url:"https://docs.google.com/forms/d/e/1FAIpQLScsV9jnX8kgBSfrgvUlQLoKDoWXDvwIlzglBGrCex9OSZkQuA/formResponse",data:{"entry.695244598":nameA,"entry.562493631":email,"entry.1517213794":mess,"entry.179170880":voucher},type:"POST",dataType:"jsonp",success:function(){},error:function(){$("#success-msg").show()}}),!1}
