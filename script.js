document.addEventListener("DOMContentLoaded", function() {
    // Chargement du Header
    var xhrHeader = new XMLHttpRequest();
    xhrHeader.onreadystatechange = function() {
        if (xhrHeader.readyState === XMLHttpRequest.DONE) {
            if (xhrHeader.status === 200) {
                document.getElementById("header").innerHTML = xhrHeader.responseText;
            } else {
                console.error("Erreur de chargement du header : " + xhrHeader.status);
            }
        }
    };
    xhrHeader.open("GET", "header.html", true);
    xhrHeader.send();

    // Chargement du Footer
    var xhrFooter = new XMLHttpRequest();
    xhrFooter.onreadystatechange = function() {
        if (xhrFooter.readyState === XMLHttpRequest.DONE) {
            if (xhrFooter.status === 200) {
                document.getElementById("footer").innerHTML = xhrFooter.responseText;
            } else {
                console.error("Erreur de chargement du footer : " + xhrFooter.status);
            }
        }
    };
    xhrFooter.open("GET", "footer.html", true);
    xhrFooter.send();
});

document.addEventListener("DOMContentLoaded", function() {
    var items = document.querySelectorAll(".projet_chapitre_section");

    items.forEach(function(item) {
        item.addEventListener("click", function() {
            this.classList.toggle("active");
        });
    });
});