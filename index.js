var table = document.getElementById("tbody");

async function getData(){
    let response = await fetch('https://rickandmortyapi.com/api/character');
    let data = await response.json();
    console.log(data.results);

    return data.results;
}

async function draw() {
    const array = await getData();

    // Sort the array by 'id' in ascending order
    array.sort((a, b) => a.id - b.id);

    // Now, iterate over the sorted array and add rows
    array.forEach(e => {
        addRow(e.id, e.name, e.status, e.gender);
    });
}

function addRow(id, name, status, gender) {
    // Create an empty <tr> element and add it to the table:
    var row = table.insertRow();  // Inserting at the end of the table by default

    // Insert new cells (<td> elements) at the 1st, 2nd, 3rd, and 4th positions of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    // Add some text to the new cells:
    cell1.innerHTML = id;
    cell2.innerHTML = name;
    cell3.innerHTML = status;
    cell4.innerHTML = gender;
}
