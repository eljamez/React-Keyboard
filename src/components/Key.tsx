import React, { MouseEventHandler, FunctionComponent } from 'react';

type Props = {
    note: string;
    onMouseDown: MouseEventHandler<HTMLDivElement>;
    onMouseUp: MouseEventHandler<HTMLDivElement>;
    selected: boolean;
};

const Key: FunctionComponent<Props> = ({ note, selected, onMouseDown, onMouseUp }) => {
    const noteSliced = note.slice()
    const className = noteSliced[1] === '#'
        ? `key--${noteSliced[0]}--sharp key--sharp`
        : `key--${noteSliced[0]}`
    const selectedClass = selected
        ? 'selected'
        : ''
    return (
        <div
            className={`key ${className} ${selectedClass}`}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}>
            {note}
        </div>
    )
}

export default Key