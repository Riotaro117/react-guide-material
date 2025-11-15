const animals = ['Dog', 'Cat', 'Rat'];

const Example = () => {
  // 新しく配列を定義する
  const animalList = [];
  // for of文を使って配列を一つずつ取り出し、空の配列に入れていく
  for (const animal of animals) {
    animalList.push(<li>Hello, {animal}</li>);
  }

  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {/* 毎回配列を取り出すのは冗長 */}
        {/* <li>Hello, {animals[0]}</li>
        <li>Hello, {animals[1]}</li>
        <li>Hello, {animals[2]}</li> */}
        {animalList}
      </ul>
    </>
  );
};

export default Example;
