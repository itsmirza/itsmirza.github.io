let refreshNowBtn = document.getElementById("refreshNow");
refreshNowBtn.addEventListener("click", function(){
    //GetBooking();
});


    /*

function GetBooking(){

    let url = 'https://api.sheety.co/5cf7d326628fb1e6b1944ef9f71fa9eb/yuyuchoc/bookingitems';
    fetch(url)
    .then((response) => response.json())
    .then(json => {

        for(let i=0; i < json.)
        // Do something with the data
        console.log(json.bookingitems);
    });














    let url = 'https://api.sheety.co/5cf7d326628fb1e6b1944ef9f71fa9eb/yuyuchoc/bookingitems';
    fetch(url)
    .then((response) => response.json())
    .then(json => {

        let bookingDetailsList = document.getElementById("bookingDetailsList");
        let bookingIds = [];


        for(let i=0; i<json.bookingDetailsList.length;i++){
            let bName =json.bookingDetailsList[i].name;            
            let bEmail = json.bookingDetailsList[i].email;
            let bPhone =json.bookingDetailsList[i].phone;
            let bPackage = json.bookingDetailsList[i].package;
            let bRemarks =json.bookingDetailsList[i].remarks;
            let bId = json.bookingDetailsList[i].id;
            let btnId = "delete" + bId;

            let row = bookingDetailsList.insertRow(bookingDetailsList.rows.length);
            row.insertCell(0).innerHTML =bId;
            row.insertCell(1).innerHTML =bName;
            row.insertCell(2).innerHTML =bEmail;
            row.insertCell(3).innerHTML =bPhone;
            row.insertCell(4).innerHTML =bPackage;
            row.insertCell(5).innerHTML =bRemarks;
            row.insertCell(6).innerHTML ="<button id='" + btnId + "' class='btn btn-danger'>Delete</button>";

            bookingIds.push(btnId);
        }
    });

}*/
