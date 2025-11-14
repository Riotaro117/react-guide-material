import { useState } from 'react';

const Example = () => {
  const [toggle, setToggle] = useState(true);
  // 一つのuseStateではボタンを押すと同じように増減してしまうので、それぞれ用意する
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const toggleComponent = () => {
    setToggle((prev) => !prev);
  };
  return (
    <>
      <button onClick={toggleComponent}>toggle</button>
      {toggle ? (
        <Count key="A" title="A" count={countA} setCount={setCountA} />
      ) : (
        <Count key="B" title="B" count={countB} setCount={setCountB} />
      )}
    </>
  );
};

// 親のコンポーネントで定義した値を使用する場合はpropsで引き渡す（AとB複数で共有したいため）
// 参考：コンポーネントが消滅する可能性があるときもpropsで渡す
const Count = ({ title, count, setCount }) => {
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
