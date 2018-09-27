import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

import BacklogIcon from '@atlaskit/icon/glyph/backlog';
import BoardIcon from '@atlaskit/icon/glyph/board';
import ComponentIcon from '@atlaskit/icon/glyph/component';
import GraphLineIcon from '@atlaskit/icon/glyph/graph-line';
import PageIcon from '@atlaskit/icon/glyph/page';
import ShipIcon from '@atlaskit/icon/glyph/ship';
import IssueIcon from '@atlaskit/icon/glyph/issue';

import { ItemAvatar, withNavigationViewController } from '@atlaskit/navigation-next';
import LinkItem from './LinkItem'

export const projectHomeView = {
  id: 'project/home',
  type: 'container',
  getItems: () => [
    {
      type: 'HeaderSection',
      id: 'project/home:header',
      items: [
        {
          type: 'ContainerHeader',
          before: itemState => (
            <ItemAvatar
              itemState={itemState}
              appearance="square"
              size="large"
            />
          ),
          text: 'My project',
          subText: 'Project description',
          id: 'project-header',
        },
      ],
    },
    {
      type: 'MenuSection',
      nestedGroupKey: 'menu',
      id: 'project/home:menu',
      parentId: null,
      items: [
        {
          type: LinkItem,
          before: BacklogIcon,
          text: 'Backlog',
          to: '/projects/my-project',
          id: 'backlog',
        },
        {
          type: 'Item',
          before: BoardIcon,
          text: 'Active sprints',
          id: 'active-sprints',
        },
        {
          type: 'Item', before: GraphLineIcon, text: 'Reports', id: 'reports',
        },
        { type: 'Separator', id: 'separator' },
        {
          type: 'Item', before: ShipIcon, text: 'Releases', id: 'releases',
        },
        {
          type: 'Item',
          before: IssueIcon,
          text: 'Issues and filters',
          id: 'issues-and-filters',
        },
        {
          type: 'Item', before: PageIcon, text: 'Pages', id: 'pages',
        },
        {
          type: 'Item',
          before: ComponentIcon,
          text: 'Components',
          id: 'components',
        },
      ],
    },
  ],
};


class ProjectBacklogRouteBase extends Component {
  componentDidMount() {
    const { navigationViewController } = this.props;
    navigationViewController.setView(projectHomeView.id);
  }

  render() {
    return (
      <div css={{ padding: 30 }}>
        <h1>My Project</h1>
        <p>
          <Link to="/">Back to Dashboards</Link>
        </p>
      </div>
    );
  }
}

ProjectBacklogRouteBase.propTypes = {
  navigationViewController: PropTypes.func.isRequired,
}

export default withNavigationViewController(ProjectBacklogRouteBase)
