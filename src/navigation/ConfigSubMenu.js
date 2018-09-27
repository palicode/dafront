import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withNavigationViewController } from '@atlaskit/navigation-next';
import { JiraWordmark } from '@atlaskit/logo';

import LinkItem from './LinkItem'

export const configView = {
  id: 'product/issues',
  type: 'product',
  getItems: () => [
    {
      type: 'HeaderSection',
      id: 'product/issues:header',
      items: [
        {
          type: 'Wordmark',
          wordmark: JiraWordmark,
          id: 'jira-wordmark',
        },
        {
          type: 'BackItem',
          id: 'back-item',
          goTo: 'product/home',
          text: 'Back to Jira',
        },
      ],
    },
    {
      type: 'MenuSection',
      nestedGroupKey: 'menu',
      id: 'product/issues:menu',
      parentId: 'product/home:menu',
      alwaysShowScrollHint: true,
      items: [
        {
          type: 'SectionHeading',
          text: 'Issues and filters',
          id: 'issues-and-filters-heading',
        },
        {
          type: LinkItem,
          id: 'search-issues',
          text: 'Search issues',
          to: '/issues',
        },
        { type: 'GroupHeading', id: 'other-heading', text: 'Other' },
        { type: 'Item', text: 'My open issues', id: 'my-open-issues' },
        { type: 'Item', text: 'Reported by me', id: 'reported-by-me' },
        { type: 'Item', text: 'All issues', id: 'all-issues' },
        { type: 'Item', text: 'Open issues', id: 'open-issues' },
        { type: 'Item', text: 'Done issues', id: 'done-issues' },
        {
          type: 'Item',
          text: 'Viewed recently',
          id: 'viewed-recently',
        },
        {
          type: 'Item',
          text: 'Created recently',
          id: 'created-recently',
        },
        {
          type: 'Item',
          text: 'Resolved recently',
          id: 'resolved-recently',
        },
        {
          type: 'Item',
          text: 'Updated recently',
          id: 'updated-recently',
        },
        { type: 'Separator', id: 'separator' },
        {
          type: 'Item',
          text: 'View all filters',
          id: 'view-all-filters',
        },
      ],
    },
  ],
};

class ConfigurationSubmenu extends Component {
  componentDidMount() {
    const { navigationViewController } = this.props;
    navigationViewController.setView(configView.id);
  }

  render() {
    return (
      <div css={{ padding: 30 }}>
        <h1>Issues and filters</h1>
      </div>
    );
  }
}

ConfigurationSubmenu.propTypes = {
  navigationViewController: PropTypes.func.isRequired,
}

export default withNavigationViewController(ConfigurationSubmenu)
