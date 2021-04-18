let commentBtn = document.getElementById("commBtn");
commentBtn.addEventListener("click", function(){
    let userNameVal = document.getElementById("userName").value;
    let userEmailVal = document.getElementById("userEmail").value;
    let userSubVal = document.getElementById("userSubject").value;
    let userDetailVal = document.getElementById("userDetails").value;

    UserComment(userNameVal, userEmailVal, userSubVal, userDetailVal);
});

function UserComment(userNameVal, userEmailVal, userSubVal, userDetailVal){
    let url = 'https://api.sheety.co/5cf7d326628fb1e6b1944ef9f71fa9eb/yuyuchoc/userComment';
    
    let body = {
        userComment: {
            name : userNameVal,
            email : userEmailVal,
            subject : userSubject,
            details : userDetails
        }
    }
    
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "content-Type" : "application/json"
        }
    })
    .then((response) => response.json())
    .then(json => {
        alert("Thank you "+ json.UserComment.name +" , for contact us.")
    });

}