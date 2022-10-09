$(document).ready(function () {
    $("#modalContainer").load("./modals/timeRegistration.html");
    $("#coachFilter").on("change", function () {
        var filterValue = $(this).val().toLowerCase();
        $("#timeTableBody tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(filterValue) > -1);
        });
    });

    var table = $("#timeTable").DataTable({
        order: [[0, 'asc']],
        dom: 'rt<"bottom"ip><"clear">'
    });

    $('#saveButton').click(function () {
        var data = table.$('input').serialize();
        alert('The following data would have been submitted: \n\n' + data.substr(0, 120) + '...');
    });
});