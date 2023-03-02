import React from 'react';
import { useGlobalContext } from '../context';

const Search = () => {
  const { word, handleSubmit, handleChange } = useGlobalContext();

  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="search" className="sr-only" required>
          Search
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <input
            type="text"
            name="search"
            id="search"
            className="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm my-8 p-2 dark:text-black"
            placeholder="Search Word"
            onChange={handleChange}
            value={word}
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <img src="../../public/assets/icon-search.svg" alt="" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
