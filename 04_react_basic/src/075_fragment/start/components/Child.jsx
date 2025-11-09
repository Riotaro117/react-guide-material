import './Child.css';
// Fragmentを使用したい時
// import React from 'react';

// Fragmentのみを使用する時
import { Fragment } from 'react';

{
  /* <></>これだけでもいける。この時はimportを書かない。ただし、key=を付けられない */
}

const Child = () => {
  return (
    <Fragment>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maxime harum voluptas
        consequatur eligendi dicta facilis maiores error enim nostrum aliquid consectetur cumque
        possimus nesciunt ea distinctio, vel quos et.
      </p>
    </Fragment>
  );
};

export default Child;
