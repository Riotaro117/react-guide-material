import './Expression.css';

const Expression = () => {
  // 変数を定義し、JSX内で使用してみる
  const title = 'Expression';
  // 配列はJSX内で書くと、結合して表示される
  const array = ['item1', 'item2', 'item3'];
  // 引数を使うときは${}でくくること
  const hello = (arg) => `${arg} function`;
  // 違和感あるけど、変数にHTMLを格納できる
  const jsx = <h3>Hello JSX</h3>;

  return (
    // JSX内で変数を使用するときは{}を使う→中身は式のみ
    // toLowerCaseは全てを小文字に変換するメソッド
    // {}で式として埋め込んだ方が用途が多い
    <div className={title.toLowerCase()}>
      <h3>Hello {title}</h3>
      <h3>{array}</h3>
      <h3>{hello('Hello')}</h3>
      {<h3>Hello JSX</h3>}
      {jsx}
    </div>
  );
};
export default Expression;
