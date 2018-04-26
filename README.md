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