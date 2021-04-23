let refreshNowBtn = document.getElementById("refreshNow");
refreshNowBtn.addEventListener("click", function(){
    GetBooking();
});

function GetBooking(){
    let url = 'https://api.sheety.co/5cf7d326628fb1e6b1944ef9f71fa9eb/yuyuchoc/bookingitems';
    fetch(url)
    .then((response) => response.json())
    .then(json => {

        let bookingDetailsList = document.getElementById("bookingDetailsList");
        let bookingIds = [];

        //clear the table rows 
        for(let k = bookingDetailsList.rows.length-1; k > 0; k-- ){
            bookingDetailsList.deleteRow(k);
        }

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

        for (let j = 0; j<bookingIds.length; j++){
            let el = document.getElementById(bookingIds[j]);
            el.addEventListener("click", function(){
                let theId = bookingIds[j].replace("delete", "");
                DeleteBooking(theId);
            });
        }
    });

}

function DeleteBooking(id){
    let url = 'https://api.sheety.co/5cf7d326628fb1e6b1944ef9f71fa9eb/yuyuchoc/bookingitems' + id;
    fetch(url, {
        method: 'DELETE',
    })
        .then(()=>{
            alert("Record id" + id + "delete!");
            GetBooking();
        });
}