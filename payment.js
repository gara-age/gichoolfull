// MM/YY 유효기간 포맷 자동 삽입
const expiryInput = document.getElementById('expiry');

if (expiryInput) {
  expiryInput.addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 3) {
      value = value.substring(0, 4);
      value = value.replace(/(\d{2})(\d{1,2})/, '$1/$2');
    }
    e.target.value = value;
  });
}

const cardInput = document.getElementById('card');

if (cardInput) {
  let rawDigits = '';

  cardInput.addEventListener('beforeinput', (e) => {
    // 백스페이스 시 처리
    if (e.inputType === 'deleteContentBackward') {
      rawDigits = rawDigits.slice(0, -1);
      return;
    }

    // 숫자만 입력 받도록 제한
    const newChar = e.data;
    if (!/\d/.test(newChar) || rawDigits.length >= 16) {
      e.preventDefault();
      return;
    }

    rawDigits += newChar;
    e.preventDefault(); // 기본 입력 막고 수동으로 마스킹 처리

    // 마스킹 및 공백 삽입
    let masked = '';
    for (let i = 0; i < rawDigits.length; i++) {
      if (i >= 4 && i < 12) {
        masked += '•';
      } else {
        masked += rawDigits[i];
      }

      if ((i + 1) % 4 === 0 && i !== 15 && i !== rawDigits.length - 1) {
        masked += ' ';
      }
    }

    cardInput.value = masked;
  });
}