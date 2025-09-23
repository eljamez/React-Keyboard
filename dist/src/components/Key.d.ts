import { FunctionComponent, MouseEventHandler } from 'react';

type Props = {
    note: string;
    onMouseDown: MouseEventHandler<HTMLDivElement>;
    onMouseUp: MouseEventHandler<HTMLDivElement>;
    selected: boolean;
    showNote: boolean;
};
declare const Key: FunctionComponent<Props>;
export default Key;
//# sourceMappingURL=Key.d.ts.map