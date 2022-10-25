import React, { ReactElement } from 'react';

import style from 'ui/component/AppHeader/appHeader.module.scss';
import Logo from 'ui/component/AppHeader/components/Logo/Logo';
import Search from 'ui/component/AppHeader/components/Search/Search';

const AppHeader = (): ReactElement => {
  return (
    <div className={style.header}>
      <div className={style.header__wrapper}>
        <Logo />
        <Search />
        <button type="button">hello</button>
      </div>
    </div>
  );
};

export default AppHeader;
