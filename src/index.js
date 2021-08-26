import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { MemoryRouter } from 'react-router-dom';

// import App from './App'
import Root from './Root';

ReactDOM.render(
  <React.StrictMode>
    <MemoryRouter>
       <Root />
    </MemoryRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
