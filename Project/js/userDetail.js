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
        let userIds = [];

        for(let k = userDetails.rows.length-1; k > 0; k--){
            userDetails.deleteRow(k);
        }

        for(let i = 0 ; i <json.userComment.length; i++){
            let uName = json.userComment[i].name;
            let uSubject = json.userComment[i].subject;
            let uDetails = json.userComment[i].details;
            let uId = json.userComment[i].id;
            let btnId = "delete" + uId;

            let row = userDetails.insertRow(userDetails.rows.length);
            row.insertCell(0).innerHTML = uId;
            row.insertCell(1).innerHTML = uName;
            row.insertCell(2).innerHTML = uSubject;
            row.insertCell(3).innerHTML = uDetails;
            row.insertCell(4).innerHTML = "<button id='" + btnId + "' class='btn btn-danger'>Delete</button>";

            userIds.push(btnId);

        }

        for(let j = 0; j < userIds.length; j++){
            let ud = document.getElementById(userIds[j]);
            ud.addEventListener("click", function(){
                let theId = userIds[j].replace("delete", "");
                DeleteUser(theId);
            });
        }
        
    });
}

function DeleteUser(id){
    let url = 'https://api.sheety.co/5cf7d326628fb1e6b1944ef9f71fa9eb/yuyuchoc/userComment/2';
    fetch(url, {
    method: 'DELETE',
    })
    .then(() => {
        alert("Record id "+ id +" deleted!");
        GetUserDetails();
    });
}