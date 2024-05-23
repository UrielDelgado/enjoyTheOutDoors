
"use strict"

const dropdown = document.getElementById('dropdown');
const dropdownLabel = document.getElementById('dropdownLabel');
const searchByLocation = document.getElementById('searchByLocation');
const searchByParkType = document.getElementById('searchByParkType');
const info = document.getElementById('info');

function populateStates() {
    dropdownLabel.textContent = 'Choose State:';
    dropdown.innerHTML = '';
    nationalParksArray.forEach(state => {
        const option = document.createElement('option');
        option.textContent = state.State; // Assuming 'State' is the key for state names
        dropdown.appendChild(option);
    });
}

function populateParkTypes() {
    dropdownLabel.textContent = 'Choose Park Type:';
    dropdown.innerHTML = '';
    // Assuming parkTypesArray is defined somewhere in your code
    parkTypesArray.forEach(type => {
        const option = document.createElement('option');
        option.textContent = type;
        dropdown.appendChild(option);
    });
}

populateStates();

searchByLocation.addEventListener('change', function() {
    if (this.checked) {
        populateStates();
    }
});

searchByParkType.addEventListener('change', function() {
    if (this.checked) {
        populateParkTypes();
    }
});

dropdown.addEventListener('change', updateDropdown);

function updateDropdown(){
    getParks(dropdown.value);
}

function getParks(selectedItem){
    info.innerHTML = ""; // Clear previous park info
    nationalParksArray.forEach(item => {
        if(searchByLocation.checked){
            if(item["State"] === selectedItem){
                parkTemplate(item);
            }
        } else if(searchByParkType.checked){
            // Not sure what you want to do here since parkTypesArray is not defined
            // You might need to adjust this part
            selectedItem = selectedItem.split(" ").pop();
            if(item["LocationName"].split(" ").includes(selectedItem)){
                parkTemplate(item);
            }
        }
    });
}

function parkTemplate(park){
    let tableRow = `
    <tr>
        <th scope="row" class="text-center">${park.LocationID}</th>
        <td class="text-center">${park.LocationName}</td>
        <td class="text-center">${park.Address}</td>
        <td class="text-center">${park.Phone}</td>
        <td class="text-center">${park.Visit || ''}</td>
    </tr>`;
    info.innerHTML += tableRow;
}


