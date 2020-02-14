import * as React from 'react';
import { renderToString } from 'react-dom/server';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.css';

const addCharsToWrite = (items) => {
  let __temp = [];
  if (!items) {
    return __temp;
  }
  if (typeof items === 'string') {
    __temp = __temp.concat(Array.from(items).map(char => {
      if (char === '\n') {
        return '<br/>';
      } else {
        return char;
      }
    }));
  } else {
    items.map(item => {
      if (typeof item === 'string') {
        __temp = __temp.concat(Array.from(item));
      } else {
        __temp.push(renderToString(item));
      }
    });
  }

  return __temp.join('');
}

const useInterval = (callback, delay) => {
  const savedCallback = React.useRef();

  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  React.useEffect(() => {
    const tick = () => {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default Text = (props) => {
  const defaultText = addCharsToWrite(props.text || props.children)
  const [text, setText] = React.useState(props.typewriter ? '' : defaultText);

  useInterval(() => {
    const [prevChar, nextChar] = defaultText.slice(text.length - 1, text.length + 1).split('');
    const nextText = prevChar !== '\\' && nextChar === '<'
      ? defaultText.slice(0, defaultText.slice(text.length).indexOf('>') + text.length + 1)
      : defaultText.slice(0, text.length + 1);
    setText(
      nextText
    )
  }, 100 / props.speed);

  return (
    <div
      className={cn(
        styles.text,
        props.className,
        props.small && styles.small,
        props.large && styles.large
      )}
      dangerouslySetInnerHTML={{__html: text}}
    >
      </div>
  );
};

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
  small: PropTypes.bool,
  large: PropTypes.bool,
  typewriter: PropTypes.bool,
  text: PropTypes.string
};
