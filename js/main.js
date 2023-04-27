window.onload = function () {
  //ロード画面_全体
  const load = document.getElementById('loading');
  load.classList.add('loaded');

  //ロード画面_%
  let count = 0;
  const countUp = () => {
    document.getElementById('percent').textContent = 'Now loading...  ' + (++count) + '%';
    console.log(count);
  }
  const intervalId = setInterval(() => {
    countUp();
    if (count > 99) {
      clearInterval(intervalId);
    }
  }, 50);
}

var img, txt;

function btn01() {
  img = document.getElementById("pickup_img");
  txt = document.getElementById("pickup_txt");
  img.src = "about/images/kekusun.png";
  txt.textContent = "けくすんだお。つぼから出られないお…。";
}

function btn10() {
  img = document.getElementById("pickup_img");
  txt = document.getElementById("pickup_txt");
  img.src = "about/images/jump.PNG";
  txt.textContent = "余命10秒のひんしきんぎょ。救いようがない。";
}