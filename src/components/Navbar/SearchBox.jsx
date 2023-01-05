import React from 'react';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';

function SearchBox() {
  return (
    <>
      <form action="" className="relative mx-2">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search"
          className="w-full rounded-lg bg-gray-200/70 py-2 pl-10 pr-2 ring-primary/50 focus:bg-gray-100 focus:outline-none focus:ring dark:bg-gray-700 dark:text-gray-200"
        />
        <button
          aria-label="search"
          className="pointer-events-none absolute left-0 rounded-xl p-2"
        >
          <SearchIcon />
        </button>
      </form>
      <div className="mx-2 flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
        <p className="p-1">item-1</p>
        <p className="p-1">item-2</p>
        <p className="p-1">item-3</p>
      </div>
    </>
  );
}

export default SearchBox;
