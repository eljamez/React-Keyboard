import React, { FunctionComponent, ReactNode } from 'react';

type Props = {
    children: ReactNode;
    name?: string;
}

const KeyboardContainer: FunctionComponent<Props> = ({
    children,
    name = 'ej rct 900',
}) => {
    return (
        <div className="keyboardContainer">
            <div className="keyboardTop">
                <h1>{name}</h1>
                <h2>eljamez &copy;</h2>
            </div>
            {children}
        </div>
    )
}

export default KeyboardContainer;