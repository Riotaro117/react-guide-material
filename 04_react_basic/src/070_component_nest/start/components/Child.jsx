import './Child.css';
// 他の関数コンポーネントを使用する、拡張子は省略可能
import { List } from './List.jsx';

const Child = () => {
  return (
    <div className="component">
      <h3>Hello Component</h3>
      <List />
      {/* 関数コンポーネントをここで使う */}
    </div>
  );
};

export default Child;
