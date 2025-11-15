const animals = ['Dog', 'Cat', 'Rat'];

const Example = () => {
  const animalList = [];
  for (const animal of animals) {
    animalList.push(<li>{animal}</li>);
  }

  const helloAnimals = animals.map((animal) => {
    return <li>Hello {animal}</li>;
  });

  return (
    <>
      <ul>
        {/* <li>{animals[0]}</li>
        <li>{animals[1]}</li>
        <li>{animals[2]}</li> */}
        {/* {animalList}
        {helloAnimals} */}
        {/* {animalList} */}

        {/* keyを設定して最小限の差分のみを更新（commit） */}
        {/* ReactはReact要素ツリーの差分を検出処理してDOMを更新しているため、keyを設定していないとどれが更新されているのか分からない */}
        {/* 差分検出はReact要素の先頭から順に比較していくため、こちらが先頭に追加し、keyを設定していないと、人間が同じものと理解していてもすべて削除してから更新してしまう */}
        {/* 配列のkeyには一意な値にする。indexと関連のあるものにはしない。挙動がおかしくなる。 */}
        {/* 一意とは不変（安定している）ユニークなものに */}
        {animals.map((animal) => (
          <li key={animal}>Hello, {animal}</li>
        ))}
      </ul>
    </>
  );
};

export default Example;
