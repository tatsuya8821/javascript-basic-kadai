// 変数numに0～45までのランダムな整数を代入する
let num= Math.floor(Math.random() * 45);

// 変数numの値を出力する（確認用）
console.log(num);

//変数numの値が3と5の倍数であれば『3と5の倍数です』と出力
if((num % 3)===0 && (num % 5)===0){
  console.log('3と5の倍数です')
}

//変数numの値が5の倍数であれば『3の倍数です』と出力
else if(num % 5===0){
  console.log('5の倍数です')
}

//変数numの値が3の倍数であれば『3の倍数です』と出力
else if(num % 3===0){
  console.log('3の倍数です')
}