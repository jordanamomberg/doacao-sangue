import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

//não é necessário por o index pq ele busca por um arquivo index. 
import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={CreatePoint} path="/create-point" />
        </BrowserRouter>
    );  
}

export default Routes;