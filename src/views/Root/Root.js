import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import Button from 'components/Button/Button';

function Root() {
  return (
    <div>
      <GlobalStyle />
      <h1>Hello world!</h1>
      <Button width="500px">Close / Save</Button>
      <Button secondary>Remove</Button>
    </div>
  );
}

export default Root;
