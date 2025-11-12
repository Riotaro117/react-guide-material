import { useState } from 'react';

const Example = () => {
  const personObj = { name: 'Tom', age: 18 };
  // useStateの初期値には、オブジェクトを入れる
  const [person, setPerson] = useState(personObj);

  // オブジェクトを更新するときは、オブジェクトを詳細に書く
  // setPersonにはオブジェクトを入れて、更新したいプロパティにのみ変化を加える。後はそのまま記述
  const changeName = (e) => {
    // setPerson({ name: e.target.value, age: person.age });

    // スプレッド演算子も使用できる
    setPerson({ ...person, name: e.target.value });
  };

  const changeAge = (e) => {
    setPerson({ name: person.name, age: e.target.value });
  };

  const reset = () => {
    setPerson({ name: '', age: '' });
  };

  // inputタグのvalueが初期値を取る。placeholderは見えるだけ
  return (
    <>
      <h3>Name:{person.name}</h3>
      <h3>Age:{person.age}</h3>
      <input type="text" onChange={changeName} value={person.name} />
      <input type="number" onChange={changeAge} value={person.age} />
      <div>
        <button onClick={reset}>リセット</button>
      </div>
    </>
  );
};

export default Example;
