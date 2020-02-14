import * as React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './styles.css';

const HorizontalScroller = (props) => {
  const container = React.useRef();
  const { className, children } = props;

  React.useEffect(() => {
    container.current.addEventListener('wheel', event => {
      const { speed } = props;
      event.stopPropagation();

      const newScrollLeft = container.current.scrollLeft + speed * (event.deltaX + event.deltaY);
      if (newScrollLeft >= 0 && newScrollLeft <= container.current.scrollWidth - container.current.clientWidth) {
        event.preventDefault();
        event.stopImmediatePropagation();
        container.current.scrollLeft = newScrollLeft;
      }
    })
  }, []);

  return (
    <div
      ref={container}
      className={cn(styles.scroller, className)}
    >
      {children}
    </div>
  );
};

HorizontalScroller.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  speed: PropTypes.number
};

export default HorizontalScroller;
