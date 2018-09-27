import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

import { withNavigationViewController } from '@atlaskit/navigation-next';
import PortfolioIcon from '@atlaskit/icon/glyph/portfolio';
import DashboardIcon from '@atlaskit/icon/glyph/dashboard';
import FolderIcon from '@atlaskit/icon/glyph/folder';
import IssueIcon from '@atlaskit/icon/glyph/issue';
import { JiraWordmark } from '@atlaskit/logo';

import LinkItem from './LinkItem'

export const productHomeView = {
  id: 'product/home',
  type: 'product',
  getItems: () => [
    {
      type: 'HeaderSection',
      id: 'product/home:header',
      items: [
        {
          type: 'Wordmark',
          wordmark: JiraWordmark,
          id: 'jira-wordmark',
        },
      ],
    },
    {
      type: 'MenuSection',
      nestedGroupKey: 'menu',
      id: 'product/home:menu',
      parentId: null,
      items: [
        {
          type: LinkItem,
          id: 'dashboards',
          before: DashboardIcon,
          text: 'Dashboards',
          to: '/',
        },
        {
          type: 'Item', id: 'projects', before: FolderIcon, text: 'Projects',
        },
        {
          type: 'Item',
          id: 'issues-and-filters',
          goTo: 'product/issues',
          before: IssueIcon,
          text: 'Issues and filters',
        },
        {
          type: 'Item',
          id: 'portfolio',
          before: PortfolioIcon,
          text: 'Portfolio',
        },
      ],
    },
  ],
};

class DashboardsRouteBase extends Component {
  componentDidMount() {
    const { navigationViewController } = this.props;
    navigationViewController.setView(productHomeView.id);
  }

  render() {
    return (
      <div css={{ padding: 30 }}>
        <h1>Dashboards</h1>
        <h3>Projects:</h3>
        <ul>
          <li>
            <Link to="/projects/my-project">My Project</Link>
          </li>
        </ul>
      </div>
    );
  }
}

DashboardsRouteBase.propTypes = {
  navigationViewController: PropTypes.func.isRequired,
}

export default withNavigationViewController(DashboardsRouteBase);
