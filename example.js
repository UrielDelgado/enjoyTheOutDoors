document.addEventListener("DOMContentLoaded", init);

function init() {
  populateDropdown(); 
  setupEventListeners();
}

function populateDropdown() {
  const dropdown = document.getElementById("mountainsDropdown"); 
  const fragment = document.createDocumentFragment(); 

  mountainsArray.forEach((mountain) => {
    const option = document.createElement("option");
    option.value = mountain.name; 
    option.textContent = mountain.name; 
    fragment.appendChild(option); 
  });

  dropdown.appendChild(fragment);
}

function setupEventListeners() {
  document.getElementById("mountainsDropdown").addEventListener("change", showSelectedMountain);
}

function showSelectedMountain() {
  document.getElementById("dropdown").textContent = document.getElementById("mountainsDropdown").value;
}

// Example mountains array
const mountainsArray = [
  { name: "Everest" },
  { name: "K2" },
  { name: "Kangchenjunga" },
  // Add more mountains as needed
];
