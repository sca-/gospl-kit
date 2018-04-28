import * as React from 'react';
import { renderToString } from 'react-dom/server';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.css';

export default class Text extends React.PureComponent {
  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.state = {
      charsToWrite: [],
      redraw: false,
      rewriteInterval: null
    };
  }

  static propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    className: PropTypes.string,
    small: PropTypes.bool,
    large: PropTypes.bool,
    typewriter: PropTypes.bool,
    text: PropTypes.string
  }

  static defaultProps = {
    speed: 5
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { typewriter } = nextProps;
    if (typewriter) {
      return { charsToWrite: Text.addCharsToWrite(nextProps.text || nextProps.children), redraw: true };
    }
    return {};
  }

  componentDidMount() {
    const { typewriter } = this.props;

    if (typewriter) {
      this.container.current.innerHTML = '';
      this.startRewriting();
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.rewriteInterval);
  }

  static addCharsToWrite(items) {
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

    return __temp;
  }

  writeChars() {
    let char = this.state.charsToWrite[0];
    if (char) {
      if (this.state.redraw) {
        this.restartRedrawing();
        this.container.current.innerHTML = char;
      } else {
        this.container.current.innerHTML += char;
      }
      this.setState({ redraw: false, charsToWrite: this.state.charsToWrite.slice(1) });
    }
  }

  startRewriting() {
    const { speed } = this.props;

    this.setState({ rewriteInterval: setInterval(() => {
        this.writeChars();
      }, 100 / speed)
    });

    return this;
  }

  stopRewriting() {
    clearInterval(this.state.rewriteInterval);
    return this;
  }

  restartRedrawing() {
    this.stopRewriting().startRewriting();
  }

  render() {
    const { className, children, small, large } = this.props;

    return (
      <div
        ref={this.container}
        className={cn(
          styles.text,
          className,
          small && styles.small,
          large && styles.large
      )}>
        {children}
      </div>
    );
  }
}
