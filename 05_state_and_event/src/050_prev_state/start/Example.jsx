import { useState } from 'react';

// カウントする時の変数名はcountにする
const Example = () => {
  const [count, setCount] = useState(0);

  // 更新関数の引数に値の変化を入れる
  const countUp = () => {
    setCount(count + 1);
    setCount((prev) => prev + 1); //前の値を続けて処理を追加したい時は、引数に前の値を入れた関数を書くこと
    console.log(count); //この時点でcount = 0;再レンダリングされた時に更新される非同期処理
  };

  const countDown = () => {
    setCount(count - 1);
  };

  return (
    <>
      <p>現在のカウント数: {count}</p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
