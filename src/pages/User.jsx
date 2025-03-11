function User() {
  return (
    <div className="user-actions">
      <div className="user-profile hide">
        <span>Welcome [username]</span>
        <ul className="dropdown">
          <li>
            <a href="profile.html">My Profile</a>
          </li>
          <li>
            <a href="reviews.html">My Reviews</a>
          </li>
          <li>
            <a href="logout.html">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default User;
