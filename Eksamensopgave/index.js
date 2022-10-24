$(document).ready(function(){
    let page = getCurrentPage();
    loadContent(page);
});

function getCurrentPage() {
    const urlParams = new URLSearchParams(location.search);
    let page = '';
    if (urlParams.has("page")) {
        page = urlParams.get("page");
    } else {
        page = "home";
    }
    return page;
}

function loadContent(page) {
    //Load header and footer
    $("#headerContent").load("header.html");
    dynamicallyLoadScript("scripts/header.js");
    $("#footerContent").load("footer.html");

    //Load main content and relevant scripts
    $("#mainContent").load(`pages/${page}.html`);

    switch(page) {
        case "timetable":
            dynamicallyLoadScript("scripts/timetable.js");
            dynamicallyLoadStyle("style/modal.css");
            break;
    }
}

function dynamicallyLoadScript(url) {
    var script = document.createElement("script");  // create a script DOM node
    script.src = url;  // set its src to the provided URL
   
    document.body.appendChild(script);
}

function dynamicallyLoadStyle(url) {
    var style = document.createElement("link");  // create a script DOM node
    style.rel = "stylesheet";
    style.href = url;  // set its src to the provided URL
   
    document.head.appendChild(style);
}