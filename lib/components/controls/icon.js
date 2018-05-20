import React from 'react'
import PropTypes from 'prop-types'

const Icon=({className,onClick})=>{
return(
<span onClick={onClick} className={className}> &nbsp;</span>
)
};

Icon.defaultProps={
    
    className:'hideCheckBox'
}
Icon.propTypes={
    displayName:PropTypes.string,
    onClick:PropTypes.func,
    
}

export default Icon;