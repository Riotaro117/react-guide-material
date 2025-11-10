const Hello = (props) => {
  // POINT 子要素にわたってきたpropsは基本的に読み取り専用
  return (
    <div>
      <h3>Hello {props.name}</h3>
    </div>
  );
};

export default Hello;
