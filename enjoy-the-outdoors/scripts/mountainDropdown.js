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


//     function displayMountains() {
//     const mountainList = document.getElementById('mountainList');
//     mountainList.innerHTML = '';

//     mountainsArray.forEach(mountain => {
//       const card = document.createElement('div');
//       card.className = 'card mb-4';

//       card.innerHTML = `
//         <img src="${mountain.img}" class="card-img-top" alt="${mountain.name}">
//         <div class="card-body">
//           <h5 class="card-title">${mountain.name}</h5>
//           <p class="card-text">${mountain.elevation}</p>
//           <p class="card-text">${mountain.effort}</p>
//           <p class="card-text">${mountain.desc}</p>
//           <p class="card-text">${mountain.coords}</p>
//         </div>
//       `;

//       mountainList.appendChild(card);
//     });
//   }
//   document.getElementById('mountainDropdown').addEventListener('change', (event) => {
//     const selectedmountain = event.target.value;
//     const filteredmountain = selectedmountain === 'all'
//       ? mountainsArray
//       : mountainsArray.filter(mountain => mountain.name === selectedmountain);
//     displayCourses(filteredmountain);
//   });
