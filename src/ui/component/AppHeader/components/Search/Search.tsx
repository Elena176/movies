import React, { ChangeEvent, ReactElement, useState } from 'react';

import classNames from 'classnames';

import style from 'ui/component/AppHeader/components/Search/search.module.scss';
import { useInput } from 'ui/hooks/useInput';

const Search = (): ReactElement => {
  const { value, onChange, setValue } = useInput('');

  const [isVisibleButton, setIsVisibleButton] = useState(false);

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setIsVisibleButton(true);
    onChange(event);
  };

  const handleClearInput = (): void => {
    setValue('');
    setIsVisibleButton(false);
  };

  return (
    <div className={style.search__wrapper}>
      <label className={style.search}>
        <input
          value={value}
          onChange={event => handleChangeInput(event)}
          type="text"
          placeholder="Search..."
        />

        {isVisibleButton && (
          <button
            onClick={handleClearInput}
            className={classNames(style.search__clear, value && style.active)}
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </label>
      <button className={style.search__btn} type="button">
        <svg
          width="17px"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Search;
