import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';

const Preview = props => {

    let { value } = props

    let mdText = marked(value)

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: mdText }} />
        </div>
    )
}

Preview.propTypes = {
    value: PropTypes.string,
}

export default Preview