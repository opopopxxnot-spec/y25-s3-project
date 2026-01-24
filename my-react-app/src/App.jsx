import './App.css'

function App() {
  return (
    <div className="app">

      <div className="card profile-card">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="profile-pic"
        />
        <div className="details">
          <h2>Aaryan</h2>
          <p><strong>Role:</strong> CEO</p>
          <p><strong>Bio:</strong> Worlds ***** person</p>
        </div>
      </div>

      <div className="card stats-card">
        <div className="stat">
          <h3>1.2K</h3>
          <p>Views</p>
        </div>
        <div className="stat">
          <h3>340</h3>
          <p>Posts</p>
        </div>
        <div className="stat">
          <h3>980</h3>
          <p>Followers</p>
        </div>
      </div>

    </div>
  )
}

export default App
