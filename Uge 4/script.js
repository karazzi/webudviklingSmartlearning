var cols = 8;
var rows = 5;
var colors = ["red", "blue", "yellow", "green"];
var colorCounters = [0, 0, 0, 0];
var colorIndex = 0;

function init() {
    for(var row = 0; row < rows; row++) {
        //Først bygges et table-row element
        let rowElement = document.createElement("tr");
        //Det maksimale antal af samme farve er 2 per række (row starter på 0)
        let maxCount = (row + 1) * 2;
        for(var col = 0; col < cols; col++) {
            //Dernest bygges et table field, td, element med et tilfældigt tal mellem 0 og 9
            let randomNumber = Math.floor(Math.random() * 10);
            let element = document.createElement("td");
            element.innerHTML = randomNumber;

            //Der må kun være 2 af hver farve i hver række
            //Vi starter med at finde en tilfældig farve baseret på listen af tilladte farver
            colorIndex = Math.floor(Math.random() * colors.length);

            //Hvis vi har ramt en farve, der allerede har nået sit maksimum, vælger vi en ny tilfældig farve 
            while(colorCounters[colorIndex] >= maxCount) {
                colorIndex = Math.floor(Math.random() * colors.length);
            }
            colorCounters[colorIndex]++;
            //Farven styres via CSS klasser
            element.classList.add(colors[colorIndex]);
            
            //Tilføjer klasse til at styre størrelsen på cellerne
            element.classList.add("code-field");

            //Cellen tilføjes vores rækkeelement
            rowElement.appendChild(element);
        }
        //Rækken tilføjes til tbody, #myTable
        document.getElementById("myTable").appendChild(rowElement);
    }
}