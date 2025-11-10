const h1Element = document.querySelector('h1');

// textContentメソッドは中身を変更する
// HTMLをJavaScriptで操作するときのオブジェクトをDOMと呼ぶ
// h1Element.textContent = '変更後タイトル';

// const btnEL = document.querySelector('button');
// // addEventListenerは第二引数にコールバック関数をとる。
// // その時に引数でe（イベント）が入る
// btnEL.addEventListener('click', (e) => {
//   console.dir(e);
//   console.log('hello');
// });

// イベントの種類
// ユーザーが特定の要素を選択したり、クリックしたり、カーソルを当てたりする
// ユーザーがキーボードのキーを押す
// ユーザーがブラウザーウィンドウをリサイズしたり閉じたりする
// ウェブページの読み込みが完了する
// フォームが送信される
// 動画が再生される、停止される、再生が終わる
// エラーが発生する

const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

// eはイベントオブジェクト、イベントが実行された時にイベントハンドラーに自動で渡される
function changeBackground(e) {
  console.log(e);
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener('click', changeBackground);
// イベントリスナーを消去する。大規模な開発で使える
// btn.removeEventListener("mouseout", changeBackground);

// keydownはキーボードが押された時のイベント
// e.keyは押されたキーボードの値を取得する
const textBox = document.querySelector('#textBox');
const output = document.querySelector('#output');
textBox.addEventListener('keydown', (e) => {
  console.log(e);
  output.textContent = `"${e.key}" が押されました。`;
});

const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const para = document.querySelector('p');

form.addEventListener('submit', (e) => {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
    console.log(e.preventDefault);
    para.textContent = 'You need to fill in both names!';
  }
});
