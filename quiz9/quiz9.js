const $url = document.getElementById('url');
const $btn = document.getElementById('btn');
const $log = document.getElementById('log');

function setLog(text) {
  $log.innerHTML = text;
}

function fetchUrl() {
  const url = $url.value;
  if (!url) {
    window.alert('url를 입력하세요');
  } else {
    fetch(url)
      .then((res) => {
        res.text().then((text) => setLog(text));
      })
      .catch((e) => {
        $log.value = e;
      });
  }
}

function enterPress(event) {
  if (event.keyCode === 13) {
    fetchUrl();
    console.log('1');
  }
}
$url.addEventListener('keypress', enterPress);
$btn.addEventListener('click', fetchUrl);
