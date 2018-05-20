import React from 'react'
import PropTypes from 'prop-types'

const CheckBox=({displayName,checked,className,onClick})=>{
return(
<div className={className}>
<input type="checkbox"  value={checked} />
<span>{displayName}</span>
</div>)
};

CheckBox.defaultProps={
    displayName:'',
    checked:true,
    className:'hideCheckBox'
}
CheckBox.propTypes={
    displayName:PropTypes.string,
    checked:PropTypes.bool,
    onClick:PropTypes.func,
}

export default CheckBox;