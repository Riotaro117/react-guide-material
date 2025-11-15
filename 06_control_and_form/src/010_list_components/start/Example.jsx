const animals = ['Dog', 'Cat', 'Rat'];

const Example = () => {
  // ①新しく配列を定義する
  const animalList = [];
  // for of文を使って配列を一つずつ取り出し、空の配列に入れていく
  // JSXはオブジェクトになるので配列に入れることができる
  for (const animal of animals) {
    animalList.push(<li>Hello, {animal}</li>);
  }

  // ②.map()記法、()内にコールバック関数を書く（Reactで基本はmapを使う方が多い）
  const helloAnimal = animals.map((animal) => <li>Hello, {animal}</li>);
  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {/* 毎回配列を取り出すのは冗長 */}
        {/* <li>Hello, {animals[0]}</li>
        <li>Hello, {animals[1]}</li>
        <li>Hello, {animals[2]}</li> */}
        {animalList}
        {helloAnimal}
      </ul>
    </>
  );
};

export default Example;
