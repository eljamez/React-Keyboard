# React Keyboard 🎹

The React Keyboard is a react component that provides a "musical typing" enabled keyboard. This is a purley visual component and sounds have not been added. That part is up to you, but more info on that below.

## Installation

`react-keybaord-component` is available as an NPM Package

```
// npm
npm install react-keyboard-component

// yarn
yarn add react-keyboard-component
```

## Usage

In your component...

```
import {ReactKeyboard} from 'react-keyboard';

const App = () => {
  // notes are returned as an array
  const handleNotes = (notes) => {
    // do what you like with them :)
  }

  return (
    <div>
      <ReactKeyboard handleNotes={handleNotes}>
    </div>
  )
};
```

The notes are returned from the component on any note change. The array returns the notes that are currently being played.
