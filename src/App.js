
import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import {
  LayoutManagerWithViewController,
  NavigationProvider,
  withNavigationViewController,
} from '@atlaskit/navigation-next';
import PropTypes from 'prop-types'

import ProjectMenu, { projectHomeView } from './navigation/ProjectMenu'
import ProductMenu, { productHomeView } from './navigation/ProductMenu'
import ConfigSubMenu, { configView } from './navigation/ConfigSubMenu'
import GlobalNavigation from './navigation/GlobalMenu'

class App extends Component {
  componentDidMount() {
    const { navigationViewController } = this.props;
    navigationViewController.addView(productHomeView);
    navigationViewController.addView(configView);
    navigationViewController.addView(projectHomeView);
    navigationViewController.setInitialPeekViewId(productHomeView.id);
  }

  render() {
    return (
      <LayoutManagerWithViewController globalNavigation={GlobalNavigation}>
        <Switch>
          <Route path="/projects/my-project" component={ProjectMenu} />
          <Route path="/issues" component={ConfigSubMenu} />
          <Route path="/" component={ProductMenu} />
        </Switch>
      </LayoutManagerWithViewController>
    );
  }
}

App.propTypes = {
  navigationViewController: PropTypes.func.isRequired,
}

const AppWithNavigationViewController = withNavigationViewController(App);

export default () => (
  <HashRouter>
    <NavigationProvider>
      <AppWithNavigationViewController />
    </NavigationProvider>
  </HashRouter>
);
