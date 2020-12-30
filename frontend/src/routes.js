import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import Videos from './pages/NewVideos';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/new" component={Videos} />
            </Switch>
        </BrowserRouter>

    );
}