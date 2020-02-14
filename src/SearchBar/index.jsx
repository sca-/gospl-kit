import * as React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './styles.css';
import zoom from './images/zoom.png';
import x from './images/x.png';

const SearchBar = (props) => {
    const { className, onSubmit } = props;
    const [value, setValue] = React.useState('');
    
    const clear = () => {
        setValue('');
    }

    const submit = () => {
        onSubmit(value);
        clear();
    }

    return (
        <div className={cn(styles.container, className)}>
            <img 
                className={cn(styles.btn, styles.search)}
                src={zoom}
                onClick={() => submit()}
            />
            <input
                className={styles.input}
                value={value}
                onChange={e => setValue(e.target.value)}
                type="text"
                onKeyUp={({ keyCode }) => {
                    if (keyCode === 13) {
                        submit();
                    } else if (keyCode === 27) {
                        clear();
                    }
                }}
            />
            <img
                className={cn(styles.btn, styles.clear)}
                src={x}
                onClick={() => clear()}
            />
        </div>
    );
};

SearchBar.propTypes = {
    className: PropTypes.string,
    onSubmit: PropTypes.func.isRequired
};

SearchBar.defaultProps = {
    onSubmit: console.log
};

export default SearchBar;
