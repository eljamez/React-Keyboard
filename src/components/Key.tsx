import React, { MouseEventHandler, FunctionComponent } from 'react';

type Props = {
    note: string;
    onClick: MouseEventHandler<HTMLDivElement>;
    selected: boolean;
};

const Key: FunctionComponent<Props> = ({ note, onClick, selected }) => {
    const noteSliced = note.slice()
    const className = noteSliced[1] === '#'
        ? `key--${noteSliced[0]}--sharp key--sharp`
        : `key--${noteSliced[0]}`
    const selectedClass = selected
        ? 'selected'
        : ''
    return (
        <div className={`key ${className} ${selectedClass}`} onClick={onClick}>
            {note}
        </div>
    )
}

export default Key