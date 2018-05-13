import React from 'react'
import PropTypes from 'prop-types'

const Icon=({className})=>{
return(
<span className={className}> &nbsp;</span>
)
};

Icon.defaultProps={
    
    className:'hideCheckBox'
}
Icon.propTypes={
    displayName:PropTypes.string,
    
}

export default Icon;