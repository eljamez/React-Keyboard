import { FunctionComponent, MouseEventHandler } from 'react';

type Props = {
    keysPressed: string[];
    handleOnMouseDown: MouseEventHandler<HTMLDivElement>;
    handleOnMouseUp: MouseEventHandler<HTMLDivElement>;
    showNote?: boolean;
};
declare const Keyboard: FunctionComponent<Props>;
export default Keyboard;
//# sourceMappingURL=Keyboard.d.ts.map