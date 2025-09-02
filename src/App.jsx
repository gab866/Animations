import "./App.css";

function App() {
  return (
    <div class="container">
      <div class="input-group">
        <label for="login">Username:</label>
        <input id="login" type="text" name="login" placeholder="Username" />
      </div>
      <div class="input-group">
        <label for="password">Password:</label>
        <input
          id="password"
          type="password"
          name="login"
          placeholder="Password"
        />
      </div>
      <div class="button-group">
        <button>Enter</button>
      </div>
    </div>
  );
}

export default App;
