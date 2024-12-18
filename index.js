// Get reference to the tbody element in the HTML document
var table = document.getElementById("tbody");

/**
 * Fetches character data from the Rick and Morty API.
 * 
 * This function makes an asynchronous request to the Rick and Morty API to retrieve 
 * a list of characters and their details. It then returns the results of the API call.
 * 
 * @returns {Promise<Array>} A promise that resolves to an array of character objects.
 */
async function getData(){
    let response = await fetch('https://rickandmortyapi.com/api/character');  // Send GET request to API
    let data = await response.json();  // Parse the JSON response
    console.log(data.results);  // Log the results to the console (for debugging)

    return data.results;  // Return the array of character data
}

/**
 * Main function to draw the table with character data.
 * 
 * This function calls the getData() function to fetch character data from the API, 
 * sorts the array of characters by 'id' in ascending order, and then iterates 
 * over the sorted data to add rows to the HTML table.
 */
async function draw() {
    const array = await getData();  // Fetch the data from the API

    // Sort the array of characters by their 'id' in ascending order
    array.sort((a, b) => a.id - b.id);

    // Iterate through the sorted array and add each character's details to the table
    array.forEach(e => {
        addRow(e.id, e.name, e.status, e.gender);  // Call addRow for each character
    });
}

/**
 * Adds a new row to the table with character details.
 * 
 * This function creates a new table row and inserts four cells for the character's 
 * id, name, status, and gender. These cells are populated with the corresponding 
 * information and appended to the table.
 * 
 * @param {number} id - The character's unique identifier.
 * @param {string} name - The character's name.
 * @param {string} status - The character's current status (e.g., Alive, Dead).
 * @param {string} gender - The character's gender.
 */
function addRow(id, name, status, gender) {
    // Create a new table row and append it to the tbody
    var row = table.insertRow();  // Inserting at the end of the table by default

    // Insert new cells (<td> elements) into the row for the character's details
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    // Populate the cells with the character's information
    cell1.innerHTML = id;      // Set the first cell to the character's ID
    cell2.innerHTML = name;    // Set the second cell to the character's name
    cell3.innerHTML = status;  // Set the third cell to the character's status
    cell4.innerHTML = gender;  // Set the fourth cell to the character's gender
}
