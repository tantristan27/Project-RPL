function notif(){
    alert("Curhatan Kamu Berhasil Disimpan");
}

const backButton = document.getElementById("back-to-home");


backButton.addEventListener("click", function() {

  window.location.href='index.html';
});