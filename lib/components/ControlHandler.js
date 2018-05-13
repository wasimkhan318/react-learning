import React from 'react'
import Toggle from './controls/Toggle'
import Label from './controls/Label'

export default class ControlHandler extends React.Component{

    constructor()
    {
        super()

        this.state={
            value:'Please Select',
            checked:true,
        }

    }
    render()
    {
        const {value,checked}=this.state;
        
        return  (
        <Toggle name={value} iconClass="icon" className="hideCheckBox" checked={checked}  />
        )
        
    }
    
}