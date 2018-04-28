import * as React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './styles.css';

const Panel = (props) => (
  !props.hidden && (
    <div className={cn(styles.container, props.className)}>
      {props.children}
    </div>
  )
);

Panel.propTypes = {
  hidden: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
}

export default Panel;
