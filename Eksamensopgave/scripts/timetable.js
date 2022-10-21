$(document).ready(function () {
    loadTableData();
    loadTrainerDropdown();

    $("#modalContainer").load("./modals/timeRegistration.html");

    $("#coachFilter").on("change", function () {
        var filterValue = $(this).val().toLowerCase();
        $("#timeTableBody tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(filterValue) > -1);
        });
    });
});

function loadTableData() {
    let tableBody = document.getElementById("timeTableBody");

    let counter = 0;
    fetch("./data/registrations.json")
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            json.forEach(object => {
                counter++;
                let checked = "";
                let disabled = "";
                if (object.paid) {
                    checked = "checked";
                    disabled = "disabled";
                }

                let tr = document.createElement("tr");
                tr.innerHTML = `
                <th style="display: none;"><input type="text" value="${object.id}" name="timeId-${counter}"></th>
                <th scope="row">${object.date}</th>
                <td>${object.trainer}</td>
                <td>${object.hours} timer</td>
                <td><input type="checkbox" name="udbetalt-${counter}" ${checked} ${disabled}></td>
                `;
                tableBody.appendChild(tr);
            });

            var table = $("#timeTable").DataTable({
                order: [[0, 'asc']],
                dom: 'rt<"bottom"ip><"clear">'
            });
            $('#saveButton').click(function () {
                var data = table.$('input').serialize();
                alert('The following data would have been submitted: \n\n' + data);
            });
        });
}

function loadTrainerDropdown() {
    fetch("./data/trainers.json")
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            let dropdown = document.getElementById("coachFilter");
            json.forEach(object => {
                let option = document.createElement("option");
                option.value = object.name;
                option.innerHTML = object.name;
                dropdown.appendChild(option);
            });
        });
}

