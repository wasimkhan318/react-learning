import React from 'react'
import Toggle from './controls/Toggle'
import Label from './controls/Label'

export default class ControlHandler extends React.Component{

    constructor(props)
    {
        super(props)

        this.state={
            value:'Please Select',
            checked:true,
            iconClass:'iconfalse'
        }

    }

        onclick()
        {
            /**convert to one line */


            const {iconClass} = this.state;
            let iconcss=iconClass==='iconfalse'?'icon':'iconfalse';
            this.setState({iconClass:iconcss});


        }
    

     
    render()
    {
        const {value,checked}=this.state;
        
        return  (
            
       <Toggle name={value} iconClass={this.state.iconClass} onClick={()=>this.onclick()} className="hideCheckBox" checked={checked}  />
        )
        
    }
    
}