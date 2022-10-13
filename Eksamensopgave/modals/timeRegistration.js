$(function() {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("timeRegistrationButton");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    var saveBtn = document.getElementById("saveRegistrationButton");

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
    modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }

    saveBtn.onclick = function() {
        let form = document.querySelector("#hourRegistrationForm");
        let data = new FormData(form);
        console.log(data);
        for(let entry of data){
            console.log(entry);
        }
    }

    //Datepicker til valg af dato til registrering
    $("#datepicker").datepicker({
        showOn: "button",
        buttonImage: "./img/calendar.gif",
        buttonImageOnly: true,
        buttonText: "Vælg dato",
        dateFormat: "dd/mm-yy"
    });
});
