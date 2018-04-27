import * as React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './styles.css';

export default class HorizontalScroller extends React.Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.onScroll = this.onScroll.bind(this);
  }

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    speed: PropTypes.number
  }

  static defaultProps = {
    speed: 10
  }

  onScroll(event) {
    const { speed } = this.props;
    event.stopPropagation();

    const newScrollLeft = this.container.current.scrollLeft + speed * (event.nativeEvent.deltaX + event.nativeEvent.deltaY);
    if (newScrollLeft >= 0 && newScrollLeft <= this.container.current.scrollWidth - this.container.current.clientWidth) {
      event.nativeEvent.preventDefault();
      event.nativeEvent.stopImmediatePropagation();
      this.container.current.scrollLeft = newScrollLeft;
    }
  }

  render() {
    const { className, children } = this.props;
    return (
      <div
        ref={this.container}
        className={cn(styles.scroller, className)}
        onWheel={this.onScroll}
      >
        {children}
      </div>
    );
  }
}
