import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <p>nav</p>
      </nav>
      <header className="App-header">
          <menu className="App-menu">
            <button className="menu-button-navigation"></button>
            <p>tarkov tracker</p>
            <button className="menu-button-options"></button>
          </menu>
      </header>
      <main className="App-main">
        <p>main</p>
      </main>
      <footer className="App-footer">
        <p>footer</p>
      </footer>
    </div>
  );
}

export default App;
