import React, { FunctionComponent, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  name: string;
}

const KeyboardContainer: FunctionComponent<Props> = ({
  children,
  name,
}) => {
  return (
    <div className="keyboardContainer">
      <div className="keyboardTop">
        {name && <h1>{name}</h1>}
      </div>
      {children}
    </div>
  )
}

export default KeyboardContainer;