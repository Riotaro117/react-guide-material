import { useState } from 'react';

const animals = ['Dog', 'Cat', 'Rat'];

const Example = () => {
  // input欄の変更を検知するためにuseState
  const [filterVal, setFilterVal] = useState('');
  return (
    <>
      <h3>配列のフィルター</h3>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => {
          setFilterVal(e.target.value);
        }}
      />
      <ul>
        {/* ""文字は"cat"の先頭のところと一致するとみなされる */}
        {/* indexOfは一致するかどうかのメソッドなので-1が返ると一致なし */}
        {animals
          .filter((animal) => animal.indexOf(filterVal) !== -1)
          .map((animal) => (
            <li key={animal}>{animal}</li>
          ))}
      </ul>
    </>
  );
};

export default Example;
