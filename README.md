# react-keyboard-component ( A React Keyboard 🎹)

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

The React Keyboard is a modern React component that provides a "musical typing" enabled keyboard. This is a purely visual component built with TypeScript, and sounds have not been added. That part is up to you, but more info on that below.

## Technologies Used

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Full type safety and better developer experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Vitest** - Fast unit testing framework
- **ESLint** - Code linting and formatting

## Requirements

- Node.js 20.11.0 or higher
- React 18.0.0 or higher

## Installation

`react-keyboard-component` is available as an NPM Package

```bash
# npm
npm install react-keyboard-component

# yarn
yarn add react-keyboard-component

# pnpm
pnpm add react-keyboard-component
```

## Usage

### Basic Usage

```tsx
import ReactKeyboard from "react-keyboard-component";

const App = () => {
  // notes are returned as an array
  const handleNotes = (notes: string[]) => {
    // do what you like with them :)
    console.log("Current notes:", notes);
  };

  return (
    <div>
      <ReactKeyboard getCurrentNotes={handleNotes} name="My Keyboard" />
    </div>
  );
};
```

### TypeScript Support

The component is fully typed and provides TypeScript definitions out of the box:

```tsx
import ReactKeyboard from "react-keyboard-component";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const handleNotes = (notes: string[]) => {
    // TypeScript will provide full type safety here
    notes.forEach((note) => {
      console.log(`Playing note: ${note}`);
    });
  };

  return (
    <ReactKeyboard getCurrentNotes={handleNotes} name="TypeScript Keyboard" />
  );
};
```

## Props

| Prop              | Type                        | Required | Description                                                 |
| ----------------- | --------------------------- | -------- | ----------------------------------------------------------- |
| `getCurrentNotes` | `(notes: string[]) => void` | No       | Callback function that receives the currently pressed notes |
| `name`            | `string`                    | No       | Optional name to display on the keyboard                    |

## Features

- **Visual Keyboard**: A beautiful, responsive keyboard interface
- **Musical Typing**: Map keyboard keys to musical notes
- **Mouse Support**: Click keys with your mouse
- **Keyboard Support**: Use your computer keyboard
- **TypeScript**: Full type safety and IntelliSense support
- **Modern React**: Built with React 18 and modern hooks
- **Responsive Design**: Works on desktop and mobile devices

## Development

To contribute to this project:

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Run tests: `npm test`
5. Build the library: `npm run build:lib`

The notes are returned from the component on any note change. The array returns the notes that are currently being played.

Passing in `name` as a prop (a string) will make the name visible on the keyboard itself.

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo
[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
