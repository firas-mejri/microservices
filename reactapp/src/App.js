import React, { Fragment } from 'react';
import {
  CssBaseline,
  withStyles,
} from '@material-ui/core';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import Cnam from './components/Cnam';
import CnamManager from './components/CnamManager';
import Minterieur from './components/Minterieur';
import MinterieurManager from './components/MinterieurManager';
import Mfinance from './components/Mfinance';
import MfinanceManager from './components/MfinanceManager';

const styles = theme => ({
  main: {
    padding: 3 * theme.spacing.unit,
    [theme.breakpoints.down('xs')]: {
      padding: 2 * theme.spacing.unit,
    },
  },
});

const App = ({ classes }) => (
  <Fragment>
    <CssBaseline/>
    <main className={classes.main}>
    <Route exact path="/" component={Home} />
    <Route exact path="/cnam" component={Cnam} />
    <Route exact path="/cnam/:id" component={CnamManager}/>
    <Route exact path="/b3" component={Minterieur}/>
    <Route exact path="/b3/:id" component={MinterieurManager}/>
    <Route exact path="/declaration-revenu" component={Mfinance}/>
    <Route exact path="/declaration-revenu/:id" component={MfinanceManager}/>
    </main>
  </Fragment>
);

export default withStyles(styles)(App);