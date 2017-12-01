import React from 'react';
import ReactDOM from 'react-dom';
import Box from './component/Box/Box.js';
class App extends React.Component{
    render(){
        return(
            <div>
                <Box />
            </div>
            )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('box')

)