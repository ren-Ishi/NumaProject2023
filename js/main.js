//ページのソースを閲覧したところでお前らなんかにゃ分からんだろうになぁ

window.onload = function () {
  var tips = [
    "ピュー◯ランドにはパンダ服で行きましょう。",
    "Tipsが長すぎて読み終わる前にページが変更さr……",
    "こんなんになっちゃいました笑",
    "けくすんにはモデルがいるらしいですよ。",
    "Welcome to ようこそ！沼プロ2023へ！",
    "実は活動2年目です。2年半になる人もいます。",
    "まともな倫理観を期待しないでください。",
    "〜化物準備中〜",
    "パーターパタパタパーター ^ ^",
    "ピュー◯ランドにはパンダ服で行きましょう。",
    "チょこレゑトを与えるとブチギレる場合もあります。",
    "こんなんになっちゃいました笑",
    "【警告】エサを与えないでください！",
    "人ってこうして変態になっていくんやな",
    "ごめんなさい、ごめんなさい、ごめんなさいごめんなさいごめんなさいごめんなさい",
    "草々不一",
    "海老とか蟹は食べたい人だけが食べればいい",
    "◯◯ちゃんでお願いします。"
  ];
  var messageElement = document.getElementById("tipsMessage");
  var randomIndex = Math.floor(Math.random() * tips.length);
  var randomMessage = tips[randomIndex];
  messageElement.textContent = randomMessage;
  
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

  update();
}


var pageNumber = 0;
var aboutText = [
  "ある日、天啓を授かった。<br>「良いグループワークのきっかけとは、お互いの個性を知ることめぅ……」<br>我々はこのお告げを超重要ミッションと設定し、だれも彼もが“お互いを知る” ことができるアイテムを制作することを誓った。 では、“お互いを知る“とは何なのか。",
  "（※ここから真面目な話になります） 元来グループワークとは、素性の知らないどこぞの馬の骨共と肩を並べ、一人では解決できない諸問題に取り組むことである。 時に、馬の骨共はこう言うだろう。",
  "「なんやあの人、無口で何考えてるんかさっぱり分からへん」「困ったことが起きてるけど、みんなが気づいてないからいっか」「うちがやらなくても他の人が進めてくれてるからいいやろ」などと。同調圧力や無関心はグループワーク以前の話である。",
  "ヒトは繰り返し物事をこなし経験を積めば、いつしかできるようになる生き物である。人前でしゃべり続けていたらいつしか話すのが得意になった、バットを振り続けていたらボールのしんを捕らえた、など。",
  "グループワークも同じではないだろうか？本活動を始める前に、顔合わせ（アイスブレイク）をみっちりと積めば、メンバーの性格、趣味、特技、信頼度、バックグラウンド、共通項などそれら全てを総称した、“個性“を認知することができるはずである。",
  "同時に他人と接することで、ひとりぼっちでは絶対に認知できない自分の“個性“も浮き彫りになる。他人も自分も認知すること、これこそが“お互いを知る“である。<br>“個性“のデータを元にすれば、本活動中にあたふたしてもスムーズな解決に至り、本来考えるべきである“一人では解決できない諸問題“だけを強く認識できるはずである。",
  "そうして我々は、「一人では何もできない」「お互いを知るきっかけになる」をコンセプトに『広大な古代遺跡を冒険する』デジタルゲームの制作を開始した。これを見ている君たちに是非挑戦して欲しい。古代遺跡を巡って仲が深まることを期待している。"
];

function update(){
 var text = document.getElementById("aboutText");
 var page = document.getElementById("pageNumber");
 text.innerHTML = aboutText[pageNumber];
 page.innerHTML = "- 0 " + (pageNumber + 1) + " -";

 if(pageNumber == 0) document.getElementById("back").style.display = "none";

 else if(pageNumber == 6)document.getElementById("forward").style.display = "none";
 else {
  document.getElementById("back").style.display = "block";
  document.getElementById("forward").style.display = "block";
 }

}

