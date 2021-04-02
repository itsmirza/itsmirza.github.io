function transformUppercase(_val){
    return _val.toUpperCase();
}

let elNamaPengguna = document.getElementById("namaPengguna"); // 1) Select element
elNamaPengguna.addEventListener("keyup", function(){
    elNamaPengguna = transformUppercase(elNamaPengguna.value);
});

function checkPassword(){
    let elKataLaluan = document.getElementById("kataLaluan");
    let password_val = elKataLaluan.value;
    if(password_val.length > 5){
        alert("Password Check...Ok");
    } else {
        alert("Password too short!");
    }
}

let elKataLaluan = document.getElementById("kataLaluan");
elKataLaluan.onblur = checkPassword;