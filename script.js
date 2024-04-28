// Chemins des liens des projets
var projet1 = "projet_dvf.html";
var projet2 = "projet_aqua.html";
var projet3 = "projet_salle.html";

document.addEventListener("DOMContentLoaded", function() {
    // Chargement du Header
    var xhrHeader = new XMLHttpRequest();
    xhrHeader.onreadystatechange = function() {
        if (xhrHeader.readyState === XMLHttpRequest.DONE) {
            if (xhrHeader.status === 200) {
                // Remplacez les marqueurs spéciaux par les valeurs des variables
                var headerContent = xhrHeader.responseText;
                headerContent = headerContent.replace('{{projet1}}', projet1);
                headerContent = headerContent.replace('{{projet2}}', projet2);
                headerContent = headerContent.replace('{{projet3}}', projet3);
                
                document.getElementById("header").innerHTML = headerContent;
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

    var items = document.querySelectorAll(".projet_chapitre_section");

    items.forEach(function(item) {
        item.addEventListener("click", function() {
            this.classList.toggle("active");
        });
    });
});

// Modification des liens dans le fichier HTML
document.getElementById("lien_projet1").href = projet1;
document.getElementById("lien_projet2").href = projet2;
document.getElementById("lien_projet3").href = projet3;
document.getElementById("lien_img_projet1").href = projet1;
document.getElementById("lien_img_projet2").href = projet2;
document.getElementById("lien_img_projet3").href = projet3;
