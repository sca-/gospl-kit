# React retro-style UI components kit

## Repository
https://github.com/sca-/gospl-kit.git

## Installation
```sh
npm i @gospl/kit
```

## Usage
```javascript
import * as React from 'react';
import { render } from 'react-dom';
import { Text, Button } from '@gospl/kit';

const App = (props) => (
  <Button onClick={() => alert('Hello!')}>
    <Text>Oh. Hello!</Text>
  </Button>
);

render(<App />, document.getElementById('app'));
```

## Components

Every component accepts `className` prop if you want to restyle anything

### `Text` renders a text with some cool styling
Options: 
- `small` 
- `large` 
- `typewriter` – adds typing animation as component first renders and has it's props changed
- `speed` – changes speed of typewriter effect. Choose between 1 and 10

### `Button` a humble button
Options: 
- `onClick` – what else does the Button need? 

### `Panel` renders a hideable panel with default border
Options: 
- `hidden` 

### `ScrollTop` renders a small button in the bottom of the screen, which scrolls all the way to top of the page when clicked
Options: 
- `position` – 'left' or 'right' 

### `HorizontalScroll` renders a container with `white-space: nowrap;` css option and which scrolls it's contents to the left on mouseWheel event
Options: 
- `speed` – choose between 0.1 and 100
