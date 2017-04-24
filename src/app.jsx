import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Map, List } from 'immutable';
import { connect } from 'react-redux';

import { getPageName, makeRecord } from './utils';
import { Route, NavLink } from './components/routing';
import Store from './store';

import './app.css';

export class App extends PureComponent {
  render() {
    const { onPageOpen } = this.props;
    return <div className={`app page page_${getPageName.call(this)}`}>
      <header className="app-header">
        <NavLink to="/"><span className="logo">
          <img alt="logo" className="logo__icon" src={require('../public/logo.svg')}/>
          <span>App</span>
        </span></NavLink>
        <NavLink to="/reducer"><span>Reducer</span></NavLink>
      </header>
      <main>
        <Route exact path="/" component={require('./pages/index').default}/>
        <Route path="/reducer" component={require('./pages/reducer').default}/>
      </main>
      <footer></footer>
    </div>;
  }
}

App.contextTypes = {
  router: PropTypes.object.isRequired
};

// const mapStateToProps = state => ({
// });

// const mapDispatchToProps = ({
// });

const ConnectedApp = connect(null, null)(App);

/* eslint-disable */
const store = Store(Map({
  reducer: makeRecord({}),
  pages: makeRecord({ hasPrintArea: false })
}));
/* eslint-enable */

const Root = () => {
  return <Provider {...{store}}>
    <Router>
      <Route path="/" component={ConnectedApp} />
    </Router>
  </Provider>;
};

export default Root;
