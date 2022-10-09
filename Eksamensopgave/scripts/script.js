function getCurrentPage(){
    const urlParams = new URLSearchParams(location.search);
    let page = '';
    if(urlParams.has("page")) {
        page = urlParams.get("page");
    } else {
        page = "timetable";
    }
    return page;
}


