var rIndex,
    table = document.getElementById("table");

// check the empty input
function checkEmptyInput() {
    var isEmpty = false,
        Name = document.getElementById("Name").value,
        Start = document.getElementById("Start").value,
        End = document.getElementById("End").value;

    if (Name === "") {
        alert("Shift Name Connot Be Empty");
        isEmpty = true;
    }
    else if (Start === "") {
        alert("Shift Start Time Connot Be Empty");
        isEmpty = true;
    }
    else if (End === "") {
        alert("Shift End Time cannot Be Empty");
        isEmpty = true;
    }
    return isEmpty;
}

// add Row
function addHtmlTableRow() {
    // get the table by id
    // create a new row and cells
    // get value from input text
    // set the values into row cell's
    if (!checkEmptyInput()) {
        var newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            Name = document.getElementById("Name").value,
            Start = document.getElementById("Start").value,
            End = document.getElementById("End").value;

        cell1.innerHTML = Name;
        cell2.innerHTML = Start;
        cell3.innerHTML = End;
        // call the function to set the event to the new row
        selectedRowToInput();
    }
}

// display selected row data into input text
function selectedRowToInput() {

    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            // get the seected row index
            rIndex = this.rowIndex;
            document.getElementById("Name").value = this.cells[0].innerHTML;
            document.getElementById("Start").value = this.cells[1].innerHTML;
            document.getElementById("End").value = this.cells[2].innerHTML;
        };
    }
}
selectedRowToInput();

function editHtmlTableSelectedRow() {
    var fname = document.getElementById("Name").value,
        lname = document.getElementById("Start").value,
        age = document.getElementById("End").value;
    if (!checkEmptyInput()) {
        table.rows[rIndex].cells[0].innerHTML = fname;
        table.rows[rIndex].cells[1].innerHTML = lname;
        table.rows[rIndex].cells[2].innerHTML = age;
    }
}

function removeSelectedRow() {
    table.deleteRow(rIndex);
    // clear input text
    document.getElementById("Name").value = "";
    document.getElementById("Start").value = "";
    document.getElementById("End").value = "";
}

//Event listener
function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());

    value.names = data.getAll("Name");
    value.starts = data.getAll("Start");
    value.ends = data.getAll("End");

    console.log({ value });
}

//const data = JSON.stringify(mainpackage);

const form = document.querySelector(".tab");
form.addEventListener("submit", handleSubmit);

  // module.exports(mainpackage);

  