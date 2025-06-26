function openIframeModal() {
    // iframe src 설정
    document.getElementById('subscription-frame').src = './sub-purchase.html';

    // 모달 및 배경 표시
    document.getElementById('modal-overlay').style.display = 'block';
    document.getElementById('modal-iframe').style.display = 'block';
}

function closeIframeModal() {
    // iframe 초기화 (리소스 해제용)
    document.getElementById('subscription-frame').src = '';

    // 모달 및 배경 숨김
    document.getElementById('modal-overlay').style.display = 'none';
    document.getElementById('modal-iframe').style.display = 'none';
}

  const phoneInput = document.getElementById('phone');

  phoneInput.addEventListener('input', function (e) {
    let numbers = e.target.value.replace(/\D/g, '');

    if (numbers.length > 3 && numbers.length <= 7) {
      numbers = numbers.replace(/^(\d{3})(\d{1,4})$/, '$1-$2');
    } else if (numbers.length > 7) {
      numbers = numbers.replace(/^(\d{3})(\d{4})(\d{1,4})$/, '$1-$2-$3');
    }

    e.target.value = numbers;
  });