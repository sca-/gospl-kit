import * as React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.css';

import { scrollToY } from '../utils';
import Button from '../Button';
import Text from '../Text';

const ScrollTop = ({ className, position = 'right' }) => (
  <div className={cn(styles.scrollTop, styles[position], className)}>
    <Button onClick={() => {
      scrollToY()
    }}>
      <Text>⇈</Text>
    </Button>
  </div>
);

ScrollTop.propTypes = {
  position: PropTypes.string,
  className: PropTypes.string
};

export default ScrollTop;
