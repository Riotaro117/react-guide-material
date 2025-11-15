// ポイントは/にして階層を表示すること
import Profile from './components/Profile';

// 配列にして中にオブジェクトにしたのは〇
// キーの先頭は小文字、単語は文字列にすること
// idは一意の値なので追加している
const persons = [
  { id: 1, name: 'Geo', age: 18, hobbies: ['sports', 'music'] },
  { id: 2, name: 'Tom', age: 25, hobbies: ['movie', 'music'] },
  { id: 3, name: 'Lisa', age: 21, hobbies: ['sports', 'travel', 'game'] },
];

const Example = () => {
  return (
    <>
      <h3>練習問題</h3>
      <p>Profileコンポーネントを使用して、完成コードと同じ画面を作成してください。</p>
      <p>
        また、Profileコンポーネント内のリスト表示部分にkeyを設定して、ワーニング表示がされないようにしてください。
      </p>
      <ul>
        {/* .mapでreturnを忘れがち */}
        {/* .mapの中身は作成したい内容を記述する */}
        {/* keyはpersonだとエラー、personはたくさんある */}
        {persons.map((person) => (
          <li key={person.id}>
            <Profile {...person} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Example;
