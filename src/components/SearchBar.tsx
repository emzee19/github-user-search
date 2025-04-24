import React, { ChangeEvent, FormEvent, useState } from 'react';
import './SearchBar.css';

interface SearchBarProps {
  onSearch: (username: string) => void;
  searchTerm: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, searchTerm }) => {
  const [inputValue, setInputValue] = useState<string>(searchTerm);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onSearch(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Enter GitHub username"
        value={inputValue}
        onChange={handleChange}
        aria-label="Search GitHub users"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default SearchBar;