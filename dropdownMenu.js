document.addEventListener('DOMContentLoaded', function() {
  var dropdown = document.querySelector('.dropdown'); 
  dropdown.addEventListener('click', function() {
      var subMenu = document.querySelector('.subMenu');
      subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
  });

  // Modal elements
  var csvModal = document.getElementById("csvFile");
  var pythonModal = document.getElementById("pythonCodeFile"); 

  // Buttons to open the modals
  var csvBtn = document.getElementById("csvDownload");
  var pythonBtn = document.getElementById("pythonDownload"); 

  // Close buttons
  var csvClose = document.getElementsByClassName("close")[0];
  var pythonClose = document.getElementsByClassName("close2")[0];

  // Open the CSV modal
  csvBtn.onclick = function() {
      csvModal.style.display = "block";
  }

  // Close the CSV modal
  csvClose.onclick = function() {
      csvModal.style.display = "none";
  }

  // Open the Python modal
  pythonBtn.onclick = function() {
      pythonModal.style.display = "block";
  }

  // Close the Python modal
  pythonClose.onclick = function() {
      pythonModal.style.display = "none";
  }

  // Close modals when clicking outside of them
  window.onclick = function(event) {
      if (event.target == csvModal) {
          csvModal.style.display = "none";
      }
      if (event.target == pythonModal) {
          pythonModal.style.display = "none";
      }
  }
});
