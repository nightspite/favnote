import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Notes from 'views/Notes';
import Twitters from 'views/Twitters';
import Articles from 'views/Articles';
import DetailsPage from 'views/DetailsPage';

const Root = () => (
  <div>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/notes" />} />
          <Route exact path="/notes" component={Notes} />
          <Route path="/notes/:id" component={DetailsPage} />
          <Route exact path="/twitters" component={Twitters} />
          <Route path="/twitters/:id" component={DetailsPage} />
          <Route exact path="/articles" component={Articles} />
          <Route path="/articles/:id" component={DetailsPage} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </div>
);

export default Root;
