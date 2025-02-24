import './App.css';

function App() {
  return (
    <div className="App">
      <div className="form">
        <div className="login-form">
          <h2>Login Form</h2>
          <label>UserName</label>
          <input type='text' placeholder='User Name'/>
          <label>Email</label>
          <input type='email' placeholder='Email'/>
          <label>Password</label>
          <input type="password" placeholder='Password'/>
          <button type='submit'>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
