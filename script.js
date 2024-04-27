document.addEventListener("DOMContentLoaded", function() {
    var items = document.querySelectorAll(".projet_chapitre_section");

    items.forEach(function(item) {
        item.addEventListener("click", function() {
            this.classList.toggle("active");
        });
    });
});
