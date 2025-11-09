// 関数コンポーネントとして定義し、コンポーネント化
const List = () => {
  return (
    <ul>
      <li>item-1</li>
      <li>item-2</li>
      <li>item-3</li>
      <li>item-4</li>
      <li>item-5</li>
    </ul>
  );
};

// 他のファイルで実行するためにexportする
export { List };
