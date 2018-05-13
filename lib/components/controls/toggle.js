import React from 'react'
import PropTypes from 'prop-types';
import CheckBox from './CheckBox';
import Icon from './icon'
import './toggle.css'
/** learn proper css  to include , name and apply less and sass properly*/
const Toggle=({name,checked,className,iconClass})=>{
   return( 
<div className="toggle-component">

    <div>
    <Icon className={iconClass}> &nbsp;</Icon>
    </div>

    <CheckBox displayName={name} className={className} checked={checked} />

</div>)

};

Toggle.defaultProps={
    name:'',
    checked:true,
    className:''
}

Toggle.propTypes={
displayName:PropTypes.string,
checked:PropTypes.bool,
className:PropTypes.string,

}

export default Toggle;