import React from 'react';
// Make sure these imports match your actual file names exactly
import NavBar from './NavBar';  // File name must be "NavBar.js" (case-sensitive)
import Home from './Home';      // File name must be "Home.js"
import About from './About';    // File name must be "About.js"

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