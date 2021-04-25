let refreshNowBtn = document.getElementById("refreshNow");
refreshNowBtn.addEventListener("click", function(){
    GetBooking();
});


   

function GetBooking(){

    let url = 'https://api.sheety.co/5cf7d326628fb1e6b1944ef9f71fa9eb/yuyuchoc/bookingitems';
    fetch(url)
    .then((response) => response.json())
    .then(json => {

        let bookingDetails = document.getElementById("bookingDetails");

        for(let i=0; i < json.bookingitems.length; i++){
            let bName =json.bookingitems[i].name;            
            let bEmail = json.bookingitems[i].email;
            let bPhone =json.bookingitems[i].phone;
            let bPackage = json.bookingitems[i].package;
            let bRemarks =json.bookingitems[i].remarks;
            let bId = json.bookingitems[i].id;
            //let btnId = "delete" + bId;

            let row = bookingDetails.insertRow(bookingDetails.rows.length);
            row.insertCell(0).innerHTML = bId;
            row.insertCell(1).innerHTML = bName;
            row.insertCell(2).innerHTML = bEmail;
            row.insertCell(3).innerHTML = bPhone;
            row.insertCell(4).innerHTML = bPackage;
            row.insertCell(5).innerHTML = bRemarks;
            row.insertCell(6).innerHTML = "TBC";

        }
        
    });

}
