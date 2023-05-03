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
  txt.innerHTML = "けくすん<br>けくすんだお。つぼから出られないお…。沼でもあるお。";
}

function btn02() {
  img = document.getElementById("pickup_img");
  txt = document.getElementById("pickup_txt");
  img.src = "about/images/kekusun.png";
  txt.innerHTML = "M A I ちゃん<br>V t u b e r 担当。激辛に取りつかれてしまい、日常的にエンタメ感覚で自己犠牲をする。";
}

function btn03() {
  img = document.getElementById("pickup_img");
  txt = document.getElementById("pickup_txt");
  img.src = "about/images/kekusun.png";
  txt.innerHTML = "パタパタ<br>全肯定担当。常に作業し有給で地球を守る恐竜。先日ポ◯モンになった。";
}

function btn04() {
  img = document.getElementById("pickup_img");
  txt = document.getElementById("pickup_txt");
  img.src = "about/images/kekusun.png";
  txt.innerHTML = "御曹司<br>外交担当。知り合いが多すぎて選挙に出ているんじゃないかと疑う。先日ポケモ◯にされかけた。";
}

function btn05() {
  img = document.getElementById("pickup_img");
  txt = document.getElementById("pickup_txt");
  img.src = "about/images/kekusun.png";
  txt.innerHTML = "コミコミ<br>ファンサ担当。ジンチを超える程よく食べてよく飲む。高校生の時からポケ◯ン。";
}

function btn06() {
  img = document.getElementById("pickup_img");
  txt = document.getElementById("pickup_txt");
  img.src = "about/images/kekusun.png";
  txt.innerHTML = "仙茶<br>宗教担当。一般的になんか苦ぇなと感じる食品を好む。みんなを引きずってプロジェクトを結成した張本人。";
}

function btn07() {
  img = document.getElementById("pickup_img");
  txt = document.getElementById("pickup_txt");
  img.src = "about/images/kekusun.png";
  txt.innerHTML = "エビ焼売<br>対先生担当。ネギを欲しているように見えるが、多分本当に欲しいのは原石。";
}

function btn08() {
  img = document.getElementById("pickup_img");
  txt = document.getElementById("pickup_txt");
  img.src = "about/images/kekusun.png";
  txt.innerHTML = "まゆ様<br>ﾈ ｷﾞ ﾎ ｽ ｨ の秘書担当。班活動が終わった時にはなぜか班員が従者になっている。";
}

function btn09() {
  img = document.getElementById("pickup_img");
  txt = document.getElementById("pickup_txt");
  img.src = "about/images/kekusun.png";
  txt.innerHTML = "ゆ<br>壁担当。一回へばりつくと百均のシールくらいはがれない。最近ツボ男になった。";
}

function btn10() {
  img = document.getElementById("pickup_img");
  txt = document.getElementById("pickup_txt");
  img.src = "about/images/jump.PNG";
  txt.innerHTML = "、<br>余命１０秒のひんしきんぎょ。救いようがない。名前を読んでみよう。";
}

function back(){
  document.getElementById('nav-btn').click();
}