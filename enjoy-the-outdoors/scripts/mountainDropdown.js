"use strict"
document.addEventListener("DOMContentLoaded", init);

function init() {
  populateDropdown(); 
  setupEventListeners()
  
}

function populateDropdown() {
    const dropdown = document.getElementById("mountainsDropdown"); 
    const fragment = document.createDocumentFragment(); 
  
    mountainsArray.forEach((mountains) => {
      const option = document.createElement("option");
      option.value = mountains.name; 
      option.textContent = `${mountains.name} `; 
      fragment.appendChild(option); 
    });
    dropdown.appendChild(fragment);
  }

  function setupEventListeners() {

    document.getElementById("mountainsDropdown").addEventListener("change", showSelectedMountain);
    document.getElementById("mountainsDropdown").addEventListener("change", showSelectedMountainChange);
    
}

  function showSelectedMountain() {

    document.getElementById("dropDownItem").textContent = document.getElementById("mountainsDropdown").value
  }


  function showSelectedMountainChange() {
    const dropdown = document.getElementById("mountainsDropdown"); 
    const selectedMountainName = dropdown.value; 
    const detailsArea = document.getElementById("dropDownItem");
  

    const selectedMountain = mountainsArray.find(
      (mountains) => mountains.name === selectedMountainName
    );
  
    if (selectedMountain) {
      
      detailsArea.innerHTML = `
            <img src="${selectedMountain.img}"><br>
              <strong>Name:</strong> ${selectedMountain.name}<br>
              <strong>Elevation:</strong> ${selectedMountain.elevation}<br>
              <strong>Effort:</strong> ${selectedMountain.effort}<br>
              <strong>Description:</strong> ${selectedMountain.desc}<br>
              

          `;
    } else {
     
      detailsArea.innerHTML = "No mountain selected.";
    }
  }

