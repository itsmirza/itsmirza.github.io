let refreshNowBtn = document.getElementById("refreshNow");
refreshNowBtn.addEventListener("click", function(){
    GetUserDetails();
});

function GetUserDetails(){

    let url = 'https://api.sheety.co/5cf7d326628fb1e6b1944ef9f71fa9eb/yuyuchoc/userComment';
    fetch(url)
    .then((response) => response.json())
    .then(json => {

        let userDetails = document.getElementById("userDetails");

        for(let i = 0 ; i <json.userComments.length; i++){
            let uName = json.userComments[i].name;
            let uSubject = json.userComments[i].subject;
            let uDetails = json.userComments[i].details;
            let uId = json.userComments[i].id;

            let row = userDetails.insertRow(userDetails.rows.length);
            row.insertCell(0).innerHTML = uId;
            row.insertCell(1).innerHTML = uName;
            row.insertCell(2).innerHTML = uSubject;
            row.insertCell(3).innerHTML = uDetails;
            row.insertCell(4).innerHTML = "TBC";

        }
        
    });
}