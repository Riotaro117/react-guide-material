import "./Container.css";

// props.childrenは親要素のコンポーネントで囲まれた中身をそのまま受け取れる
const Container = ({ title,children,first,second }) => {
  return (
    <div className="container">
      <h3>{title}</h3>
      {/* {children} */}
      {first}
      {second}
    </div>
  );
};

export default Container;
