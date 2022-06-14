import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Landing/landing';
import ProjectDescription from './pages/ProjectDescription';
import Project from './components/WorkComponent/projects';


function App() {

  return (
  
      <Router>
        <Routes>
          <Route path="/" element={<Main />} exact />
          <Route path="/projectDescription" element={<ProjectDescription />} exact />
        </Routes>
      </Router>
  

  );
}

export default App;
