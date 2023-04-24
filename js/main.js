window.onload = function () {
  //ロード画面_全体
  const load = document.getElementById('loading');
  load.classList.add('loaded');

  //ロード画面_%
  let count = 0;
  const countUp = () =>{
    document.getElementById('percent').textContent = 'Now loading...  ' + (++count)+'%';
    console.log(count);
  }
  const intervalId = setInterval(() =>{
    countUp();
    if(count > 99){
      clearInterval(intervalId);
    }}, 50);
}