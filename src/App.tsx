import React, { ReactElement } from 'react';

import 'App.scss';
import AppHeader from './ui/component/AppHeader/AppHeader';

const App = (): ReactElement => {
  return (
    <div>
      <AppHeader />
      <div style={{ height: '100vh' }}>1</div>
      <div style={{ height: '100vh' }}>2</div>
      <div style={{ height: '100vh' }}>3</div>
    </div>
  );
};

export default App;