function backBtn(){
  if(pageNumber != 0){
    pageNumber--;
  }
  update();
}

function forwardBtn(){
  if(pageNumber != 6){
    pageNumber++;
  }
  update();
}

var img, txt;

function btn01() {
  img = document.getElementById("pickup_img");
  txt = document.getElementById("pickup_txt");
  img.src = "about/images/members/numa.png";
  txt.innerHTML = "沼准教授<br>自称 J K （情報系研究者）担当。オンライン講義中に新品の i P h o n e が届いちゃった。";
}

function btn02() {
  img = document.getElementById("pickup_img");
  txt = document.getElementById("pickup_txt");
  img.src = "about/images/members/mai.png";
  txt.innerHTML = "M A I ちゃん<br>V t u b e r 担当。激辛に取りつかれてしまい、日常的にエンタメ感覚で自己犠牲をする。季節によって形態変化する。";
}

function btn03() {
  img = document.getElementById("pickup_img");
  txt = document.getElementById("pickup_txt");
  img.src = "about/images/members/patapata.png";
  txt.innerHTML = "パタパタ<br>全肯定担当。常に作業し有給で地球を守る恐竜。先日ポ◯モンになった。パタ？パタパ〜タ！…すぞ。";
}

function btn04() {
  img = document.getElementById("pickup_img");
  txt = document.getElementById("pickup_txt");
  img.src = "about/images/members/onzo.png";
  txt.innerHTML = "御曹司<br>外交担当。知り合いが多すぎて選挙に出ているんじゃないかと疑う。先日ポケモ◯にされかけた。違うんすよ！";
}

function btn05() {
  img = document.getElementById("pickup_img");
  txt = document.getElementById("pickup_txt");
  img.src = "about/images/members/komikomi.png";
  txt.innerHTML = "コミコミ<br>ファンサ担当。沼プロ過激派筆頭。ジンチを超える程よく食べてよくたしなむ。高校生の時からポケ◯ン。ｷ ﾓ ｯ !";
}

function btn06() {
  img = document.getElementById("pickup_img");
  txt = document.getElementById("pickup_txt");
  img.src = "about/images/members/sngk.png";
  txt.innerHTML = "仙茶<br>宗教担当。一般的になんか苦ぇなと感じる食品を好む。みんなを引きずってプロジェクトを結成した張本人。";
}

function btn07() {
  img = document.getElementById("pickup_img");
  txt = document.getElementById("pickup_txt");
  img.src = "about/images/members/ukigaichan.png";
  txt.innerHTML = "エビ焼売<br>対先生担当。ネギを欲しているように見えるが、多分本当に欲しいのは原石。とてもお淑やかで、すっっっごい優しい！";
}

function btn08() {
  img = document.getElementById("pickup_img");
  txt = document.getElementById("pickup_txt");
  img.src = "about/images/members/mayu.png";
  txt.innerHTML = "秘書<br>ﾈ ｷﾞ ﾎ ｽ ｨ の秘書担当。班活動が終わった時にはなぜか班員が従者になっている。もぐもぐもぐもぐ";
}

function btn09() {
  img = document.getElementById("pickup_img");
  txt = document.getElementById("pickup_txt");
  img.src = "about/images/members/yu.png";
  txt.innerHTML = "ゆ<br>壁担当。一回へばりつくと百均のシールくらいはがれない。最近ツボ男になった。金ツボ目指し彼は今日も登り続ける…。";
}

function btn10() {
  img = document.getElementById("pickup_img");
  txt = document.getElementById("pickup_txt");
  img.src = "about/images/members/oten.png";
  txt.innerHTML = "、<br>みんなのリーダー。歩かなくても忘れる。名前を読んでみよう。見せてくれるの？何がとは言いませんが。";
}

function back(){
  document.getElementById('nav-btn').click();
}