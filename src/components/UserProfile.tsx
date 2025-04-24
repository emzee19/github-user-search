import React from 'react';
import './UserProfile.css';

interface UserProfileProps {
  user: {
    login: string;
    avatar_url: string;
    name: string | null;
    bio: string | null;
    public_repos: number;
    followers: number;
    html_url: string;
  };
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="user-profile">
      <div className="user-header">
        <img 
          src={user.avatar_url} 
          alt={`${user.login}'s avatar`} 
          className="user-avatar" 
        />
        <div className="user-info">
          <h2 className="user-name">{user.name || user.login}</h2>
          <p className="user-username">@{user.login}</p>
        </div>
      </div>
      
      {user.bio && <p className="user-bio">{user.bio}</p>}
      
      <div className="user-stats">
        <div className="stat">
          <span className="stat-value">{user.public_repos}</span>
          <span className="stat-label">Repositories</span>
        </div>
        <div className="stat">
          <span className="stat-value">{user.followers}</span>
          <span className="stat-label">Followers</span>
        </div>
      </div>
      
      <a 
        href={user.html_url}
        className="github-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default UserProfile;