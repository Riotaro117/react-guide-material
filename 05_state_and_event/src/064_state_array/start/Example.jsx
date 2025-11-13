import { useState } from 'react';

const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [nums, setNums] = useState(numArray);
  const shuffle = () => {
    // 配列の内容を変更する際は新しく配列を定義する
    const newNums = [...nums];
    // 末尾だけ取り出すことを定義する
    const value = newNums.pop();
    // 先頭に追加する
    newNums.unshift(value);
    // 変更した配列を更新用関数に登録
    setNums(newNums);
  };
  return (
    <>
      {/* 配列を表示するときは、useStateの初期値を入力すること */}
      <h1>{nums}</h1>
      <button onClick={shuffle}>shuffle</button>
    </>
  );
};

export default Example;
