import * as React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './styles.css';
import zoom from './images/zoom.png';
import x from './images/x.png';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
    }

    static propTypes = {
        className: PropTypes.string,
        onSubmit: PropTypes.func.isRequired
    }

    static defaultProps = {
        onSubmit: console.log
    }

    submit() {
        this.props.onSubmit(this.input.current.value);
        this.clear();
    }

    clear() {
        this.input.current.value = '';
    }

    render() {
        const { className, onSubmit } = this.props;

        return (
            <div className={cn(styles.container, className)}>
                <img 
                    className={cn(styles.btn, styles.search)}
                    src={zoom}
                    onClick={() => this.submit()}
                />
                <input
                    className={styles.input}
                    ref={this.input}
                    type="text"
                    onKeyUp={({ keyCode }) => {
                        if (keyCode === 13) {
                            this.submit();
                        } else if (keyCode === 27) {
                            this.clear();
                        }
                    }}
                />
                <img
                    className={cn(styles.btn, styles.clear)}
                    src={x}
                    onClick={() => this.clear()}
                />
            </div>
        );
    }
}
