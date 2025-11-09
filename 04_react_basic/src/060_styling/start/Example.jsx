/**
 * [注意]レクチャーをプルダウンで選択すると、<head>タグにそのレクチャーでimport "Example.css"のように読み込んだスタイルが挿入されます。このスタイルはプルダウンを切り替えても残りつづけるため、まだcssを記述していないのにスタイルが適用されていると感じた場合にはブラウザを更新してください。
 */
// CSSを読み込む CSSもimport可能
import './Example.css';
const Example = () => {
  return (
    <div className="component">
      {/* classを定義する時に混在するためclassName */}
      <h3>Hello Component</h3>
    </div>
  );
};

export default Example;
