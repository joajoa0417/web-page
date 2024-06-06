document.addEventListener('DOMContentLoaded', function() {
    // 모달 열기 
    function toggleModal(modalId) {
        var modal = document.getElementById(modalId);
        modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
    }

    // 네비게이션 바 목록 클릭
    document.getElementById('csvDownloadNav').addEventListener('click', function() {
        toggleModal('csvFile');
    });

    document.getElementById('pythonDownloadNav').addEventListener('click', function() {
        toggleModal('pythonCodeFile');
    });

    document.getElementById('businessNav').addEventListener('click', function() {
        toggleModal('business');
    });

    document.getElementById('dashboardNav').addEventListener('click', function() {
        toggleModal('dashboard');
    });

    document.getElementById('teamNav').addEventListener('click', function() {
        toggleModal('team');
    });

    // 닫기 버튼 구현
    var closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var modal = this.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    // 모달 외 클릭 시 모달 닫힘
    window.addEventListener('click', function(event) {
        var modals = document.querySelectorAll('.modal');
        modals.forEach(function(modal) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});
