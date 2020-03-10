import React, { FunctionComponent, MouseEventHandler } from 'react';
import { NOTES } from '../utils/constants';

import Key from './Key';

type Props = {
    keysPressed: string[];
    handleSetCurrentNote: MouseEventHandler<HTMLDivElement>;
}

const Keyboard: FunctionComponent<Props> = ({
    keysPressed,
    handleSetCurrentNote,
}) => {

    return (
        <div className="keyboard">
            {NOTES.map(note => {
                const isSelected = keysPressed.includes(note)
                return (<Key
                    key={note}
                    note={note}
                    onClick={handleSetCurrentNote}
                    selected={isSelected}
                />)
            })}
        </div>
    )
}

export default Keyboard;