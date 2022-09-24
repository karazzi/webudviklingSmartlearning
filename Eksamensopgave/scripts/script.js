function loadContent(page) {
    $("#mainContent").innerHTML = "";
    $("#mainContent").load("pages/"+page+".html");
}