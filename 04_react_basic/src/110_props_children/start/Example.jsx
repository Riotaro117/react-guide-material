import Profile from './components/Profile';
import Container from './components/Container';

const profile = [
  { name: 'Takashi', age: 19, country: 'Japan', color: 'blue' },
  { name: 'Jane', age: 28, country: 'UK', color: 'red' },
];

// const Example = () => {
//   return (
//     <div>
//       <Container title="Childrenとは？">{1}</Container>
//     </div>
//   );
// };

// フラグメントの方が見やすい
const Example = () => {
  return (
    <div>
      <Container
        title="Childrenとは？"
        children={
          <>
            <Profile {...profile[0]} />
            <Profile {...profile[1]} />
          </>
        }
        first={<Profile {...profile[0]} />}
        second={<Profile {...profile[1]} />}
      />
    </div>
  );
};

// 配列に格納して表示できる。コンポーネントはオブジェクトだから
// const Example = () => {
//   return (
//     <div>
//       <Container
//         title="Childrenとは？"
//         children={[<Profile {...profile[0]} />, <Profile {...profile[1]} />]}
//       />
//     </div>
//   );
// };

export default Example;
