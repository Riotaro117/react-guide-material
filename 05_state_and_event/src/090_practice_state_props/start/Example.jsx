import { useState } from 'react';

const Example = () => {
  const [count, setCount] = useState(0);
  // 更新用の関数の（）にはどう更新したいかorどんな内容に直接更新したいかを書く
  return (
    <>
      <h3>練習問題</h3>
      <p>
        カウントの更新（CountUpdate）と表示（CountResult）を別のコンポーネントに分離してください。Exampleコンポーネント内で現在のカウントの値を管理するstateを一つ定義してこれまでのレクチャーで実装したようなカウンターを作成してください。
      </p>
      このコメントアウトを外して利用！
      <CountResult count={count} title="カウント" />
      <CountUpdate setCount={setCount} />
    </>
  );
};
// 引数には｛｝で囲いJSX構文で
const CountResult = ({ title, count }) => (
  <h3>
    {title}:{count}
  </h3>
);

const CountUpdate = ({ setCount }) => {
  const countUp = () => {
    setCount((prev) => prev + 1);
  };
  const countDown = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
