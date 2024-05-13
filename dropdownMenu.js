document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropdown'); 
    dropdown.addEventListener('click', function() {
        var subMenu = document.querySelector('.subMenu');
        subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
    });
});

var modal = document.getElementById("csvFile");
var btn = document.getElementById("csvDownload");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

