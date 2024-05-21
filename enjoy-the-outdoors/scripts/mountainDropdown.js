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

    document.getElementById("dropdown")
    .addEventListener("change", showSelectedMountain);
    
}

    function showSelectedMountain() {

    document.getElementById("dopdown").textContent = document.getElementById("mountainsDropdown").value
  }