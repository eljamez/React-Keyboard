import React, { FunctionComponent, MouseEvent } from 'react';
import { NOTES } from '../utils/constants';

import Key from './Key';

type Props = {
    keysPressed: string[];
}

const Keyboard: FunctionComponent<Props> = ({
    keysPressed
}) => {

    const handleSetCurrentNote = (e: MouseEvent) => {
        console.log(e.currentTarget.textContent)
    }

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