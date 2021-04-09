let refreshNowBtn = document.getElementById("refreshNow");
refreshNowBtn.addEventListener("click", function(){
    GetBooking();
});

function GetBooking(){
    let url = 'https://api.sheety.co/5cf7d326628fb1e6b1944ef9f71fa9eb/tableapp/bookingitems';
    fetch(url)
    .then((response) => response.json())
    .then(json => {

        let bookingNameList = document.getElementById("bookingNameList");

        //clear the table rows
        for(let k = bookingNameList.rows.length-1; k > 0; k-- ){
            bookingNameList.deleteRow(k);
        }

        for(let i=0; i<json.bookingitems.length;i++){
            let gName =json.bookingitems[i].name;
            let gEmail = json.bookingitems[i].emal;
            let gPax = json.bookingitems[i].pax;
            let gRemarks =json.bookingitems[i].remarks;
            let gId = json.bookingitems[i].id;

            let row = bookingNameList.insertRow(bookingNameList.rows.length);
            row.insertCall(0).innerHTML =gId;
            row.insertCall(1).innerHTML =gName;
            row.insertCall(2).innerHTML =gEmail;
            row.insertCall(3).innerHTML =gPax;
            row.insertCall(4).innerHTML =gRemarks;
            row.insertCall(5).innerHTML ="TBC";
        }
    });
}