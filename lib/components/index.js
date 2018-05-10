import React from 'react'
import ReactDOM from 'react-dom'
/*move to seprate index file*/
import ControlHandler from './ControlHandler'

class App extends React.Component
{

    render(){
        return(
            <ControlHandler/>
        )
    }

}

ReactDOM.render(
     <App />,
     document.getElementById('root')
);
