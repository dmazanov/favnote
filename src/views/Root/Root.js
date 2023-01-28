import React from 'react';
import Button from 'components/Button/Button';

function Root() {
  return (
    <div>
      <h1>Hello world!</h1>
      <Button width="500px">Close / Save</Button>
      <Button secondary>Remove</Button>
    </div>
  );
}

export default Root;
