import React from 'react';
import { Wrapper } from './styles';

function ViewWrapper(props: any) {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
}

export default ViewWrapper;
