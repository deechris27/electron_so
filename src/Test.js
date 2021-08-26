import React from 'react';
import { Link } from 'react-router-dom';

function Test(){
    return <div>
        <h1>I'm in test component!!!</h1>
        <Link to="/test">go to app component</Link>
        
    </div>
}

export default Test;