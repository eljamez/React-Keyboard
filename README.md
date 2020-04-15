# react-keyboard-component ( A React Keyboard 🎹)

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

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
import ReactKeyboard from 'react-keyboard';

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

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo
[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
