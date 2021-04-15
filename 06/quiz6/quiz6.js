const $btn = document.getElementById("btn");
const $num = document.getElementById("num");
const $result = document.getElementById("result");

function multiplication(input) {
    let result = "";
    for (var i = 1; i < 10; i++) {
        result += `<p>${input}*${i}=${i * input}</p>`;
    }
    return result;
}

$btn.addEventListener('click', (event) => {
    if ($num.value === "") {
        alert("숫자 입력 해주세요!");
    } else {
        $result.innerHTML = multiplication($num.value)
    }

})