import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import NewVideo from './pages/NewVideo';
import ModVideos from './pages/Moderator/Videos';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/new" component={NewVideo} />
                <Route path="/moderator/videos" component={ModVideos}/>
            </Switch>
        </BrowserRouter>

    );
}