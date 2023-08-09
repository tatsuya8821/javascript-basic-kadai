// 新しくbutton要素を作成し、定数に代入する
const btn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
 
  // 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
  setTimeout(() => {

  //２秒後指定した要素に「ボタンがクリックしました」というテキストを追加
  text.textContent = 'ボタンをクリックしました';
      
  }, 2000);

});

