let refreshNowBtn = document.getElementById("refreshNow");
refreshNowBtn.addEventListener("click", function(){
    GetBooking();
});

function GetBooking(){
    let url = 'https://api.sheety.co/5cf7d326628fb1e6b1944ef9f71fa9eb/tableapp/sheet1';
    fetch(url)
    .then((response) => response.json())
    .then(json => {

        let bookingNameList = document.getElementById("bookingNameList");

        for(let i=0; i<json.bookingitem.length;i++){
            let gName =json.bookingitem[i].name;
            let gEmail = json.bookingitem[i].emal;
            let gPax = json.bookingitem[i].pax;
            let gRemarks =json.bookingitem[i].remarks;
            let gId = json.bookingitem[i].id;

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