import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import Test from './Test';

function Root(){
   return (
       <div>
           <Switch>
               <Route exact path="/" component={Test} />
               <Route path="/test" component={App} />
           </Switch>
       </div>
   )
}

export default Root;