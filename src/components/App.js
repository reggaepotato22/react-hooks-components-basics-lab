import React from 'react';

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home" data-testid="home-container">
      <h1>Home</h1>
    </div>
  );
}

function About() {
  return (
    <div id="about" data-testid="about-container">
      <h2>About Us</h2>
      <p>This is the about section of our website.</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;