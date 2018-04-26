import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import '../src/global.css';
import Text from '../src/Text';
import Button from '../src/Button';
import ScrollTop from '../src/ScrollTop';

const textStories = storiesOf('Text');
textStories.addDecorator(withKnobs);

textStories.add('Default', () => (
  <Text
    small={boolean('small')}
    large={boolean('large')}
  >
    {text('text', 'Thou we are')}
  </Text>
)).add('Typewriter effect', () => (
  <Text typewriter speed={number('text typewriter speed', 5)}>
    {text('text row 1', 'Cat cat cat Cat cat cat Cat cat cat Cat cat cat ')}
    <br/><b>WOW</b><br/>
    {text('text row 2', 'Cat cat cat Cat cat cat Cat cat cat Cat cat cat ')}
  </Text>
));

const buttonStories = storiesOf('Button');
buttonStories.addDecorator(withKnobs);

buttonStories.add('Default', () => (
  <Button onClick={action('Button clicked')}>
    <Text>{text('button label', 'Click ME!')}</Text>
  </Button>
)).add('Many Buttons', () => {
  let range, i;
  for (i = 0; i < 100; i++) {
    range = range || [];
    range.push(i);
  }

  return (
    <div style={{ whiteSpace: 'nowrap' }}>
      {range.map(x => (
        <Button key={`Button-${x}`} onClick={action(`Button #${x} clicked`)}>
          <Text>Button</Text>
        </Button>
      ))}
    </div>
  );
});

const scrollTopStories = storiesOf('Scroll Top Btn');
scrollTopStories.addDecorator(withKnobs);

scrollTopStories.add('Default', () => (
  <div style={{ height: '5000px', border: '1px dashed white', padding: '20px' }}>
    <Text>Start here :)</Text>
    <ScrollTop position={text('position (left/right)', 'right')} />
  </div>
));
