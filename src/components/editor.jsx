import React from 'react';
import PropTypes from 'prop-types';


// This will be the main Component which will be customizable further

const Editor = props => {

    return (
        <div>

        </div>
    )
}

Editor.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    toolbox: PropTypes.bool
}

export default Editor;