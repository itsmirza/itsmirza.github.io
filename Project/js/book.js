let bookNowBtn = document.getElementById("bookNow");
bookNowBtn.addEventListener("click", function(){
    let userName = document.getElementById("userName");
    let userNameVal = userName.value;

    let userEmail = document.getElementById("userEmail");
    let userEmailVal = userEmail.value;

    let userPhone = document.getElementById("userPhone").value;

    let userPackageVal = document.getElementById("userPackage").value;
    let userRemarksVal = document.getElementById("userRemarks").value;

    BookNow(userNameVal, userEmailVal, userPhone, userPackageVal, userRemarksVal);

});

function BookNow(userName, userEmail, userPhone ,userPackage, userRemarks){
    let url = 'https://api.sheety.co/5cf7d326628fb1e6b1944ef9f71fa9eb/yuyuchoc/bookingitems';
    let body = {
        bookingitem: {
            name:userName,
            email:userEmail,
            phone:userPhone,
            package:userPackage,
            remarks:userRemarks
        }
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers:{
            "Content-Type": "application/json"
        }
    })
    .then((response) => response.json())
    .then(json => {
        alert("ID: " + json.bookingitem.id + ", " + json.bookingitem.name+ " Successfully added!")
    });

}