import "./App.css";

function App() {
  return (
    <div class="container">
      <h2>Atividade 1</h2>
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

      <h2>Atividade 2</h2>
      <h3>Exercício 1</h3>
      <div class="loader2"></div>

      <h3>Exercício 2</h3>
      <div class="loader-container">
        <div class="loader3"></div>
      </div>

      <h3>Exercício 3</h3>
      <div class="loader">
        <div id="bit1"></div>
        <div id="bit2"></div>
        <div id="bit3"></div>
      </div>

      <h3>Exercício 4</h3>
      <div class="progress-container">
        <div class="progress-bar"></div>
      </div>

      <h3>Exercício 5</h3>
      <div class="container2">
        <div class="goblin-down"></div>
        <div class="goblin-right"></div>
        <div class="goblin-up"></div>
        <div class="goblin-left"></div>
      </div>
    </div>
  );
}

export default App;
