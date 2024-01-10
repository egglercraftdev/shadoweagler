// script.js

function checkPassword() {
    var enteredPassword = document.getElementById("passwordInput").value;
    var correctPassword = "123432134876528763997356772657216Shadow3"; // Buraya kendi belirlediğiniz şifreyi ekleyin

    if (enteredPassword === correctPassword) {
        document.getElementById("passwordSection").style.display = "none";
        document.getElementById("content").style.display = "block";

        // Şifre doğruysa istediğiniz HTML dosyasına yönlendirme yapabilirsiniz
        window.location.href = "shadow3.html";
    } else {
        alert("Wrong.");
    }
}
