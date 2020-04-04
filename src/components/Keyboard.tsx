import React, { FunctionComponent, MouseEventHandler } from 'react';
import { NOTES } from '../utils/constants';

import Key from './Key';

type Props = {
    keysPressed: string[];
    handleOnMouseDown: MouseEventHandler<HTMLDivElement>;
    handleOnMouseUp: MouseEventHandler<HTMLDivElement>;
}

const Keyboard: FunctionComponent<Props> = ({
    keysPressed,
    handleOnMouseDown,
    handleOnMouseUp,
}) => {

    return (
        <div className="keyboard">
            {NOTES.map(note => {
                const isSelected = keysPressed.includes(note)
                return (<Key
                    key={note}
                    note={note}
                    onMouseDown={handleOnMouseDown}
                    onMouseUp={handleOnMouseUp}
                    selected={isSelected}
                />)
            })}
        </div>
    )
}

export default Keyboard;