import { useState } from 'react';

// 画面が変更されるために必要な処理としては２つある
// ①コンポーネントの再実行→再レンダリング
// ②変更した値を保持しておく→stateに保存→stateはコンポーネント毎に保存

const Example = () => {
  // usestateの中は配列になっている
  // 0番目は初期値(参照用の値)、1番目は更新用関数
  let [val, setVal] = useState();
  // console.log(valArray);
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          // const setFn = valArray[1];
          setVal(e.target.value);
        }}
      />
      = {val}
    </>
  );
};

export default Example;
