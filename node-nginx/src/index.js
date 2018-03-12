import React from 'react'
import { render } from 'react-dom'

import App from './container/app'

const renderIndex = Component => {
  render(
  	<Component />,
    document.getElementById('app')
  );
};

renderIndex(App);