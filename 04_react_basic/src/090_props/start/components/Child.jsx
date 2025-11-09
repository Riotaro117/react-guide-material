/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。
*/

import './Child.css';

// const Child = (props) => {
//   console.log(props);
//   return (
//     // props.colorはオブジェクトのキーを指定している color:"red";
//     <div className={`component ${props.color}`}>
//       <h3>Hello Component</h3>
//     </div>
//   );
// };

// propsはオブジェクトなので分割代入でもできる
const Child = ({ color = 'green', num, fn, bool, obj }) => {
  // console.log({ fn });
  return (
    // props.colorはオブジェクトのキーを指定している color:"red";
    <div className={`component ${color}`}>
      <h3>Hello Component</h3>
      <h3>{num}</h3>
      <h3>{fn('Props')}</h3>
      <h3>{bool ? 'true' : 'false'}</h3>
      <h3>{obj.name + obj.age}</h3>
    </div>
  );
};

export default Child;
