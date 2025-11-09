import Child from './components/Child';

const Example = () => {
  const hello = (arg) => `Hello ${arg}`;
  // propsで渡す値はオブジェクトになる。ここで言うとcolor:"red";
  // propsを子要素で指定した場合、親要素で指定しないとエラーになる

  const o = { color: 'red', num: 123 };
  return (
    // スプレッド演算子を使ってまとめて記述することもできる
    <>
      <Child {...o} fn={hello} bool obj={{ name: 'Tom', age: 18 }} />
      {/* <Child color="red" num fn={hello} obj /> */}
    </>
  );
};

export default Example;
