import React from 'react'
import PropTypes from 'prop-types';

const Toggle=({name,checked})=>(
<div>
<input type="checkbox" checked={checked} value={checked} />
<span>{name}</span>
</div>



);
export default Toggle;