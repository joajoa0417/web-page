document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropdown'); // '.dropdown-bar'를 '.dropdown'으로 변경
    dropdown.addEventListener('click', function() {
        var subMenu = document.querySelector('.subMenu');
        subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
    });
});

// 모달 가져오기
var modal = document.getElementById("csvFile");

// 모달을 여는 버튼
var btn = document.getElementById("csvDownload");

// 모달을 닫는 <span> 요소 (x 버튼)
var span = document.getElementsByClassName("close")[0];

// 사용자가 버튼을 클릭하면 모달 열기
btn.onclick = function() {
  modal.style.display = "block";
}

// 사용자가 (x) 버튼을 클릭하면 모달 닫기
span.onclick = function() {
  modal.style.display = "none";
}

// 사용자가 모달 외부를 클릭하면 모달 닫기
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

