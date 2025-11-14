import { useState } from 'react';

const Example = () => {
  const [toggle, setToggle] = useState(true);
  const toggleComponent = () => {
    // useStateの更新関数に前の値を更新する形にする
    setToggle((prestate) => !prestate);
  };
  return (
    <>
      <button onClick={toggleComponent}>toggle</button>
      {/* 三項演算子で条件を分岐し、表示を切り替える */}
      {/* keyを設定することでコンポーネントが同階層であっても、それぞれ別物であると認識させられる */}
      {toggle ? <Count key="A" title="A" /> : <Count key="B" title="B" />}
    </>
  );
};

const Count = ({ title }) => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>
        {title}: {count}
      </h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
