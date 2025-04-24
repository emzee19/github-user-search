// src/App.tsx
import { useState, useEffect, useCallback } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';
import ErrorMessage from './components/ErrorMessage';
import LoadingSpinner from './components/LoadingSpinner';

// Define TypeScript interfaces
interface GitHubUser {
  login: string;
  avatar_url: string;
  name: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  html_url: string;
}

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>('');

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Fetch user data
  const fetchUser = useCallback(async (username: string) => {
    if (!username.trim()) {
      setUser(null);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('User not found');
        }
        throw new Error('Error fetching user data');
      }

      const userData = await response.json();
      setUser(userData);
    } catch (err) {
      setUser(null);
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  // Effect to fetch user when debounced search term changes
  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchUser(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, fetchUser]);

  const handleSearch = (username: string) => {
    setSearchTerm(username);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>GitHub User Search</h1>
      </header>
      
      <main className="app-content">
        <SearchBar onSearch={handleSearch} searchTerm={searchTerm} />
        
        {loading && <LoadingSpinner />}
        
        {error && <ErrorMessage message={error} />}
        
        {user && !loading && !error && <UserProfile user={user} />}
      </main>
    </div>
  );
}

export default App;