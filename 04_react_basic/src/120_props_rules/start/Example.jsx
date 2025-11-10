

import Bye from './components/Bye';
import Hello from './components/Hello';

// POINT propsの流れは一方通行(親から子)
const Example = () => {
  const name = 'Tom';
  return (
    <>
      <Hello name={name} />
      <Bye name={name} />
    </>
  );
};

export default Example;
