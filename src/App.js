import './App.css';
import AllPostsComponent from './components/AllPostsComponent';
import PostLandingComponent from './components/PostLandingComponent';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { theme } from './styles/theme';

function App() {

   // Define the active theme
  const ACTIVE_THEME = "darkTheme";

  // Generate CSS variables from the theme
  const cssVariables = Object.entries(theme[ACTIVE_THEME]).map(([key, value]) => {
    return `--${key}: ${value};`;
  });

   // Set CSS variables on the root element
  document.documentElement.style.cssText = cssVariables.join('');

  return (
     // Render the main app container
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<AllPostsComponent />} />
            <Route path="/post/:id" element={<PostLandingComponent/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
