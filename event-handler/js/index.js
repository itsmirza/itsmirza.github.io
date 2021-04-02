function transformUppercase(_val){
    return _val.toUpperCase();
}

let elNamaPengguna = document.getElementById("namaPengguna"); // 1) Select element
elNamaPengguna.addEventListener("keyup", function(){
    elNamaPengguna = transformUppercase(elNamaPengguna.value);
});

function checkPassword(){
    
}