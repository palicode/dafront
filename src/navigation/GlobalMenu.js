import React from 'react'
import GlobalNavigation from '@atlaskit/global-navigation';
import { JiraIcon } from '@atlaskit/logo';

const MyGlobalNavigation = () => (
  <GlobalNavigation
    productIcon={() => <JiraIcon size="medium" />}
    onProductClick={() => {}}
  />
);

export default MyGlobalNavigation
