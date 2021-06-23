const $btn = document.getElementById('btn');
const $num = document.getElementById('num');
const $result = document.getElementById('result');

function multiplication(input) {
  let result = '';
  for (let i = 1; i < 10; i++) {
    result += `<p>${input}*${i}=${i * input}</p>`;
  }
  return result;
}

$btn.addEventListener('click', (event) => {
  const input = parseInt(document.getElementById('num').value);
  if (Number.isNaN(input)) {
    alert('숫자 입력 해주세요!');
  } else {
    $result.innerHTML = multiplication($num.value);
  }
});
